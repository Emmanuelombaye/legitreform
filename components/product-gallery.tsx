"use client";

import { useState } from "react";
import { Expand } from "@/components/icons";
import { VialMedia } from "@/components/vial-media";
import type { Program } from "@/lib/content";
import type { VialShot } from "@/lib/vial-photos";

const TABS: { id: string; label: string; variant: VialShot }[] = [
  { id: "product", label: "Product", variant: "front" },
  { id: "angle", label: "Alternate angle", variant: "angle" },
  { id: "packaging", label: "Packaging", variant: "packaging" },
  { id: "label", label: "Label detail", variant: "label" },
  { id: "lifestyle", label: "Lifestyle", variant: "lifestyle" },
];

export function ProductGallery({ program }: { program: Program }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const tab = TABS[active];
  const scale = zoomed ? "scale-125" : "scale-100";

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className="grid aspect-square place-items-center p-8">
          <VialMedia
            programId={program.id}
            idPrefix={`${program.id}-main-${tab.id}`}
            name={program.name}
            strength={program.strength}
            form={program.form}
            shot={tab.variant}
            label={program.vialLabel}
            className={`h-full w-full transition-transform duration-300 ${scale}`}
          />
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          <button
            type="button"
            className="rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-semibold hover:bg-background"
            aria-pressed={zoomed}
            onClick={() => setZoomed((v) => !v)}
          >
            Zoom
          </button>
          <button
            type="button"
            aria-label="View image fullscreen"
            className="rounded-full border border-border bg-background/90 p-2 hover:bg-background"
            onClick={() => setZoomed(true)}
          >
            <Expand className="size-4" />
          </button>
        </div>
      </div>
      <ul className="mt-3 grid grid-cols-5 gap-2" role="tablist" aria-label="Product images">
        {TABS.map((item, i) => (
          <li key={item.id}>
            <button
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={item.label}
              className={`grid aspect-square w-full place-items-center overflow-hidden rounded-lg border p-1 bg-card ${active === i ? "border-primary" : "border-border hover:border-input"}`}
              onClick={() => setActive(i)}
            >
              <VialMedia
                programId={program.id}
                idPrefix={`${program.id}-thumb-${item.id}`}
                name={program.name}
                strength={program.strength}
                form={program.form}
                shot={item.variant}
                overlay={item.variant !== "lifestyle"}
                className="h-full w-full"
              />
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-muted-foreground">
        Product imagery is an illustrative mock-up. Labels shown as text only; no brand marks.
      </p>
    </div>
  );
}
