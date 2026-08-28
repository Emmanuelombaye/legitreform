import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "About",
  description: "Physician-guided telehealth for metabolic health from Reform Vital Health LLC.",
};

export default function AboutPage() {
  return (
    <main id="main" className="container-page max-w-3xl py-14">
      <p className="rv-kicker text-xs font-semibold uppercase">About Reform Vital</p>
      <h1 className="mt-3 font-display text-4xl md:text-5xl">Physician-guided telehealth for metabolic health.</h1>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        {COMPANY.legalName} connects patients with licensed U.S. clinicians and compounding pharmacies.
        Completing intake does not guarantee a prescription.
      </p>
      <section className="mt-10 space-y-4 text-sm leading-relaxed text-foreground">
        <h2 className="text-2xl">Why we exist</h2>
        <p>
          Most online clinics sell a vial and disappear. We built Reform Vital around ongoing medical
          judgment: a licensed provider reviews your case, and a state-licensed pharmacy compounds what
          is prescribed.
        </p>
        <p>
          Prescriptions are issued only after clinical evaluation. We do not diagnose from a chatbot.
          Compounded medications are not FDA-approved and are not the same as Wegovy, Ozempic, Zepbound,
          or Mounjaro.
        </p>
      </section>
      <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
        <li>Prescriptions only after a licensed clinician evaluates your case</li>
        <li>Compounded medications fulfilled by state-licensed U.S. pharmacies</li>
        <li>Two clinician-guided programs: Semaglutide and Tirzepatide</li>
        <li>This site does not provide emergency care</li>
      </ul>
      <p className="mt-10 text-sm text-muted-foreground">
        Legal entity: {COMPANY.legalName}. Contact{" "}
        <a className="underline underline-offset-4" href={`mailto:${COMPANY.email}`}>
          {COMPANY.email}
        </a>{" "}
        or see{" "}
        <Link className="underline underline-offset-4" href="/legal">
          all legal documents
        </Link>
        .
      </p>
    </main>
  );
}
