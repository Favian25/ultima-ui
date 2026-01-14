"use client";

import { useState } from "react";
import { useTheme } from "styled-components";
import { FaDesktop, FaTabletScreenButton, FaMobileScreenButton, FaCopy, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useThemeContext } from "../../Provider";
import { Footer } from "../../../../components/FooterVariant";

const SNIPPETS = {
  primary: `import { Footer } from "ultima-ui";

const primaryColumns = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" }
    ]
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Community", href: "/community" }
    ]
  }
];

export default function Example() {
  return (
    <Footer 
      variant="primary" 
      columns={primaryColumns}
      maxWidth="1200px"
      brandName="MyCompany"
      description="Dapatkan tips dan update terbaru langsung ke inbox kamu."
      copyright="© 2026 MyCompany. Semua hak dilindungi."
      newsletter={{
        title: "Berlangganan",
        placeholder: "Masukkan email...",
        buttonText: "DAFTAR"
      }}
    />
  );
}`,

  secondary: `import { Footer } from "ultima-ui";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// NOTE: Install react-icons first: npm install react-icons

const secondaryColumns = [
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" }
    ]
  },
  {
    title: "Connect",
    items: [
      { label: "Twitter", href: "https://twitter.com" },
      { label: "LinkedIn", href: "https://linkedin.com" }
    ]
  }
];

const mySocialLinks = [
  { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
  { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" }
];

export default function Example() {
  return (
    <Footer 
      variant="secondary" 
      columns={secondaryColumns}
      brandName="SecondaryBrand"
      description="Platform terbaik untuk kebutuhan bisnismu."
      copyright="© 2026 SecondaryBrand"
      newsletter={{
        title: "Newsletter",
        placeholder: "Email address",
        buttonText: "Subscribe",
        disclaimer: "By subscribing, you agree to our privacy policy."
      }}
      socialLinks={mySocialLinks}
      bottomLinks={[
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" }
      ]}
    />
  );
}`,

  outline: `import { Footer } from "ultima-ui";

export default function Example() {
  return (
    <Footer 
      variant="outline" 
      maxWidth="1000px"
      brandName="OutlineBrand"
      copyright="© 2026 OutlineBrand"
      navLinks={[
        { label: "Dokumentasi", href: "/docs" },
        { label: "Komponen", href: "/components" },
        { label: "Harga", href: "/pricing" }
      ]}
      newsletter={{
        placeholder: "Email kamu",
        buttonText: "Langganan"
      }}
      bottomLinks={[
        { label: "Syarat", href: "/terms" },
        { label: "Privasi", href: "/privacy" }
      ]}
    />
  );
}`,

  animated: `import { Footer } from "ultima-ui";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

// NOTE: Install react-icons first: npm install react-icons

const animatedColumns = [
  {
    title: "Explore",
    items: [
      { label: "Galaxies", href: "#galaxies" },
      { label: "Nebulae", href: "#nebulae" }
    ]
  },
  {
    title: "Mission",
    items: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" }
    ]
  }
];

const mySocialLinks = [
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaGithub />, href: "#", label: "GitHub" },
  { icon: <FaLinkedinIn />, href: "#", label: "LinkedIn" }
];

export default function Example() {
  return (
    <Footer 
      variant="animated" 
      columns={animatedColumns}
      description="Tetap terhubung dengan update terbaru."
      socialTitle="Ikuti Kami"
      socialLinks={mySocialLinks}
      newsletter={{
        title: "Langganan",
        placeholder: "Email...",
        buttonText: "Gabung"
      }}
    />
  );
}`,
};

const PREVIEW_PROPS = {
  primary: {
    columns: [
      {
        title: "Product",
        items: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Integrations", href: "/integrations" }
        ]
      },
      {
        title: "Company",
        items: [
          { label: "About", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/careers" }
        ]
      },
      {
        title: "Resources",
        items: [
          { label: "Documentation", href: "/docs" },
          { label: "API Reference", href: "/api" },
          { label: "Community", href: "/community" }
        ]
      }
    ],
    brandName: "MyCompany",
    description: "Dapatkan tips dan update terbaru langsung ke inbox kamu.",
    copyright: "© 2026 MyCompany. Semua hak dilindungi.",
    newsletter: {
      title: "Berlangganan",
      placeholder: "Masukkan email...",
      buttonText: "DAFTAR"
    }
  },
  secondary: {
    columns: [
      {
        title: "Legal",
        items: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]
      },
      {
        title: "Connect",
        items: [
          { label: "Twitter", href: "https://twitter.com" },
          { label: "LinkedIn", href: "https://linkedin.com" }
        ]
      }
    ],
    brandName: "SecondaryBrand",
    description: "Platform terbaik untuk kebutuhan bisnismu.",
    copyright: "© 2026 SecondaryBrand",
    newsletter: {
      title: "Newsletter",
      placeholder: "Email address",
      buttonText: "Subscribe",
      disclaimer: "By subscribing, you agree to our privacy policy."
    },
    bottomLinks: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" }
    ]
  },
  outline: {
    brandName: "OutlineBrand",
    copyright: "© 2026 OutlineBrand",
    navLinks: [
      { label: "Dokumentasi", href: "/docs" },
      { label: "Komponen", href: "/components" },
      { label: "Harga", href: "/pricing" }
    ],
    newsletter: {
      placeholder: "Email kamu",
      buttonText: "Langganan"
    },
    bottomLinks: [
      { label: "Syarat", href: "/terms" },
      { label: "Privasi", href: "/privacy" }
    ]
  },
  animated: {
    columns: [
      {
        title: "Explore",
        items: [
          { label: "Galaxies", href: "#galaxies" },
          { label: "Nebulae", href: "#nebulae" }
        ]
      },
      {
        title: "Mission",
        items: [
          { label: "About Us", href: "#about" },
          { label: "Our Team", href: "#team" }
        ]
      }
    ],
    description: "Tetap terhubung dengan update terbaru.",
    socialTitle: "Ikuti Kami",
    newsletter: {
      title: "Langganan",
      placeholder: "Email...",
      buttonText: "Gabung"
    }
  }
};

export default function FooterPage() {
  const theme = useTheme();
  const { language } = useThemeContext();
  
  const t = {
    title: language === 'id' ? 'Footer' : 'Footer',
    desc: language === 'id' 
      ? 'Footer biasanya muncul di bagian bawah halaman dan merupakan tempat yang tepat untuk menempatkan navigasi sekunder, tautan ke kebijakan, atau koneksi media sosial.'
      : 'The Footer usually appears at the bottom of the page and is a great place to put secondary navigation, links to policies, or social media connections.',
    variants: language === 'id' ? 'Varian' : 'Variants'
  };
  
  const [copiedStates, setCopiedStates] = useState({});
  const [expandedStates, setExpandedStates] = useState({});
  const [viewModes, setViewModes] = useState({});

  const handleCopy = async (variant, text) => {
    await navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [variant]: true }));
    setTimeout(() => {
      setCopiedStates((prev) => ({ ...prev, [variant]: false }));
    }, 1200);
  };

  const toggleExpand = (variant) => {
    setExpandedStates((prev) => ({ ...prev, [variant]: !prev[variant] }));
  };

  const setViewMode = (variant, mode) => {
    setViewModes((prev) => ({ ...prev, [variant]: mode }));
  };

  const borderColor = theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : '#cbd5e1';

  return (
    <div style={{ maxWidth: 1000 }}>
      <section style={{ marginBottom: theme.spacing.xxl }}>
        <h1 style={{ fontSize: theme.typography.fontSize.xxl, marginBottom: theme.spacing.lg }}>{t.title}</h1>
        <p style={{ fontSize: theme.typography.fontSize.lg, color: theme.colors.textSecondary, lineHeight: 1.6 }}>{t.desc}</p>
      </section>

      <section>
        <h2 style={{ fontSize: theme.typography.fontSize.xl, marginBottom: theme.spacing.xl }}>{t.variants}</h2>
        
        {Object.entries(SNIPPETS).map(([variant, snippet]) => {
          const isExpanded = expandedStates[variant];
          const currentView = viewModes[variant] || 'desktop';
          const previewWidth = currentView === 'mobile' ? '375px' : currentView === 'tablet' ? '768px' : '100%';
          
          return (
            <div key={variant} style={{ marginBottom: theme.spacing.xxl }}>
              <h3 style={{ fontSize: theme.typography.fontSize.lg, marginBottom: theme.spacing.md, textTransform: 'capitalize' }}>{variant}</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `${theme.spacing.sm} ${theme.spacing.md}`, background: theme.colors.surface, borderTopLeftRadius: theme.radius.md, borderTopRightRadius: theme.radius.md, border: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}` }}>
                <div style={{ width: '80px' }}></div>
                <div style={{ display: 'flex', gap: theme.spacing.sm, background: theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', padding: '4px', borderRadius: theme.radius.sm }}>
                  <button onClick={() => setViewMode(variant, 'desktop')} title="Desktop view" style={{ background: 'transparent', border: 'none', color: currentView === 'desktop' ? theme.colors.textPrimary : theme.colors.textSecondary, cursor: 'pointer', padding: '6px', fontSize: '1.1rem', display: 'flex', opacity: currentView === 'desktop' ? 1 : 0.6 }}><FaDesktop /></button>
                  <button onClick={() => setViewMode(variant, 'tablet')} title="Tablet view" style={{ background: 'transparent', border: 'none', color: currentView === 'tablet' ? theme.colors.textPrimary : theme.colors.textSecondary, cursor: 'pointer', padding: '6px', fontSize: '1.1rem', display: 'flex', opacity: currentView === 'tablet' ? 1 : 0.6 }}><FaTabletScreenButton /></button>
                  <button onClick={() => setViewMode(variant, 'mobile')} title="Mobile view" style={{ background: 'transparent', border: 'none', color: currentView === 'mobile' ? theme.colors.textPrimary : theme.colors.textSecondary, cursor: 'pointer', padding: '6px', fontSize: '1.1rem', display: 'flex', opacity: currentView === 'mobile' ? 1 : 0.6 }}><FaMobileScreenButton /></button>
                </div>
                <div style={{ width: '80px', display: 'flex', justifyContent: 'flex-end' }}>
                  <button onClick={() => handleCopy(variant, snippet)} title="Copy code" style={{ background: 'transparent', color: theme.colors.textSecondary, border: 'none', padding: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: theme.typography.fontSize.sm }}>{copiedStates[variant] ? <FaCheck color={theme.colors.success || '#10B981'} /> : <FaCopy style={{ fontSize: '1.1rem' }} />}</button>
                </div>
              </div>

              <div style={{ background: theme.colors.surface, padding: theme.spacing.xl, borderLeft: `1px solid ${borderColor}`, borderRight: `1px solid ${borderColor}`, minHeight: '160px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                <div style={{ width: previewWidth, transition: 'width 0.3s ease, padding 0.3s ease', border: currentView !== 'desktop' ? `1px dashed ${theme.colors.border}` : 'none', padding: currentView !== 'desktop' ? theme.spacing.md : 0, display: 'flex', justifyContent: 'center', background: currentView !== 'desktop' ? (theme.mode === 'dark' ? '#000' : '#fff') : 'transparent', borderRadius: currentView !== 'desktop' ? theme.radius.md : 0 }}>
                  <Footer variant={variant} {...PREVIEW_PROPS[variant]} />
                </div>
              </div>

              <div style={{ background: theme.colors.surface, borderBottomLeftRadius: theme.radius.md, borderBottomRightRadius: theme.radius.md, border: `1px solid ${borderColor}`, borderTop: `1px solid ${borderColor}`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ maxHeight: isExpanded ? 'none' : '300px', overflow: 'hidden', padding: theme.spacing.lg, transition: 'max-height 0.3s ease' }}>
                  <pre style={{ fontFamily: theme.typography.fontFamily.mono, fontSize: theme.typography.fontSize.sm, color: theme.mode === 'light' ? '#1F2937' : theme.colors.textSecondary, margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{snippet}</pre>
                </div>
                {!isExpanded ? (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: `linear-gradient(to bottom, transparent, ${theme.colors.surface})`, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: theme.spacing.md }}>
                    <button onClick={() => toggleExpand(variant)} style={{ background: theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)', border: `1px solid ${borderColor}`, borderRadius: theme.radius.pill, padding: '6px 16px', color: theme.colors.textPrimary, cursor: 'pointer', fontSize: theme.typography.fontSize.sm, display: 'flex', alignItems: 'center', gap: '6px' }}><span>Expand Code</span><FaChevronDown /></button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: theme.spacing.md, paddingTop: theme.spacing.xs, borderTop: `1px solid ${theme.colors.border}` }}>
                    <button onClick={() => toggleExpand(variant)} style={{ background: 'transparent', border: 'none', color: theme.colors.textSecondary, cursor: 'pointer', fontSize: theme.typography.fontSize.sm, display: 'flex', alignItems: 'center', gap: '6px' }}><span>Collapse Code</span><FaChevronUp /></button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
