import type { Metadata } from "next";
import { HomeHowItWorks } from "@/components/home/how-it-works";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How Reform Vital intake, clinician review, and medication fulfillment work.",
};

export default function HowItWorksPage() {
  return (
    <main id="main">
      <HomeHowItWorks />
    </main>
  );
}
