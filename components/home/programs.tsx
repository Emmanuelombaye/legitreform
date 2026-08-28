import Link from "next/link";
import { VialMedia } from "@/components/vial-media";
import { PROGRAMS } from "@/lib/content";

export function HomePrograms() {
  return (
    <section className="surface-sand border-y border-border">
      <div className="container-page py-16">
        <h2 className="font-display text-4xl">Physician-Guided Care, Explained</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Choose a program, complete intake, and a licensed clinician decides whether treatment is
          appropriate. Completing intake does not guarantee a prescription.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {PROGRAMS.map((program) => (
            <article key={program.id} className={`rv-product-card rv-product-card--${program.id} overflow-hidden rounded-2xl border border-border bg-card`}>
              <span className="rv-product-stripe" aria-hidden="true" />
              <div className="grid h-48 place-items-center border-b border-border">
                <VialMedia
                  programId={program.id}
                  idPrefix={`home-${program.id}`}
                  name={program.shortName}
                  strength={program.strength}
                  form={program.form}
                  shot="front"
                  className="h-48 w-auto"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl">{program.shortName}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{program.summary}</p>
                <p className="mt-4 font-display text-3xl">${program.price}/month</p>
                <Link
                  href={program.href}
                  className="rv-cta mt-5 inline-block rounded-full px-5 py-2.5 text-sm font-semibold"
                >
                  View {program.shortName}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
