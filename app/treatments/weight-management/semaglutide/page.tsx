import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { SEMAGLUTIDE } from "@/lib/content";

export const metadata: Metadata = {
  title: `${SEMAGLUTIDE.name} — $${SEMAGLUTIDE.price}/month all-inclusive`,
  description: SEMAGLUTIDE.description,
};

export default function SemaglutideRoute() {
  return <TreatmentPage program={SEMAGLUTIDE} />;
}
