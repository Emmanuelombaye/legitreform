import { productAccent } from "@/lib/brand";
import { vialPhoto, type VialShot } from "@/lib/vial-photos";

type Props = {
  programId: string;
  name: string;
  strength: string;
  form: string;
  shot?: VialShot;
  className?: string;
  label?: string;
  idPrefix: string;
  overlay?: boolean;
};

function Plate({
  name,
  strength,
  form,
  accent,
}: {
  name: string;
  strength: string;
  form: string;
  accent: string;
}) {
  const shortName = name.replace(" Program", "");
  return (
    <span className="pointer-events-none absolute left-1/2 top-[52%] w-[42%] min-w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-[3px] bg-white px-2 py-2 text-left shadow-sm ring-1 ring-black/10">
      <span className="mb-1 block h-0.5 w-full" style={{ background: accent }} />
      <span className="block text-[11px] font-bold leading-tight tracking-tight text-[#0D1B2A]">{shortName}</span>
      {strength ? <span className="mt-0.5 block text-[8px] text-[#4A5B6D]">{strength}</span> : null}
      {form ? <span className="block text-[8px] text-[#4A5B6D]">{form}</span> : null}
      <span className="mt-1 block text-[7px] font-bold tracking-[0.12em]" style={{ color: accent }}>
        RX ONLY
      </span>
    </span>
  );
}

export function VialMedia({
  programId,
  name,
  strength,
  form,
  shot = "front",
  className,
  label,
  overlay = true,
}: Props) {
  const src = vialPhoto(programId, shot);
  const shortName = name.replace(" Program", "");
  const accent = productAccent(programId);

  if (shot === "packaging") {
    return (
      <span className={`relative inline-grid place-items-center ${className ?? ""}`}>
        <span className="relative h-[72%] w-[48%] min-h-[7rem] min-w-[5.5rem] rounded-sm bg-white shadow-sm ring-1 ring-black/10">
          <span className="block h-2 w-full" style={{ background: accent }} />
          <span className="block px-3 py-4 text-left">
            <span className="block text-sm font-bold text-[#0D1B2A]">{shortName}</span>
            {strength ? <span className="mt-1 block text-[10px] text-[#4A5B6D]">{strength}</span> : null}
            {form ? <span className="block text-[10px] text-[#4A5B6D]">{form}</span> : null}
            <span className="mt-3 block text-[9px] font-bold tracking-[0.14em]" style={{ color: accent }}>
              RX ONLY
            </span>
          </span>
        </span>
      </span>
    );
  }

  if (!src) return null;

  const imgClass =
    shot === "angle"
      ? "h-full w-full origin-bottom object-contain -rotate-[8deg]"
      : shot === "label"
        ? "h-full w-full origin-center scale-150 object-contain"
        : "h-full w-full object-contain";

  return (
    <span className={`relative inline-grid place-items-center overflow-hidden ${shot === "lifestyle" ? "bg-[#EAF2F0]" : ""} ${className ?? ""}`}>
      <img src={src} alt={label || name} className={imgClass} />
      {overlay && shot !== "lifestyle" ? (
        <Plate name={name} strength={strength} form={form} accent={accent} />
      ) : null}
    </span>
  );
}
