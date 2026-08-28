"use client";

import Link from "next/link";
import { VialMedia } from "@/components/vial-media";
import { useCart } from "@/components/cart-context";
import { relatedPrograms } from "@/lib/content";

export function RelatedPrograms({ currentId }: { currentId: string }) {
  const { add } = useCart();
  const programs = relatedPrograms(currentId);
  if (programs.length === 0) return null;

  return (
    <section className="container-page pb-20">
      <h2 className="text-2xl">Related programs</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <article
            key={program.id}
            className={`rv-product-card rv-product-card--${program.id} group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lift`}
          >
            <span className="rv-product-stripe" aria-hidden="true" />
            <Link tabIndex={-1} aria-hidden="true" href={program.href} className="block">
              <div className="relative grid h-44 place-items-center border-b border-border bg-card">
                <VialMedia
                  programId={program.id}
                  idPrefix={`related-${program.id}`}
                  name={program.name}
                  strength={program.strength}
                  form={program.form}
                  shot="front"
                  className="h-44 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-muted-foreground">
                <span className="size-1.5 rounded-full" style={{ background: program.accent }} aria-hidden="true" />
                {program.category}
              </p>
              <h3 className="mt-2 text-xl">
                <Link href={program.href} className="hover:underline">
                  {program.name}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{program.summary}</p>
              <div className="mt-4">
                <p className="font-display text-2xl text-foreground">${program.price}/month</p>
                <p className="text-xs text-muted-foreground">All-inclusive program price · Illustrative demonstration pricing</p>
              </div>
              <div className="mt-5 flex gap-2">
                <Link
                  href={program.href}
                  className="flex-1 rounded-full border border-input px-4 py-2.5 text-center text-sm font-semibold text-foreground hover:bg-secondary"
                >
                  View Program
                </Link>
                <button
                  type="button"
                  className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  onClick={() => add(program)}
                >
                  Select Program
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
