function LogoMark({ height = 32 }: { height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="rv-logo-mark"
    >
      <path
        d="M20 20 H70 C90 20 100 32 100 48 C100 64 88 74 70 74 H48 V105 H20 V20 Z M48 44 V52 H68 C74 52 78 49 78 46 C78 43 74 44 68 44 H48 Z"
        fill="#0D1B2A"
      />
      <path d="M48 60 L85 105 H112 L72 56 Z" fill="#0D1B2A" />
      <path d="M102 40 L125 105 L150 40 H128 L116 80 L108 55 Z" fill="#00A896" />
      <circle cx="94" cy="40" r="5" fill="#00A896" />
      <circle cx="106" cy="52" r="5" fill="#00A896" />
      <line x1="94" y1="40" x2="106" y2="52" stroke="#00A896" strokeWidth="3" />
      <circle cx="106" cy="68" r="5" fill="#00B4D8" />
      <circle cx="94" cy="80" r="5" fill="#00B4D8" />
      <line x1="106" y1="68" x2="94" y2="80" stroke="#00B4D8" strokeWidth="3" />
    </svg>
  );
}

export function Logo({ variant = "lockup" }: { variant?: "header" | "lockup" }) {
  if (variant === "header") {
    return (
      <span className="rv-logo">
        <LogoMark height={28} />
        <span className="rv-wordmark">Reform Vital</span>
      </span>
    );
  }

  return (
    <span className="rv-logo">
      <LogoMark />
      <span className="rv-logo-type">
        REFORM <span className="rv-logo-vital">VITAL</span>
        <sup className="rv-logo-tm">T</sup>
      </span>
    </span>
  );
}
