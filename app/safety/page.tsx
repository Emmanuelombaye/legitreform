import type { Metadata } from "next";
import Link from "next/link";
import { SafetySection } from "@/components/safety-section";

export const metadata: Metadata = {
  title: "Safety Information",
  description: "Safety notices for compounded semaglutide and tirzepatide on Reform Vital.",
};

export default function SafetyPage() {
  return (
    <main id="main">
      <div className="container-page max-w-3xl pt-14">
        <p className="rv-kicker text-xs font-semibold uppercase">Safety</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">Important Safety Information</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Compounded semaglutide and tirzepatide are prepared by licensed U.S. pharmacies only after a
          clinician prescribes them. They are not FDA-approved and are not the same as Wegovy, Ozempic,
          Zepbound, or Mounjaro.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Tell your clinician about thyroid cancer history, pancreatitis, gallbladder disease,
          pregnancy, breastfeeding, and all medicines you take. Completing intake does not guarantee a
          prescription. Call 911 for severe allergic reaction, trouble breathing, or other emergencies.
        </p>
        <p className="mt-4 text-sm">
          <Link href="/legal/medication-notifications" className="font-semibold underline underline-offset-4">
            Read the hosted safety notice
          </Link>
          {" · "}
          <Link href="/legal/medical-disclaimer" className="font-semibold underline underline-offset-4">
            Medical disclaimer
          </Link>
        </p>
      </div>
      <SafetySection />
    </main>
  );
}
