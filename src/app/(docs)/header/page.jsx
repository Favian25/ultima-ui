"use client";

import { useMemo, useState } from "react";
import HeaderVariant from "../../../../components/HeaderVariant";
import styles from "./header.module.css";

const SNIPPETS = {
  primary: `import { Header } from "ultima-ui";

export default function Example() {
  return (
    <Header variant="primary">
      <header className="HeaderBase">
        <div className="Logo">Primary</div>

        <nav className="Nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <input className="SearchBox" placeholder="Search..." />
      </header>
    </Header>
  );
}
`,

  secondary: `import { Header } from "ultima-ui";

export default function Example() {
  return (
    <Header variant="secondary">
      <header className="HeaderBase">
        <div className="Logo">Secondary</div>

        <nav className="Nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <div className="Profile">U</div>
      </header>
    </Header>
  );
}
`,

  outline: `import { Header } from "ultima-ui";

export default function Example() {
  return (
    <Header variant="outline">
      <header className="HeaderBase">
        <div className="Logo">Outline</div>

        <nav className="Nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </Header>
  );
}
`,

  animated: `import { Header } from "ultima-ui";

export default function Example() {
  return (
    <Header variant="animated">
      <header className="HeaderBase">
        <div className="Logo">Animated</div>

        <nav className="Nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </Header>
  );
}
`,

};

export default function HeaderPage() {
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
      <h2 className={styles.title}>Header Variants</h2>

      <div className={styles.grid}>
        <div className={styles.demoBox}>
          <HeaderVariant variant="primary" />
        </div>
        <div className={styles.demoBox}>
          <HeaderVariant variant="secondary" />
        </div>
        <div className={styles.demoBox}>
          <HeaderVariant variant="outline" />
        </div>
        <div className={styles.demoBox}>
          <HeaderVariant variant="animated" />
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

        <div className={styles.divider}></div>

        <pre className={styles.pre}>{codeExample}</pre>
      </div>
    </section>
  );
}
