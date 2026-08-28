import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { ALL_FAQS } from "@/lib/home";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Reform Vital programs.",
};

export default function FaqPage() {
  return (
    <main id="main" className="pt-10">
      <FaqSection items={ALL_FAQS} idPrefix="faq-page" title="Frequently Asked Questions" />
    </main>
  );
}
