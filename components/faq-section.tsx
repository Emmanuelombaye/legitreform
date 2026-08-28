"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/icons";
import type { FaqItem } from "@/lib/content";

export function FaqSection({
  items,
  idPrefix,
  title = "Program questions",
}: {
  items: FaqItem[];
  idPrefix: string;
  title?: string;
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className="container-page pb-14">
      <h2 className="font-display text-3xl">{title}</h2>
      <div className="mt-6 max-w-3xl">
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((item, i) => {
            const expanded = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`${idPrefix}-faq-btn-${i}`}
                    aria-expanded={expanded}
                    aria-controls={`${idPrefix}-faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-[15px] font-medium text-foreground hover:bg-secondary/60"
                    onClick={() => setOpen(expanded ? -1 : i)}
                  >
                    {item.q}
                    <ChevronDown className={`size-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </button>
                </h3>
                {expanded ? (
                  <div
                    id={`${idPrefix}-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`${idPrefix}-faq-btn-${i}`}
                    className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {item.a}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
