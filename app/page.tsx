import type { Metadata } from "next";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeHero } from "@/components/home/hero";
import { HomeHowItWorks } from "@/components/home/how-it-works";
import { HomePrograms } from "@/components/home/programs";

export const metadata: Metadata = {
  title: "REFORM VITAL — Modern Medicine. Personalized Health. Real Results.",
  description:
    "REFORM VITAL is a telehealth platform for compounded weight-management care. Licensed clinicians review your case. Compounding pharmacies fill only if prescribed.",
};

export default function HomePage() {
  return (
    <main id="main">
      <HomeHero />
      <HomeHowItWorks />
      <HomePrograms />
      <HomeFaq />
    </main>
  );
}
