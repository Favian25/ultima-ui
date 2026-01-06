"use client";

import { useMemo, useState } from "react";
import FooterVariant from "../../../../components/FooterVariant";
import styles from "./footer.module.css";

const SNIPPETS = {
  primary: `import { Footer } from "ultima-ui";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Example() {
  return (
    <Footer variant="primary" maxWidth="1200px">
      <footer className="Wrapper">
        <div className="Inner">
          <div className="Grid">
            <div>
              <h4 className="Title">Info</h4>
              <ul className="List">
                <li><a href="#">Formats</a></li>
                <li><a href="#">Compression</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="Title">Getting Started</h4>
              <ul className="List">
                <li><a href="#">Introduction</a></li>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Usages</a></li>
                <li><a href="#">Elements</a></li>
                <li><a href="#">Global</a></li>
              </ul>
            </div>

            <div>
              <h4 className="Title">Resources</h4>
              <ul className="List">
                <li><a href="#">API</a></li>
                <li><a href="#">Form Validation</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Visibility</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="Title">Newsletter</h4>
              <div className="NewsWrap">
                <small>
                  Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
                </small>
                <div className="InputRow">
                  <input className="Input" placeholder="Your email" aria-label="Email address" />
                  <button className="Button" type="button">SUBSCRIBE</button>
                </div>

                <div className="Social" aria-label="Social links">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaGithub /></a>
                  <a href="#"><FaLinkedinIn /></a>
                  <a href="#"><FaTwitter /></a>
                </div>
              </div>
            </div>
          </div>

          <hr className="Divider" />
          <div className="BottomRow">
            <div className="Brand">Ultima UI</div>
            <small className="Copyright">© 2025 Ultima UI. All rights reserved.</small>
          </div>
        </div>
      </footer>
    </Footer>
  );
}
`,

  secondary: `import { Footer } from "ultima-ui";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Example() {
  return (
    <Footer variant="secondary" maxWidth="1200px">
      <footer className="Wrapper">
        <div className="Inner">
          <div className="TopCols">
            <div className="Col BrandCol">
              <div className="Brand">Ultima UI</div>
              <p className="BrandDesc">
                Komponen siap pakai untuk Next.js + styled-components, berpadu BEM + Sass.
              </p>

              <div className="Social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </div>

            <div className="Col">
              <h4 className="Title">Newsletter</h4>
              <div className="NewsWrap">
                <div className="InputRow">
                  <input className="Input" placeholder="Email kamu" />
                  <button className="Button" type="button">Daftar</button>
                </div>
                <small className="Note">
                  Dengan mendaftar, kamu menyetujui kebijakan privasi kami.
                </small>
              </div>
            </div>

            <div className="Col">
              <h4 className="Title">Links</h4>
              <ul className="List">
                <li><a href="#">Docs</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Components</a></li>
                <li><a href="#">Figma Kit</a></li>
              </ul>
            </div>
          </div>

          <hr className="Divider" />
          <div className="BottomRow">
            <small className="Copyright">© 2025 Ultima UI</small>
            <div className="LegalLinks">
              <a href="#">Terms</a><a href="#">Privacy</a><a href="#">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </Footer>
  );
}
`,

  outline: `import { Footer } from "ultima-ui";

export default function Example() {
  return (
    <Footer variant="outline" maxWidth="1200px">
      <footer className="Wrapper">
        <div className="Inner">
          <div className="TopBar">
            <div className="Brand">Ultima UI</div>
            <nav className="InlineNav">
              <a href="#">Docs</a>
              <a href="#">Components</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
            </nav>
            <form className="SubForm" onSubmit={(e)=>e.preventDefault()}>
              <input className="SubInput" aria-label="Email" placeholder="Email" />
              <button className="SubButton" type="submit">Subscribe</button>
            </form>
          </div>

          <div className="BottomRow">
            <small>© 2025 Ultima UI</small>
            <div className="LegalLinks">
              <a href="#">Terms</a><a href="#">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </Footer>
  );
}
`,

animated: `import { Footer } from "ultima-ui";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Example() {
  return (
    <Footer variant="animated" maxWidth="1200px">
      <footer className="Wrapper AnimatedWrap">
        <div className="EmberLayer">
          {[...Array(38)].map((_, i) => (
            <span key={i} className={"ember ember-" + i} />
          ))}
        </div>

        <div className="Scanline" />

        <div className="Inner">
          <div className="Grid">
            <div>
              <h4 className="Title">Info</h4>
              <ul className="List">
                <li><a href="#">Formats</a></li>
                <li><a href="#">Compression</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="Title">Resources</h4>
              <ul className="List">
                <li><a href="#">API</a></li>
                <li><a href="#">Validation</a></li>
                <li><a href="#">Marketplace</a></li>
              </ul>
            </div>

            <div>
              <h4 className="Title">Newsletter</h4>
              <div className="NewsWrap">
                <small>Stay updated with the latest releases.</small>
                <div className="InputRow">
                  <input className="Input" placeholder="Email..." />
                  <button className="Button">Join</button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="Title">Social</h4>
              <div className="Social">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaGithub /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Footer>
  );
}
`,
};

export default function FooterPage() {
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
      <h2 className={styles.title}>Footer Variants</h2>

      <div className={styles.grid}>
        <div className={styles.demoBox}><FooterVariant variant="primary" /></div>
        <div className={styles.demoBox}><FooterVariant variant="secondary" /></div>
        <div className={styles.demoBox}><FooterVariant variant="outline" /></div>
        <div className={styles.demoBox}><FooterVariant variant="animated" /></div>
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
