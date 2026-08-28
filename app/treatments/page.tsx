import type { Metadata } from "next";
import { TreatmentCatalog } from "@/components/treatment-catalog";

export const metadata: Metadata = {
  title: "Treatments",
  description: "Clinician-guided semaglutide and tirzepatide programs from Reform Vital.",
};

export default function TreatmentsPage() {
  return (
    <main id="main" className="container-page py-14">
      <p className="rv-kicker text-xs font-semibold uppercase">Weight Management</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">Treatments</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Two clinician-guided weight-management programs. Licensed clinicians review your case. Pharmacies fill
        only if prescribed.
      </p>
      <TreatmentCatalog />
    </main>
  );
}
