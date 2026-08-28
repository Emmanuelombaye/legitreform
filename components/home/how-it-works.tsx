import { HOME_STEPS } from "@/lib/home";

export function HomeHowItWorks() {
  return (
    <section id="how-it-works" className="container-page py-16">
      <p className="rv-kicker text-xs font-semibold uppercase">Get started with no insurance required.</p>
      <h2 className="mt-3 font-display text-4xl">How Reform Vital Works</h2>
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {HOME_STEPS.map((step) => (
          <li key={step.title} className="overflow-hidden rounded-2xl border border-border bg-card">
            <img className="rv-step-photo" src={step.image} alt={step.alt} width={400} height={220} />
            <div className="p-6">
              <h3 className="text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
