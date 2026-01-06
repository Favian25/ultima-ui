"use client";

import { useMemo, useState } from "react";
import SidebarVariant from "../../../../components/SidebarVariant";
import styles from "./sidebar.module.css";

function DemoShell({ children }) {
  return (
    <div className={styles.shell}>
      <div className={styles.sidebarArea}>{children}</div>
      <div className={styles.contentArea}>
        <h3>Content Area</h3>
        <p>Main Content Dummy</p>
        <div className={styles.cards}>
          <div className={styles.card} />
          <div className={styles.card} />
          <div className={styles.card} />
        </div>
      </div>
    </div>
  );
}

const SNIPPETS = {
  primary: `import { FaHouse, FaBoxOpen, FaUsers, FaChartLine, FaBookOpen, FaPuzzlePiece, FaGear, FaCircleQuestion } from "react-icons/fa6";
import { Sidebar } from "ultima-ui";

export default function Example() {
  return (
    <Sidebar variant="primary" active="dash">

      <div className="brand">Primary</div>

      <div>
        <div className="group-title">Main</div>

        <nav className="nav">
          <a className="item" data-active="true">
            <span className="ic"><FaHouse /></span>
            <span className="label">Dashboard</span>
            <span className="kbd">D</span>
          </a>

          <a className="item">
            <span className="ic"><FaBoxOpen /></span>
            <span className="label">Products</span>
            <span className="kbd">P</span>
          </a>

          <a className="item">
            <span className="ic"><FaUsers /></span>
            <span className="label">Customers</span>
            <span className="kbd">C</span>
          </a>

          <a className="item">
            <span className="ic"><FaChartLine /></span>
            <span className="label">Analytics</span>
            <span className="kbd">A</span>
          </a>
        </nav>

        <div className="group-title" style={{ marginTop: 14 }}>
          Library
        </div>

        <nav className="nav">
          <a className="item">
            <span className="ic"><FaBookOpen /></span>
            <span className="label">Docs</span>
          </a>
          <a className="item">
            <span className="ic"><FaPuzzlePiece /></span>
            <span className="label">Components</span>
          </a>
        </nav>
      </div>

      <div>
        <nav className="nav">
          <a className="item">
            <span className="ic"><FaGear /></span>
            <span className="label">Settings</span>
          </a>
          <a className="item">
            <span className="ic"><FaCircleQuestion /></span>
            <span className="label">Help</span>
          </a>
        </nav>
      </div>

    </Sidebar>
  );
}
`,

  outline: `import { FaHouse, FaBoxOpen, FaUsers, FaChartLine, FaGear, FaCircleQuestion } from "react-icons/fa6";
import { Sidebar } from "ultima-ui";

export default function Example() {
  return (
    <Sidebar variant="outline" active="dash">

      <div className="brand">Outline</div>

      <div>
        <div className="group-title">Navigasi</div>

        <nav className="nav">
          <a className="item" data-active="true">
            <span className="ic"><FaHouse /></span>
            <span className="label">Dashboard</span>
            <span className="kbd">D</span>
          </a>

          <a className="item">
            <span className="ic"><FaBoxOpen /></span>
            <span className="label">Products</span>
            <span className="kbd">P</span>
          </a>

          <a className="item">
            <span className="ic"><FaUsers /></span>
            <span className="label">Customers</span>
            <span className="kbd">C</span>
          </a>

          <a className="item">
            <span className="ic"><FaChartLine /></span>
            <span className="label">Analytics</span>
            <span className="kbd">A</span>
          </a>
        </nav>
      </div>

      <div>
        <nav className="nav">
          <a className="item">
            <span className="ic"><FaGear /></span>
            <span className="label">Settings</span>
          </a>
          <a className="item">
            <span className="ic"><FaCircleQuestion /></span>
            <span className="label">Help</span>
          </a>
        </nav>
      </div>

    </Sidebar>
  );
}
`,

  rail: `import { FaHouse, FaBoxOpen, FaUsers, FaChartLine, FaGear, FaCircleQuestion } from "react-icons/fa6";
import { Sidebar } from "ultima-ui";

export default function Example() {
  return (
    <Sidebar variant="rail" active="dash">

      <div className="brand">Rail</div>

      <div>
        <nav className="nav">
          <a className="item" data-active="true">
            <span className="ic"><FaHouse /></span>
          </a>

          <a className="item">
            <span className="ic"><FaBoxOpen /></span>
          </a>

          <a className="item">
            <span className="ic"><FaUsers /></span>
          </a>

          <a className="item">
            <span className="ic"><FaChartLine /></span>
          </a>
        </nav>
      </div>

      <div>
        <nav className="nav">
          <a className="item">
            <span className="ic"><FaGear /></span>
          </a>
          <a className="item">
            <span className="ic"><FaCircleQuestion /></span>
          </a>
        </nav>
      </div>

    </Sidebar>
  );
}
`,

  animated: `import { Sidebar } from "ultima-ui";
import { FaHouse, FaBoxOpen, FaUsers, FaChartLine, FaBookOpen, FaPuzzlePiece, FaGear, FaCircleQuestion } from "react-icons/fa6";

export default function Example() {
  return (
    <Sidebar variant="animated" active="dash">

      <div className="brand">Animated</div>

      <div>
        <div className="group-title">Main</div>

        <nav className="nav">
          <a className="item" data-active="true">
            <span className="ic"><FaHouse /></span>
            <span className="label">Dashboard</span>
            <span className="kbd">D</span>
          </a>

          <a className="item">
            <span className="ic"><FaBoxOpen /></span>
            <span className="label">Products</span>
            <span className="kbd">P</span>
          </a>

          <a className="item">
            <span className="ic"><FaUsers /></span>
            <span className="label">Customers</span>
            <span className="kbd">C</span>
          </a>

          <a className="item">
            <span className="ic"><FaChartLine /></span>
            <span className="label">Analytics</span>
            <span className="kbd">A</span>
          </a>
        </nav>

        <div className="group-title">
          Library
        </div>

        <nav className="nav">
          <a className="item">
            <span className="ic"><FaBookOpen /></span>
            <span className="label">Docs</span>
          </a>
          <a className="item">
            <span className="ic"><FaPuzzlePiece /></span>
            <span className="label">Components</span>
          </a>
        </nav>
      </div>

      <div>
        <nav className="nav">
          <a className="item">
            <span className="ic"><FaGear /></span>
            <span className="label">Settings</span>
          </a>
          <a className="item">
            <span className="ic"><FaCircleQuestion /></span>
            <span className="label">Help</span>
          </a>
        </nav>
      </div>

    </Sidebar>
  );
}
`,
};

export default function SidebarPage() {
  const [variantSnippet, setVariantSnippet] = useState("primary");
  const [copied, setCopied] = useState(false);
  const codeExample = useMemo(
    () => SNIPPETS[variantSnippet],
    [variantSnippet]
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Sidebar Variants — Ultima UI</h2>

      <div className={styles.grid}>
        <div className={styles.demoBox}>
          <DemoShell>
            <SidebarVariant variant="primary" />
          </DemoShell>
        </div>
        <div className={styles.demoBox}>
          <DemoShell>
            <SidebarVariant variant="outline" />
          </DemoShell>
        </div>
        <div className={styles.demoBox}>
          <DemoShell>
            <SidebarVariant variant="rail" />
          </DemoShell>
        </div>
        <div className={styles.demoBox}>
          <DemoShell>
            <SidebarVariant variant="animated" />
          </DemoShell>
        </div>
      </div>

      <div className={styles.codeCard}>
        <div className={styles.toolbar}>
          <label htmlFor="snip">Variant</label>
          <select
            id="snip"
            value={variantSnippet}
            onChange={(e) => setVariantSnippet(e.target.value)}
            className={styles.select}
          >
            <option value="primary">primary</option>
            <option value="outline">outline</option>
            <option value="rail">rail</option>
            <option value="animated">animated</option>
          </select>

          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <div className={styles.divider} />
        <pre className={styles.pre}>{codeExample}</pre>
      </div>
    </section>
  );
}
