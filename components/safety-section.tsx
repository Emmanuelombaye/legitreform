import Link from "next/link";
import { TriangleAlert } from "@/components/icons";

export function SafetySection() {
  return (
    <section className="container-page py-14">
      <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-6 md:p-8">
        <h2 className="flex items-center gap-2 text-2xl">
          <TriangleAlert className="size-5 text-destructive" />
          Safety summary
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li>
            Gastrointestinal effects are the most commonly described: nausea, vomiting, diarrhoea,
            constipation, reduced appetite, and abdominal pain.
          </li>
          <li>
            Serious risks described for this class include pancreatitis, gallbladder disease,
            dehydration-related kidney injury, and hypoglycaemia in combination with certain
            diabetes medicines.
          </li>
          <li>
            This summary is high level. Seek immediate care for severe or persistent abdominal pain,
            ongoing vomiting, or allergic symptoms.
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          This summary is not a complete list of risks and is not medical advice.{" "}
          <Link href="/legal/medical-disclaimer" className="font-semibold underline underline-offset-4">
            Read the medical disclaimer
          </Link>
          {" · "}
          <Link href="/legal/medication-notifications" className="font-semibold underline underline-offset-4">
            Important safety information
          </Link>
          . In an emergency, call 911.
        </p>
      </div>
    </section>
  );
}
