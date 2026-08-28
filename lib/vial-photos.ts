export type VialShot = "front" | "angle" | "packaging" | "label" | "lifestyle";

const FRONTS: Record<string, string> = {
  tirzepatide: "/images/vials/vial-tirz-front.png",
  semaglutide: "/images/vials/vial-sema-front.png",
};

export function vialPhoto(programId: string, _shot: VialShot = "front"): string | null {
  return FRONTS[programId] ?? null;
}
