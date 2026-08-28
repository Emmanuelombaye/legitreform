"use client";

import Link from "next/link";
import { VialMedia } from "@/components/vial-media";
import { useCart } from "@/components/cart-context";
import { PROGRAMS } from "@/lib/content";

export function TreatmentCatalog() {
  const { add } = useCart();

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-2">
      {PROGRAMS.map((program) => (
        <article
          key={program.id}
          className={`rv-product-card rv-product-card--${program.id} group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lift`}
        >
          <span className="rv-product-stripe" aria-hidden="true" />
          <Link tabIndex={-1} aria-hidden="true" href={program.href} className="block">
            <div className="relative grid h-72 place-items-center border-b border-border bg-card">
              <VialMedia
                programId={program.id}
                idPrefix={`catalog-${program.id}`}
                name={program.shortName}
                strength={program.strength}
                form={program.form}
                shot="front"
                className="h-72 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>
          <div className="flex flex-1 flex-col p-6">
            <p className="text-xs font-semibold tracking-wide text-teal-ink uppercase">{program.category}</p>
            <h2 className="mt-2 text-2xl">
              <Link href={program.href} className="hover:underline">
                {program.name}
              </Link>
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{program.summary}</p>
            <p className="mt-4 font-display text-3xl">${program.price}/month</p>
            <p className="text-xs text-muted-foreground">All-inclusive program price</p>
            <div className="mt-5 flex gap-2">
              <Link
                href={program.href}
                className="flex-1 rounded-full border border-input px-4 py-2.5 text-center text-sm font-semibold hover:bg-secondary"
              >
                View Program
              </Link>
              <button
                type="button"
                className="rv-cta flex-1 rounded-full px-4 py-2.5 text-sm font-semibold"
                onClick={() => add(program)}
              >
                Select Program
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
