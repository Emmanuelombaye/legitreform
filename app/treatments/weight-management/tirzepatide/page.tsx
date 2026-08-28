import type { Metadata } from "next";
import { TreatmentPage } from "@/components/treatment-page";
import { TIRZEPATIDE } from "@/lib/content";

export const metadata: Metadata = {
  title: `${TIRZEPATIDE.name} — $${TIRZEPATIDE.price}/month all-inclusive`,
  description: TIRZEPATIDE.description,
};

export default function TirzepatideRoute() {
  return <TreatmentPage program={TIRZEPATIDE} />;
}
