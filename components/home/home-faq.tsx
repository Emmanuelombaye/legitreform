import { FaqSection } from "@/components/faq-section";
import { HOME_FAQS } from "@/lib/home";

export function HomeFaq() {
  return <FaqSection items={HOME_FAQS} idPrefix="home" title="Frequently Asked Questions" />;
}
