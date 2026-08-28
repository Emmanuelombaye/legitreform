import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLegalPage, legalPages, loadLegalDocument } from "@/lib/legal-pages";
import type { LegalBlock } from "@/lib/parse-legal-doc";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) return { title: "Document" };
  return { title: page.title, description: page.description };
}

function RenderBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} id={block.id}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "states") {
          return (
            <ul key={index} className="legal-states">
              {block.items.map((state) => (
                <li key={state}>{state}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </>
  );
}

export default async function LegalDocumentPage({ params }: Props) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  if (!page) notFound();

  const doc = loadLegalDocument(page);
  const title = doc?.title || page.title;
  const updated = doc?.updated || "August 27, 2026";
  const toc =
    doc?.blocks
      .filter((block): block is Extract<LegalBlock, { type: "h2" }> => block.type === "h2")
      .slice(0, 24) ?? [];

  return (
    <main id="main" className="legal-page">
      <div className="container-page legal-article">
        <p className="legal-kicker">LEGAL</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-updated">Last updated {updated}</p>

        {toc.length > 4 ? (
          <nav className="legal-toc" aria-label="On this page">
            <p className="legal-toc-label">On this page</p>
            <ol>
              {toc.map((item) => (
                <li key={item.id || item.text}>
                  <a href={`#${item.id}`}>{item.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <article className="legal-body">
          {doc ? (
            <RenderBlocks blocks={doc.blocks} />
          ) : (
            page.sections?.map((section, index) => (
              <section key={section.heading || index}>
                {section.heading ? <h2 id={section.id}>{section.heading}</h2> : null}
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))
          )}
        </article>

        {slug === "medication-notifications" ? (
          <p className="legal-more">
            <Link href="/safety">Read Safety Information</Link>
          </p>
        ) : null}
        {slug === "programs" ? (
          <p className="legal-more">
            <Link href="/treatments">View treatments</Link>
          </p>
        ) : null}
        {slug === "ccpa" ? (
          <p className="legal-more">
            <Link href="/legal/privacy-policy">Read the full Privacy Policy</Link>
          </p>
        ) : null}

        <p className="legal-more">
          <Link href="/legal">View all legal documents</Link>
        </p>
      </div>
    </main>
  );
}
