export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "h2"; text: string; id?: string }
  | { type: "states"; items: string[] };

export type ParsedLegalDoc = {
  title: string;
  updated?: string;
  blocks: LegalBlock[];
};

const US_STATES = new Set([
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
]);

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

export function parseLegalDoc(raw: string): ParsedLegalDoc {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  let title = "Legal";
  let updated: string | undefined;
  let i = 0;

  while (i < lines.length && !lines[i].trim()) i += 1;
  if (i < lines.length) {
    title = lines[i].trim();
    i += 1;
  }
  while (i < lines.length && !lines[i].trim()) i += 1;
  if (i < lines.length && /^Last updated:/i.test(lines[i].trim())) {
    updated = lines[i].trim().replace(/^Last updated:\s*/i, "");
    i += 1;
  }

  const blocks: LegalBlock[] = [];
  let paragraph: string[] = [];
  let bullets: string[] = [];
  let states: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    blocks.push({ type: "p", text: paragraph.join(" ").replace(/\s+/g, " ").trim() });
    paragraph = [];
  };
  const flushBullets = () => {
    if (!bullets.length) return;
    blocks.push({ type: "ul", items: [...bullets] });
    bullets = [];
  };
  const flushStates = () => {
    if (!states.length) return;
    blocks.push({ type: "states", items: [...states] });
    states = [];
  };

  for (; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) {
      flushBullets();
      flushStates();
      flushParagraph();
      continue;
    }

    const heading = line.match(/^(\d+)\.\s+(.+)$/);
    if (heading) {
      flushBullets();
      flushStates();
      flushParagraph();
      const headingText = `${heading[1]}. ${heading[2]}`;
      const lower = heading[2].toLowerCase();
      let idHint = slugify(heading[2]);
      if (lower.includes("cookie notice")) idHint = "cookie-notice";
      else if (lower.includes("cookie")) idHint = "cookies";
      blocks.push({ type: "h2", text: headingText, id: idHint });
      continue;
    }

    if (line.startsWith("* ") || line.startsWith("• ")) {
      flushStates();
      flushParagraph();
      bullets.push(line.replace(/^[•*]\s+/, ""));
      continue;
    }

    if (US_STATES.has(line)) {
      flushBullets();
      flushParagraph();
      states.push(line);
      continue;
    }

    flushBullets();
    flushStates();
    paragraph.push(line);
  }

  flushBullets();
  flushStates();
  flushParagraph();

  return { title, updated, blocks };
}
