import type { Metadata } from "next";
import Link from "next/link";
import { sitemapGroups } from "@/lib/legal-pages";

export const metadata: Metadata = {
  title: "Site Map",
  description: "All public Reform Vital pages.",
};

export default function SitemapPage() {
  return (
    <main id="main" className="legal-page">
      <div className="container-page legal-article">
        <p className="legal-kicker">LEGAL</p>
        <h1 className="legal-title">Site Map</h1>
        <p className="legal-updated">Last updated August 27, 2026</p>
        {sitemapGroups.map((group) => (
          <section key={group.title} className="legal-hub">
            <h2 className="legal-hub-title">{group.title}</h2>
            <ul className="legal-hub-list">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
