import Link from "next/link";
import { Logo } from "@/components/logo";
import { COMPANY } from "@/lib/company";
import { PROGRAMS } from "@/lib/content";
import { legalLinks, primaryLegalLinks } from "@/lib/legal-pages";

const moreLegal = legalLinks.filter(
  (link) => !primaryLegalLinks.some((item) => item.href === link.href),
);

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border surface-sand">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.8fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Modern medicine. Personalized health. Real results.
            </p>
            <p className="mt-4 text-sm">
              <a className="hover:underline" href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a className="hover:underline" href={`tel:${COMPANY.phoneTel}`}>
                {COMPANY.phone}
              </a>
            </p>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted-foreground">{COMPANY.address}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <FooterNav
              title="Treatments"
              links={PROGRAMS.map((program) => [program.href, program.shortName] as [string, string])}
            />
            <FooterNav
              title="Company"
              links={[
                ["/how-it-works", "How It Works"],
                ["/about", "About"],
                ["/safety", "Safety"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
              ]}
            />
            <FooterNav title="Legal" links={primaryLegalLinks.map((link) => [link.href, link.label] as [string, string])} />
            <FooterNav title="More" links={moreLegal.map((link) => [link.href, link.label] as [string, string])} />
          </div>
        </div>
        <div className="mt-14 space-y-4 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
          <p>{COMPANY.disclaimer}</p>
          <p>If you are experiencing a medical emergency, call 911.</p>
          <p>© 2026 {COMPANY.legalName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterNav({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <nav aria-label={title}>
      <h2 className="font-sans text-xs font-semibold tracking-wider text-foreground uppercase">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
