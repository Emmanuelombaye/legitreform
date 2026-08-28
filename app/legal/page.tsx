import type { Metadata } from "next";
import Link from "next/link";
import { legalPages, primaryLegalLinks, legalLinks } from "@/lib/legal-pages";

export const metadata: Metadata = {
  title: "Legal",
  description: "Reform Vital legal documents, policies, and notices — hosted on-site.",
};

export default function LegalIndexPage() {
  const hosted = legalPages.filter((page) => Boolean(page.file));
  const rest = legalLinks.filter(
    (link) => !primaryLegalLinks.some((item) => item.href === link.href) && link.href !== "/legal",
  );

  return (
    <main id="main" className="legal-page">
      <div className="container-page legal-article">
        <p className="legal-kicker">LEGAL</p>
        <h1 className="legal-title">Policies & notices</h1>
        <p className="legal-lede">
          These documents live on Reform Vital — not on Google Docs or other external sites. Open any
          policy below and stay on this site.
        </p>

        <section className="legal-hub">
          <h2 className="legal-hub-title">Core documents</h2>
          <div className="legal-hub-grid">
            {hosted.map((page) => (
              <Link key={page.slug} href={`/legal/${page.slug}`} className="legal-hub-card">
                <strong>{page.title}</strong>
                <span>{page.description}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="legal-hub">
          <h2 className="legal-hub-title">More legal links</h2>
          <ul className="legal-hub-list">
            {rest.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
