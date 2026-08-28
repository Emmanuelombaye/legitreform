type VialVariant = "front" | "angle" | "packaging" | "label";
type VialSkin = "tirzepatide" | "semaglutide";

type ProductVialProps = {
  idPrefix: string;
  name: string;
  strength: string;
  form?: string;
  variant?: VialVariant;
  className?: string;
  label?: string;
};

const SKINS: Record<
  VialSkin,
  {
    width: number;
    height: number;
    fill: number;
    liquid: string;
    cap: string;
    accent: string;
    neck: string;
  }
> = {
  tirzepatide: {
    width: 108,
    height: 208,
    fill: 0.56,
    liquid: "#D5E6EA",
    cap: "#0D1B2A",
    accent: "#00B4D8",
    neck: "#C9D3DD",
  },
  semaglutide: {
    width: 124,
    height: 186,
    fill: 0.44,
    liquid: "#E4ECF3",
    cap: "#0D1B2A",
    accent: "#00A896",
    neck: "#D3DCE4",
  },
};

function skinFromName(name: string): VialSkin {
  return name.toLowerCase().includes("sema") ? "semaglutide" : "tirzepatide";
}

function Defs({ idPrefix, skin }: { idPrefix: string; skin: VialSkin }) {
  const glass =
    skin === "tirzepatide"
      ? ["#F3F8FB", "#FFFFFF", "#D7E3EC"]
      : ["#F7FAFC", "#FFFFFF", "#E2EAF1"];
  return (
    <defs>
      <linearGradient id={`${idPrefix}-glass`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor={glass[0]} />
        <stop offset="38%" stopColor={glass[1]} />
        <stop offset="100%" stopColor={glass[2]} />
      </linearGradient>
      <radialGradient id={`${idPrefix}-shadow`}>
        <stop offset="0%" stopColor="#23395E" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#23395E" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

function VialBody({
  idPrefix,
  name,
  strength,
  form,
  skin,
}: {
  idPrefix: string;
  name: string;
  strength: string;
  form: string;
  skin: VialSkin;
}) {
  const shortName = name.replace(" Program", "");
  const s = SKINS[skin];
  const x = 200 - s.width / 2;
  const y = 318 - s.height;
  const liquidH = s.height * s.fill;
  const liquidY = y + s.height - liquidH;
  const capW = s.width * 0.62;
  const capX = 200 - capW / 2;
  const labelW = s.width * 0.86;
  const labelX = 200 - labelW / 2;
  const labelY = y + s.height * 0.2;

  return (
    <g>
      <rect x={x} y={y} width={s.width} height={s.height} rx="9" fill={`url(#${idPrefix}-glass)`} />
      <rect x={x + 8} y={y + 6} width={12} height={s.height - 14} rx="3" fill="#FFFFFF" opacity="0.55" />
      <rect x={x + s.width - 16} y={y + 8} width={7} height={s.height - 18} rx="3" fill="#23395E" opacity="0.07" />
      <rect x={x} y={liquidY} width={s.width} height={liquidH} rx="9" fill={s.liquid} opacity="0.9" />
      <rect x={200 - s.width * 0.34} y={y - 8} width={s.width * 0.68} height={12} rx="3" fill={s.neck} />
      <rect x={capX} y={y - 32} width={capW} height={28} rx="3" fill={s.cap} />
      <rect x={capX} y={y - 16} width={capW} height={5} fill="#000000" opacity="0.12" />
      <rect x={capX + 8} y={y - 30} width={9} height={24} rx="2" fill="#FFFFFF" opacity="0.18" />
      <rect x={labelX} y={labelY} width={labelW} height={s.height * 0.58} rx="3" fill="#FFFFFF" />
      <rect x={labelX} y={labelY} width={labelW} height="4" fill={s.accent} />
      <text
        x={labelX + 10}
        y={labelY + 32}
        fontSize={shortName.length > 12 ? 11 : 13}
        fontWeight="700"
        fill="#0D1B2A"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {shortName}
      </text>
      <text x={labelX + 10} y={labelY + 48} fontSize="8" fill="#23395E" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {strength}
      </text>
      <text x={labelX + 10} y={labelY + 62} fontSize="8" fill="#8A97A8" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {form}
      </text>
      <text
        x={labelX + 10}
        y={labelY + s.height * 0.5}
        fontSize="7.5"
        fontWeight="700"
        letterSpacing="1"
        fill={s.accent}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        RX ONLY
      </text>
    </g>
  );
}

function Packaging({
  name,
  strength,
  form,
  skin,
}: {
  name: string;
  strength: string;
  form: string;
  skin: VialSkin;
}) {
  const shortName = name.replace(" Program", "");
  const s = SKINS[skin];
  const wide = skin === "semaglutide";
  const boxX = wide ? 96 : 110;
  const boxW = wide ? 176 : 148;
  return (
    <g>
      <polygon
        points={`${boxX + boxW},134 ${boxX + boxW + 34},118 ${boxX + boxW + 34},304 ${boxX + boxW},320`}
        fill={wide ? "#C9D8E4" : "#D6E3EC"}
      />
      <polygon points={`${boxX},134 ${boxX + 34},118 ${boxX + boxW + 34},118 ${boxX + boxW},134`} fill="#EAF1F6" />
      <rect x={boxX} y="134" width={boxW} height="186" rx="3" fill="#FFFFFF" />
      <rect x={boxX} y="134" width={boxW} height="186" rx="3" fill="none" stroke="#DCE4EC" />
      <rect x={boxX} y="134" width={boxW} height="9" fill={s.accent} />
      <rect x={boxX} y="266" width={boxW} height="54" fill={s.liquid} />
      <rect x={boxX + 12} y="154" width={boxW - 24} height="102" rx="3" fill="#FFFFFF" />
      <rect x={boxX + 12} y="154" width={boxW - 24} height="4" fill={s.accent} />
      <text x={boxX + 22} y="186" fontSize="13" fontWeight="700" fill="#0D1B2A" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {shortName}
      </text>
      <text x={boxX + 22} y="201" fontSize="8" fill="#23395E" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {strength}
      </text>
      <text x={boxX + 22} y="214" fontSize="8" fill="#8A97A8" fontFamily="ui-sans-serif, system-ui, sans-serif">
        {form}
      </text>
      <text
        x={boxX + 22}
        y="246"
        fontSize="7.5"
        fontWeight="700"
        letterSpacing="1"
        fill={s.accent}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        RX ONLY
      </text>
    </g>
  );
}

export function ProductVial({
  idPrefix,
  name,
  strength,
  form = "Injectable solution",
  variant = "front",
  className,
  label,
}: ProductVialProps) {
  const skin = skinFromName(name);
  const angle = skin === "semaglutide" ? -11 : -7;
  const zoom = variant === "label";

  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label ?? ""} className={className}>
      <Defs idPrefix={idPrefix} skin={skin} />
      <rect width="400" height="400" fill="#FCFDFE" />
      <g transform={zoom ? "translate(200 210) scale(1.55) translate(-200 -210)" : undefined}>
        <g transform="translate(200 326) scale(1.05) translate(-200 -326)">
          <ellipse cx="200" cy="326" rx="118" ry="18" fill={`url(#${idPrefix}-shadow)`} />
          {variant === "packaging" ? (
            <Packaging name={name} strength={strength} form={form} skin={skin} />
          ) : variant === "angle" ? (
            <g transform={`rotate(${angle} 200 326)`}>
              <VialBody idPrefix={idPrefix} name={name} strength={strength} form={form} skin={skin} />
            </g>
          ) : (
            <VialBody idPrefix={idPrefix} name={name} strength={strength} form={form} skin={skin} />
          )}
        </g>
      </g>
    </svg>
  );
}

export function LifestyleThumb({ className, name = "" }: { className?: string; name?: string }) {
  const skin = skinFromName(name);
  const accent = SKINS[skin].accent;
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label="" className={className}>
      <rect width="400" height="400" fill={skin === "semaglutide" ? "#EEF3F6" : "#EAF1F6"} />
      <circle cx="200" cy="150" r="58" fill={accent} opacity="0.28" />
      <rect x="122" y="228" width="156" height="82" rx="41" fill="#23395E" opacity="0.14" />
      <rect x="186" y="188" width="28" height="54" rx="6" fill="#FFFFFF" />
      <rect x="192" y="178" width="16" height="12" rx="2" fill={SKINS[skin].cap} />
    </svg>
  );
}
