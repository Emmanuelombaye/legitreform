import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Email or call Reform Vital before you start an intake.",
};

export default function ContactPage() {
  return (
    <main id="main" className="container-page max-w-2xl py-14">
      <p className="rv-kicker text-xs font-semibold uppercase">Reform Vital</p>
      <h1 className="mt-3 font-display text-4xl">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        Questions about compounded weight-management care or whether telehealth is a fit. Email or call — this is
        not an emergency line.
      </p>
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Email</h2>
          <p className="mt-1 text-lg">
            <a className="font-semibold hover:underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Privacy requests:{" "}
            <a className="underline underline-offset-4" href={`mailto:${COMPANY.privacyEmail}`}>
              {COMPANY.privacyEmail}
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Phone</h2>
          <p className="mt-1 text-lg">
            <a className="font-semibold hover:underline" href={`tel:${COMPANY.phoneTel}`}>
              {COMPANY.phone}
            </a>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Legal notices also list {COMPANY.legalPhone}. For chest pain, severe vomiting, or trouble
            breathing, call 911.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Mailing address</h2>
          <p className="mt-1 text-sm leading-relaxed">
            {COMPANY.legalName}
            <br />
            {COMPANY.address}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold tracking-wide uppercase">Start care</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            If you are ready for a clinician to review your file, begin with a program. Completing
            intake does not guarantee a prescription.
          </p>
          <Link href="/treatments" className="rv-cta mt-4 inline-block rounded-full px-6 py-3 text-sm font-semibold">
            Get Started
          </Link>
        </div>
      </div>
      <p className="mt-10 text-sm text-muted-foreground">In an emergency, call 911.</p>
    </main>
  );
}
