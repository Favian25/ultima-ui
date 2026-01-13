"use client";

import { useState } from "react";
import { useTheme } from "styled-components";
import { FaDesktop, FaTabletScreenButton, FaMobileScreenButton, FaCopy, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { useThemeContext } from "../../Provider";
import { Card } from "../../../../components/CardVariant";

const IMG = "https://i.ibb.co.com/xtdsRQhQ/Hu-Tao.jpg";

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
};

export default function CardPage() {
  const theme = useTheme();
  const { language } = useThemeContext();
  
  const t = {
    title: language === 'id' ? 'Kartu' : 'Card',
    desc: language === 'id' 
      ? 'Kartu memungkinkan Anda menampilkan konten dengan cara yang jelas dan terorganisir. Kartu adalah wadah serbaguna yang dapat menampung gambar, teks, dan tindakan, menjadikannya ideal untuk menampilkan artikel, produk, atau profil pengguna dalam tata letak kisi atau daftar.'
      : 'Cards allow you to display content in a clear, organized way. They are versatile containers that can hold images, text, and actions, making them ideal for showcasing articles, products, or user profiles in a grid or list layout.',
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

    // Border colors based on theme preference
  const borderColor = theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : '#cbd5e1';

  return (
    <div style={{ maxWidth: 1000 }}>
      {/* Introduction */}
      <section style={{ marginBottom: theme.spacing.xxl }}>
        <h1 style={{ fontSize: theme.typography.fontSize.xxl, marginBottom: theme.spacing.lg }}>
          {t.title}
        </h1>
        <p style={{ fontSize: theme.typography.fontSize.lg, color: theme.colors.textSecondary, lineHeight: 1.6 }}>
          {t.desc}
        </p>
      </section>

      {/* Variants Loop */}
      <section>
        <h2 style={{ fontSize: theme.typography.fontSize.xl, marginBottom: theme.spacing.xl }}>{t.variants}</h2>
        
        {Object.entries(SNIPPETS).map(([variant, snippet]) => {
          const isExpanded = expandedStates[variant];
          const currentView = viewModes[variant] || 'desktop';

          const previewWidth = currentView === 'mobile' ? '375px' 
            : currentView === 'tablet' ? '768px' 
            : '100%';

          return (
            <div key={variant} style={{ marginBottom: theme.spacing.xxl }}>
              <h3 style={{ 
                fontSize: theme.typography.fontSize.lg, 
                marginBottom: theme.spacing.md,
                textTransform: 'capitalize' 
              }}>
                {variant}
              </h3>
              
              {/* Toolbar */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: `${theme.spacing.sm} ${theme.spacing.md}`,
                background: theme.colors.surface,
                borderTopLeftRadius: theme.radius.md,
                borderTopRightRadius: theme.radius.md,
                border: `1px solid ${borderColor}`,
                borderBottom: `1px solid ${borderColor}`,
              }}>
                {/* Spacer to center the toggle group */}
                <div style={{ width: '80px' }}></div> 

                {/* View Toggles (Dynamic) */}
                <div style={{ display: 'flex', gap: theme.spacing.sm, background: theme.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', padding: '4px', borderRadius: theme.radius.sm }}>
                  <button 
                    onClick={() => setViewMode(variant, 'desktop')}
                    title="Desktop view" 
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: currentView === 'desktop' ? theme.colors.textPrimary : theme.colors.textSecondary, 
                      cursor: 'pointer', 
                      padding: '6px', 
                      fontSize: '1.1rem', 
                      display: 'flex',
                      opacity: currentView === 'desktop' ? 1 : 0.6
                  }}>
                    <FaDesktop />
                  </button>
                  <button 
                    onClick={() => setViewMode(variant, 'tablet')}
                    title="Tablet view" 
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: currentView === 'tablet' ? theme.colors.textPrimary : theme.colors.textSecondary, 
                      cursor: 'pointer', 
                      padding: '6px', 
                      fontSize: '1.1rem', 
                      display: 'flex',
                      opacity: currentView === 'tablet' ? 1 : 0.6
                  }}>
                    <FaTabletScreenButton />
                  </button>
                  <button 
                    onClick={() => setViewMode(variant, 'mobile')}
                    title="Mobile view" 
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: currentView === 'mobile' ? theme.colors.textPrimary : theme.colors.textSecondary, 
                      cursor: 'pointer', 
                      padding: '6px', 
                      fontSize: '1.1rem', 
                      display: 'flex',
                      opacity: currentView === 'mobile' ? 1 : 0.6
                  }}>
                    <FaMobileScreenButton />
                  </button>
                </div>

                {/* Copy Button */}
                <div style={{ width: '80px', display: 'flex', justifyContent: 'flex-end' }}>
                   <button 
                    onClick={() => handleCopy(variant, snippet)}
                    title="Copy code"
                    style={{
                      background: 'transparent',
                      color: theme.colors.textSecondary,
                      border: 'none',
                      padding: '6px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: theme.typography.fontSize.sm
                    }}
                  >
                    {copiedStates[variant] ? <FaCheck color={theme.colors.success || '#10B981'} /> : <FaCopy style={{ fontSize: '1.1rem' }} />}
                  </button>
                </div>
              </div>

              {/* Visual Preview */}
              <div style={{ 
                background: theme.colors.surface, 
                padding: theme.spacing.xl, 
                borderLeft: `1px solid ${borderColor}`,
                borderRight: `1px solid ${borderColor}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '220px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: previewWidth,
                  transition: 'width 0.3s ease, padding 0.3s ease',
                  border: currentView !== 'desktop' ? `1px dashed ${theme.colors.border}` : 'none',
                  padding: currentView !== 'desktop' ? theme.spacing.md : 0,
                  display: 'flex',
                  justifyContent: 'center',
                  background: currentView !== 'desktop' ? (theme.mode === 'dark' ? '#000' : '#fff') : 'transparent',
                  borderRadius: currentView !== 'desktop' ? theme.radius.md : 0,
                }}>
                  <Card 
                    variant={variant}
                    title={variant === "primary" ? "Primary Card" : variant === "secondary" ? "Secondary Card" : variant === "outline" ? "Outline Card" : "Animated Card"}
                    desc="Deskripsi singkat komponen card."
                    image={IMG}
                    tags={["Design", "Next.js", "Styled"]}
                    ctaPrimary={{ label: "Detail", href: "#" }}
                    ctaGhost={{ label: "Preview", href: "#" }}
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div style={{ 
                background: theme.colors.surface, 
                borderBottomLeftRadius: theme.radius.md,
                borderBottomRightRadius: theme.radius.md,
                border: `1px solid ${borderColor}`, 
                borderTop: `1px solid ${borderColor}`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  maxHeight: isExpanded ? 'none' : '300px',
                  overflow: 'hidden',
                  padding: theme.spacing.lg,
                  transition: 'max-height 0.3s ease'
                }}>
                  <pre style={{ 
                    fontFamily: theme.typography.fontFamily.mono, 
                    fontSize: theme.typography.fontSize.sm,
                    color: theme.mode === 'light' ? '#1F2937' : theme.colors.textSecondary,
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}>
                    {snippet}
                  </pre>
                </div>

                 {/* Expand/Collapse Overlay & Button */}
                {!isExpanded ? (
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: `linear-gradient(to bottom, transparent, ${theme.colors.surface})`,
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: theme.spacing.md
                  }}>
                    <button 
                      onClick={() => toggleExpand(variant)}
                      style={{
                        background: theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                        border: `1px solid ${borderColor}`,
                        borderRadius: theme.radius.pill,
                        padding: '6px 16px',
                        color: theme.colors.textPrimary,
                        cursor: 'pointer',
                        fontSize: theme.typography.fontSize.sm,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Expand Code</span>
                      <FaChevronDown />
                    </button>
                  </div>
                ) : (
                  <div style={{
                     display: 'flex',
                     justifyContent: 'center',
                     paddingBottom: theme.spacing.md,
                     paddingTop: theme.spacing.xs,
                     borderTop: `1px solid ${theme.colors.border}`
                  }}>
                    <button 
                      onClick={() => toggleExpand(variant)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: theme.colors.textSecondary,
                        cursor: 'pointer',
                        fontSize: theme.typography.fontSize.sm,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Collapse Code</span>
                      <FaChevronUp />
                    </button>
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
