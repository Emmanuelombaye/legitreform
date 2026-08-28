export const BRAND = {
  primary: "#0D1B2A",
  primaryDark: "#070E17",
  accent: "#00A896",
  accentCyan: "#00B4D8",
  accentSoft: "#E0F2F1",
  accentGold: "#D4AF37",
  bg: "#FFFCF8",
  sand: "#EAF2F0",
  text: "#0D1B2A",
  textMuted: "#4A5B6D",
  border: "#CFE3E0",
  heroSky1: "#598EBC",
  heroSky2: "#B6BEC5",
  heroCta: "#6FCB6B",
} as const;

export const PRODUCT_ACCENT: Record<string, string> = {
  tirzepatide: BRAND.accentCyan,
  semaglutide: BRAND.accent,
};

export function productAccent(programId: string): string {
  return PRODUCT_ACCENT[programId] ?? BRAND.accent;
}
