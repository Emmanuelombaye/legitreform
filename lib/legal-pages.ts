import { readFileSync } from "fs";
import { join } from "path";
import { parseLegalDoc, type ParsedLegalDoc } from "@/lib/parse-legal-doc";

export type LegalPageMeta = {
  slug: string;
  title: string;
  description: string;
  file?: string;
  sections?: { heading?: string; id?: string; body: string[] }[];
};

const contentDir = join(process.cwd(), "lib", "legal");

export const legalPages: LegalPageMeta[] = [
  {
    slug: "terms-of-service",
    title: "Terms of Use",
    description: "Terms governing use of the Reform Vital telehealth platform and related services.",
    file: "terms-of-service.txt",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    description: "How Reform Vital Health LLC collects, uses, shares, and protects information.",
    file: "privacy-policy.txt",
  },
  {
    slug: "medical-disclaimer",
    title: "Medical Disclaimer",
    description: "Informational-use and medical disclaimer for Reform Vital website content and services.",
    file: "medical-disclaimer.txt",
  },
  {
    slug: "telehealth-consent",
    title: "Telehealth Consent",
    description: "Consent for telehealth and asynchronous care through the Reform Vital platform.",
    file: "telehealth-consent.txt",
  },
  {
    slug: "npp",
    title: "HIPAA Notice of Privacy Practices",
    description: "How medical information may be used and disclosed, and how you can access it.",
    file: "npp.txt",
  },
  {
    slug: "ccpa",
    title: "California Privacy Notice",
    description: "California privacy rights for visitors and patients using Reform Vital.",
    sections: [
      {
        body: [
          "California residents may have rights under the California Consumer Privacy Act (CCPA), as amended, including the right to know, delete, correct, limit use of sensitive personal information, and opt out of certain sharing or sale as defined under California law.",
        ],
      },
      {
        heading: "How to exercise your rights",
        body: [
          "Submit a request to privacy@reformvital.com or email admin@reformvital.com. We may verify your identity before responding. Full details are in our Privacy Policy.",
        ],
      },
    ],
  },
  {
    slug: "medication-notifications",
    title: "Important Safety Information",
    description: "Safety notices for compounded semaglutide and tirzepatide on Reform Vital.",
    sections: [
      {
        body: [
          "Compounded semaglutide and tirzepatide are prepared by licensed U.S. pharmacies only after a clinician prescribes them. They are not FDA-approved and are not the same as Wegovy, Ozempic, Zepbound, or Mounjaro.",
        ],
      },
      {
        heading: "Before treatment",
        body: [
          "Tell your clinician about thyroid cancer history, pancreatitis, gallbladder disease, pregnancy, breastfeeding, and all medicines you take. Completing intake does not guarantee a prescription.",
        ],
      },
      {
        heading: "Emergencies",
        body: [
          "Call 911 for severe allergic reaction, trouble breathing, or other emergencies. Read the full clinical summary on the Safety Information page.",
        ],
      },
    ],
  },
  {
    slug: "ada",
    title: "ADA Compliance",
    description: "Accessibility commitment for reformvital.com.",
    sections: [
      {
        body: [
          "Reform Vital aims to make this website usable for people with disabilities. If you cannot access a page or feature, email admin@reformvital.com and we will work on an alternative.",
        ],
      },
    ],
  },
  {
    slug: "bill-of-rights",
    title: "Patient Bill of Rights",
    description: "Rights of patients using Reform Vital telehealth services.",
    sections: [
      {
        body: [
          "You have the right to be treated with respect, to receive information about proposed care, to refuse treatment, and to know who is responsible for your clinical decisions.",
        ],
      },
      {
        heading: "Clinical independence",
        body: [
          "Licensed clinicians—not Reform Vital marketing pages—decide whether a prescription is appropriate. You may seek a second opinion or in-person care at any time.",
        ],
      },
    ],
  },
  {
    slug: "rrr-policy",
    title: "Refunds, Returns, and Replacements",
    description: "Refund and replacement policy for Reform Vital memberships and pharmacy shipments.",
    sections: [
      {
        body: [
          "Membership fees cover platform access and clinician review. They are not a payment for a guaranteed prescription. If a clinician declines care before a prescription is issued, contact admin@reformvital.com about a refund of unused membership time.",
        ],
      },
      {
        heading: "Medication",
        body: [
          "Once a pharmacy compounds and ships a prescription, returns are limited by pharmacy and federal rules for sterile drugs. Damaged or missing shipments should be reported immediately so the pharmacy can advise on replacement.",
        ],
      },
    ],
  },
  {
    slug: "programs",
    title: "Programs",
    description: "Reform Vital membership and treatment programs.",
    sections: [
      {
        body: [
          "Reform Vital offers clinician-guided compounded semaglutide and tirzepatide through monthly programs. A licensed clinician must approve any prescription. How care works and pricing are described on the Treatments pages.",
        ],
      },
    ],
  },
];

const docCache = new Map<string, ParsedLegalDoc>();

export function getLegalPage(slug: string) {
  return legalPages.find((page) => page.slug === slug);
}

export function loadLegalDocument(page: LegalPageMeta): ParsedLegalDoc | null {
  if (!page.file) return null;
  const cached = docCache.get(page.file);
  if (cached) return cached;
  const raw = readFileSync(join(contentDir, page.file), "utf8");
  const parsed = parseLegalDoc(raw);
  docCache.set(page.file, parsed);
  return parsed;
}

export const primaryLegalLinks = [
  { label: "Terms of Use", href: "/legal/terms-of-service" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" },
  { label: "Telehealth Consent", href: "/legal/telehealth-consent" },
  { label: "HIPAA Notice", href: "/legal/npp" },
];

export const legalLinks = [
  ...primaryLegalLinks,
  { label: "CCPA", href: "/legal/ccpa" },
  { label: "Important Safety Information", href: "/legal/medication-notifications" },
  { label: "ADA Compliance", href: "/legal/ada" },
  { label: "Bill of Rights", href: "/legal/bill-of-rights" },
  { label: "Refunds, Returns, and Replacements Policy", href: "/legal/rrr-policy" },
  { label: "Programs", href: "/legal/programs" },
  { label: "All Legal", href: "/legal" },
  { label: "Site Map", href: "/legal/sitemap" },
  { label: "Cookie Preferences", href: "/legal/privacy-policy#cookies" },
];

export const sitemapGroups = [
  {
    title: "Care",
    links: [
      { label: "Treatments", href: "/treatments" },
      { label: "Semaglutide", href: "/treatments/weight-management/semaglutide" },
      { label: "Tirzepatide", href: "/treatments/weight-management/tirzepatide" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "About", href: "/about" },
      { label: "Safety Information", href: "/safety" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: legalLinks.filter((link) => link.href !== "/legal"),
  },
];
