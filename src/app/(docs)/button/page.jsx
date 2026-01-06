"use client";
import { useMemo, useState } from "react";
import ButtonVariant from "../../../../components/ButtonVariant";
import styles from "./button.module.css";

const SNIPPETS = {
  primary: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button variant="primary">
      Primary
    </Button>
  );
}`,
  secondary: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button variant="secondary">
      Secondary
    </Button>
  );
}`,
  outline: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button variant="outline">
      Outline
    </Button>
  );
}`,
  animated: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button variant="animated">
      Animated
    </Button>
  );
}`,

};

export default function ButtonPage() {
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
      <h2 className={styles.title}>Button Variants</h2>

      <div className={styles.grid}>
        <div className={styles.demoBox}>
          <ButtonVariant variant="primary">Primary</ButtonVariant>
        </div>
        <div className={styles.demoBox}>
          <ButtonVariant variant="secondary">Secondary</ButtonVariant>
        </div>
        <div className={styles.demoBox}>
          <ButtonVariant variant="outline">Outline</ButtonVariant>
        </div>
        <div className={styles.demoBox}>
          <ButtonVariant variant="animated">Animated</ButtonVariant>
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
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className={styles.divider}></div>
        <pre className={styles.pre}>{codeExample}</pre>
      </div>
    </section>
  );
}
