import type { Program } from "@/lib/content";

export function AboutSection({ program }: { program: Program }) {
  return (
    <section className="border-y border-border surface-sand">
      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <h2 className="text-3xl">About this program</h2>
          <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            {program.about.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <h3 className="mt-8 mb-2 text-lg text-foreground">How it may work</h3>
            {program.howItWorks.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <aside className="rounded-xl border p-5 border-border bg-secondary">
            <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground uppercase">
              Product status
            </h3>
            <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {program.productStatus.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          </aside>
          <aside className="rounded-xl border p-5 border-teal/40 bg-teal/8">
            <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground uppercase">
              Eligibility and provider review
            </h3>
            <div className="mt-2 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {program.eligibility.map((item) => (
                <p key={item.slice(0, 40)}>{item}</p>
              ))}
            </div>
          </aside>
        </aside>
      </div>
    </section>
  );
}
