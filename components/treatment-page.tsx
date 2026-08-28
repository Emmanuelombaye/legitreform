import Link from "next/link";
import { AboutSection } from "@/components/about-section";
import { FaqSection } from "@/components/faq-section";
import { ProductDetails } from "@/components/product-details";
import { ProductGallery } from "@/components/product-gallery";
import { RelatedPrograms } from "@/components/related-programs";
import { SafetySection } from "@/components/safety-section";
import type { Program } from "@/lib/content";

export function TreatmentPage({ program }: { program: Program }) {
  return (
    <main id="main">
      <div className="container-page pt-8">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-foreground hover:underline">
                Home
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Link href="/treatments" className="hover:text-foreground hover:underline">
                Treatments
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Link href="/treatments" className="hover:text-foreground hover:underline">
                Weight Management
              </Link>
              <span aria-hidden="true">/</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span aria-current="page" className="text-foreground">
                {program.shortName}
              </span>
            </li>
          </ol>
        </nav>
      </div>
      <section className="container-page grid gap-12 py-10 lg:grid-cols-2">
        <ProductGallery program={program} />
        <ProductDetails program={program} />
      </section>
      <AboutSection program={program} />
      <SafetySection />
      <FaqSection items={program.faqs} idPrefix={program.id} />
      <RelatedPrograms currentId={program.id} />
    </main>
  );
}
