import Link from "next/link";

export function HomeHero() {
  return (
    <section className="rv-hero">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <h1 className="font-display text-5xl leading-[1.05] text-foreground md:text-6xl">
            Your Health,
            <br />
            Simplified.
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Affordable, personalized care from the comfort of your home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/treatments" className="rv-cta rounded-full px-6 py-3 text-sm font-semibold">
              Get Started
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-input bg-background/80 px-6 py-3 text-sm font-semibold hover:bg-secondary"
            >
              How It Works
            </Link>
          </div>
        </div>
        <div className="rv-hero-photos">
          <img
            className="rv-photo-main"
            src="/images/rv-hero-patient.png"
            alt="Patient in care"
            width={560}
            height={390}
          />
          <img
            className="rv-photo-side"
            src="/images/rv-hero-clinician.png"
            alt="Licensed clinician"
            width={360}
            height={250}
          />
        </div>
      </div>
    </section>
  );
}
