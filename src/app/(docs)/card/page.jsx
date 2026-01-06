"use client";

import { useMemo, useState } from "react";
import CardVariant from "../../../../components/CardVariant";
import styles from "./card.module.css";

const IMG =
  "https://i.ibb.co.com/xtdsRQhQ/Hu-Tao.jpg";

const SNIPPETS = {
  primary: `import { Card } from "ultima-ui";

export default function Example() {
  return (
    <Card
      variant="primary"
      title="Primary Card"
      desc="Deskripsi singkat komponen card."
      image="${IMG}"
      tags={["Design", "Next.js", "Styled"]}
      ctaPrimary={{ label: "Detail", href: "#" }}
      ctaGhost={{ label: "Preview", href: "#" }}
    />
  );
}
`,

  secondary: `import { Card } from "ultima-ui";

export default function Example() {
  return (
    <Card
      variant="secondary"
      title="Secondary Card"
      desc="Deskripsi singkat komponen card."
      image="${IMG}"
      tags={["Design", "Next.js", "Styled"]}
      ctaPrimary={{ label: "Detail", href: "#" }}
      ctaGhost={{ label: "Preview", href: "#" }}
    />
  );
}
`,

  outline: `import { Card } from "ultima-ui";

export default function Example() {
  return (
    <Card
      variant="outline"
      title="Outline Card"
      desc="Deskripsi singkat komponen card."
      image="${IMG}"
      tags={["Design", "Next.js", "Styled"]}
      ctaPrimary={{ label: "Detail", href: "#" }}
      ctaGhost={{ label: "Preview", href: "#" }}
    />
  );
}
`,

  animated: `import { Card } from "ultima-ui";

export default function Example() {
  return (
    <Card
      variant="animated"
      title="Animated Card"
      desc="Deskripsi singkat komponen card."
      image="${IMG}"
      tags={["Design", "Next.js", "Styled"]}
      ctaPrimary={{ label: "Detail", href: "#" }}
      ctaGhost={{ label: "Preview", href: "#" }}
    />
  );
}
`,
}

export default function CardPage() {
  const [variant, setVariant] = useState("primary");
  const [copied, setCopied] = useState(false);
  const codeExample = useMemo(() => SNIPPETS[variant], [variant]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Card Variants</h2>

      <div className={styles.grid}>
        <div className={styles.demoBox}>
          <CardVariant variant="primary" />
        </div>
        <div className={styles.demoBox}>
          <CardVariant variant="secondary" />
        </div>
        <div className={styles.demoBox}>
          <CardVariant variant="outline" />
        </div>
        <div className={styles.demoBox}>
          <CardVariant variant="animated" />
        </div>
      </div>

      <div className={styles.codeCard}>
        <div className={styles.toolbar}>
          <label htmlFor="variant">Variant</label>
          <select
            id="variant"
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
            className={styles.select}
          >
            <option value="primary">primary</option>
            <option value="secondary">secondary</option>
            <option value="outline">outline</option>
            <option value="animated">animated</option>
          </select>

          <button onClick={handleCopy} className={styles.copyBtn}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className={styles.divider} />
        <pre className={styles.pre}>{codeExample}</pre>
      </div>
    </section>
  );
}
