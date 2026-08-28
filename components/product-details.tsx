"use client";

import { Check, ShieldCheck } from "@/components/icons";
import { useCart } from "@/components/cart-context";
import { INCLUDED, type Program } from "@/lib/content";

export function ProductDetails({ program }: { program: Program }) {
  const { add, setOpen } = useCart();

  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.18em] text-teal-ink uppercase">{program.category}</p>
      <h1 className="mt-3 text-4xl md:text-5xl">{program.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{program.summary}</p>
      <p className="mt-6 font-display text-4xl text-foreground">${program.price}/month</p>
      <p className="text-sm text-muted-foreground">All-inclusive program price · Illustrative demonstration pricing</p>
      <ul className="mt-6 space-y-2">
        {INCLUDED.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 size-4 shrink-0 text-teal-ink" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
        <p className="flex items-center gap-2 font-semibold text-foreground">
          <ShieldCheck className="size-4 text-teal-ink" />
          May be compounded — not FDA-approved
        </p>
        <p className="mt-2">{program.strength} (illustrative demonstration concentration)</p>
        <p className="mt-1">Available in eligible states, subject to pharmacy and regulatory review.</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          className="rv-cta rounded-full px-6 py-3 text-sm font-semibold"
          onClick={() => add(program)}
        >
          Select Program — ${program.price}/mo
        </button>
        <button
          type="button"
          className="rounded-full border border-input px-6 py-3 text-sm font-semibold hover:bg-secondary"
          onClick={() => setOpen(true)}
        >
          View cart
        </button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Purchasing a program does not guarantee that a prescription will be issued. If the provider
        does not approve treatment, the order will be handled according to the refund and cancellation
        policy. Laboratory testing, expedited shipping, replacement products, and third-party services
        are not included unless specifically stated.
      </p>
      <p className="rounded-lg border border-border bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground mt-6">
        <span className="font-semibold text-foreground">Demonstration notice.</span> Products, pricing,
        providers, pharmacies, and testimonials shown are illustrative only.
      </p>
    </div>
  );
}
