export type FaqItem = {
  q: string;
  a: string;
};

export type Program = {
  id: string;
  name: string;
  shortName: string;
  href: string;
  category: string;
  accent: string;
  price: number;
  strength: string;
  form: string;
  summary: string;
  description: string;
  vialLabel: string;
  about: string[];
  howItWorks: string[];
  productStatus: string[];
  eligibility: string[];
  faqs: FaqItem[];
};

export const INCLUDED = [
  "Online licensed-provider review",
  "Secure medical intake after checkout",
  "Ongoing program support by secure message",
  "Standard shipping",
  "Routine follow-up required by the program",
];

export const TIRZEPATIDE: Program = {
  id: "tirzepatide",
  name: "Tirzepatide Program",
  shortName: "Tirzepatide",
  href: "/treatments/weight-management/tirzepatide",
  category: "Weight Management",
  accent: "#00B4D8",
  price: 249,
  strength: "5 mg/mL",
  form: "Injectable solution",
  summary:
    "A clinician-guided weight-management program using tirzepatide, with provider review and one clear monthly price.",
  description:
    "A clinician-guided tirzepatide weight-management program with licensed-provider review, program support, and standard shipping in one clear monthly price.",
  vialLabel:
    "Reform Vital Tirzepatide vial with a navy cap, teal accent rule, and unbranded clinical labelling",
  about: [
    "The Reform Vital Tirzepatide Program is a clinician-guided weight-management program. As with every Reform Vital program, purchase comes first, the secure medical intake follows, and a licensed clinician determines whether treatment is appropriate.",
    "Tirzepatide is a dual incretin-pathway receptor agonist. The FDA has approved branded tirzepatide products for specific indications. Those approved branded products are distinct from any compounded tirzepatide formulation, and Reform Vital does not describe a compounded formulation as Zepbound or Mounjaro.",
    "This program is generally considered for adults with weight-related health goals who can be managed safely at a distance. Clinicians may request laboratory work or additional history, and may decline to treat.",
    "Program support continues after approval. Follow-up is part of the monthly price, and your clinician may adjust or discontinue a program at any point based on how you respond.",
  ],
  howItWorks: [
    "Tirzepatide acts on two incretin pathways rather than one. In general educational terms, those pathways are involved in appetite regulation, insulin response, and gastric emptying.",
    "Whether a dual-pathway product suits you better than a single-pathway one is a clinical judgment, not a purchase decision. Some people tolerate one and not the other.",
    "This page contains no dosing schedule and no self-administration instructions. Those come only from the prescribing clinician and dispensing pharmacy where a program is approved.",
  ],
  productStatus: [
    "Tirzepatide is an active ingredient in FDA-approved branded products indicated for specific uses. Those branded products are not what is described on this demonstration page.",
    "Any program here may involve a compounded formulation, which is not FDA-approved, is not reviewed by the FDA for safety or effectiveness, and is not equivalent to an approved branded drug.",
    "Availability of any compounded tirzepatide program depends on independent legal, clinical, and pharmacy review.",
  ],
  eligibility: [
    "Disclose personal or family history of medullary thyroid carcinoma or MEN 2, pancreatitis, gallbladder disease, severe gastrointestinal conditions, diabetes medicines, pregnancy or breastfeeding plans, allergies, and all current medications.",
    "Prescription required. Licensed-provider review required. Not everyone qualifies.",
  ],
  faqs: [
    {
      q: "Is this Zepbound or Mounjaro?",
      a: "No. Those are FDA-approved branded tirzepatide products. This demonstration program is described separately and may involve a compounded formulation, which is a different product.",
    },
    {
      q: "Why does this program cost more than the semaglutide program?",
      a: "Program pricing on this demonstration site is illustrative and reflects a plausible transparent-pricing model rather than a pharmacy quote.",
    },
    {
      q: "Can I switch from the semaglutide program?",
      a: "Only through clinical review. Cancel the existing program and raise a message with your care team; a clinician decides whether a change is appropriate.",
    },
    {
      q: "Do I need laboratory work first?",
      a: "A clinician may request laboratory information as part of review. Laboratory testing is not included in the monthly price.",
    },
    {
      q: "What if I'm not approved?",
      a: "The purchase is handled under the refund and cancellation policy. If treatment is declined before fulfilment, the program payment is refunded with no hidden review fee.",
    },
    {
      q: "Is the monthly price affected by dose?",
      a: "No. Reform Vital demonstration pricing shows one monthly price per program, without dose-based increases.",
    },
    {
      q: "How is the product shipped?",
      a: "Standard shipping is included. Injectable programs would ship with appropriate temperature-controlled packaging once approved and processed.",
    },
    {
      q: "Can I pause the program?",
      a: "You can cancel before your renewal date from your account, then restart later with a new clinical review.",
    },
  ],
};

export const SEMAGLUTIDE: Program = {
  id: "semaglutide",
  name: "Semaglutide Program",
  shortName: "Semaglutide",
  href: "/treatments/weight-management/semaglutide",
  category: "Weight Management",
  accent: "#00A896",
  price: 149,
  strength: "2.5 mg/mL",
  form: "Injectable solution",
  summary:
    "A clinician-guided weight-management program with licensed-provider review, ongoing support, and one clear monthly price.",
  description:
    "A clinician-guided semaglutide weight-management program. One monthly price including online consultation, standard shipping, and program support. Treatment requires licensed-provider approval.",
  vialLabel:
    "Reform Vital Semaglutide vial with a navy cap, teal accent rule, and unbranded clinical labelling",
  about: [
    "The Reform Vital Semaglutide Program is a clinician-guided weight-management program. You choose the program and complete checkout first; the required secure medical intake follows, and a licensed clinician then decides whether treatment is medically appropriate for you.",
    "Semaglutide belongs to a class of incretin-based medicines. Branded semaglutide products have been approved by the FDA for specific indications. Not every semaglutide formulation available through telehealth is the same as an FDA-approved branded product — compounded formulations are different products, and where a compounded formulation would be used, that is disclosed before fulfilment.",
    "Care is delivered asynchronously by default. You submit your intake, identification, and any requested information, and a clinician reviews it on their own schedule. If more information is needed, you will be asked for it through your Reform Vital account rather than in a rushed live visit.",
    "People commonly considered for review include adults with weight-related health goals who can safely be managed remotely. Provider judgment governs. Some people will be asked for laboratory work, some will be referred to in-person care, and some will not be approved.",
  ],
  howItWorks: [
    "These medicines act on pathways involved in appetite signalling and gastric emptying. In general terms, that is why people in clinical settings often report feeling full sooner and staying full longer.",
    "The effect is not automatic and is not identical between people. Response depends on individual physiology, other medications, existing conditions, nutrition, activity, and consistency of follow-up.",
    "Reform Vital does not publish dosing instructions or self-administration guidance on this website. If a clinician approves treatment, product-specific instructions come from the prescribing clinician and the dispensing pharmacy.",
  ],
  productStatus: [
    "Semaglutide is an active ingredient present in FDA-approved branded products for specific indications.",
    "The program shown here may involve a compounded formulation. A compounded product is not the same as an FDA-approved branded drug, is not reviewed by the FDA for safety or effectiveness, and is prepared by a licensed pharmacy for an individual patient.",
    "Any program would be used only where clinically and legally appropriate, following independent pharmacy and regulatory review.",
  ],
  eligibility: [
    "Tell your reviewing clinician about personal or family history of medullary thyroid carcinoma or MEN 2, pancreatitis, gallbladder disease, diabetic retinopathy, severe gastrointestinal disease, pregnancy or breastfeeding, and every medication and supplement you take.",
    "Prescription required. Licensed-provider review required. Not everyone qualifies.",
  ],
  faqs: [
    {
      q: "Is this the same as a branded semaglutide product?",
      a: "Not necessarily. Branded semaglutide products are FDA-approved for specific indications. A program may involve a compounded formulation, which is a different product prepared by a licensed pharmacy and not FDA-approved. The formulation would be identified before fulfilment.",
    },
    {
      q: "How much weight will I lose?",
      a: "Reform Vital does not publish expected results. Outcomes vary widely between individuals and depend on far more than a single medication.",
    },
    {
      q: "When do I complete the medical intake?",
      a: "After checkout. You will be prompted immediately on the confirmation page, and the intake is required before any clinical review can begin.",
    },
    {
      q: "Does buying the program mean I will be prescribed treatment?",
      a: "No. Purchasing a program never guarantees a prescription. If the reviewing clinician does not approve treatment, the purchase is handled under the refund and cancellation policy.",
    },
    {
      q: "Are laboratory tests included in the price?",
      a: "No. Laboratory testing, expedited shipping, replacement products, and third-party services are not included unless specifically stated.",
    },
    {
      q: "Can I take this with another Reform Vital weight program?",
      a: "Two weight-management programs should not be combined. The cart will warn you, and a clinician makes the final decision about any combination.",
    },
    {
      q: "What happens if I want to stop?",
      a: "You can cancel a monthly program from your account before the next renewal date. See the subscription policy for timing details.",
    },
    {
      q: "Is shipping included?",
      a: "Standard shipping is included in the monthly price. Shipping begins only after clinical approval and pharmacy processing.",
    },
  ],
};

export const PROGRAMS: Program[] = [TIRZEPATIDE, SEMAGLUTIDE];

export function relatedPrograms(currentId: string): Program[] {
  return PROGRAMS.filter((program) => program.id !== currentId);
}
