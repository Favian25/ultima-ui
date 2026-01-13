"use client";

import { useState } from "react";
import { useTheme } from "styled-components";
import { FaDesktop, FaTabletScreenButton, FaMobileScreenButton, FaCopy, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useThemeContext } from "../../Provider";
import { Header } from "../../../../components/HeaderVariant";

const SNIPPETS = {
  primary: `import { Header } from "ultima-ui";

// Primary variant: header with logo, navigation, and search box
const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function Example() {
  return (
    <Header 
      variant="primary" 
      logoText="MyBrand"
      links={primaryLinks}
    />
  );
}`,

  secondary: `import { Header } from "ultima-ui";

// Secondary variant: header with logo, navigation, and user profile avatar
const secondaryLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Analytics", href: "/analytics" },
  { label: "Settings", href: "/settings" }
];

export default function Example() {
  return (
    <Header 
      variant="secondary" 
      logoText="AdminPanel"
      links={secondaryLinks}
    />
  );
}`,

  outline: `import { Header } from "ultima-ui";

// Outline variant: minimal header with logo and navigation only
const outlineLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "API Reference", href: "/api" },
  { label: "Examples", href: "/examples" }
];

export default function Example() {
  return (
    <Header 
      variant="outline" 
      logoText="DevDocs"
      links={outlineLinks}
    />
  );
}`,

  animated: `import { Header } from "ultima-ui";

// Animated variant: cosmic hero header with starfield animation
const animatedLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Sign Up", href: "#signup" }
];

export default function Example() {
  return (
    <Header 
      variant="animated" 
      logoText="StarApp"
      links={animatedLinks}
    />
  );
}`,
};

export default function HeaderPage() {
  const theme = useTheme();
  const { language } = useThemeContext();
  
  const t = {
    title: language === 'id' ? 'Header' : 'Header',
    desc: language === 'id' 
      ? 'Header terletak di bagian atas halaman Anda, menyediakan branding penting, navigasi, dan tindakan global. Header menambatkan pengalaman pengguna dan memastikan akses yang konsisten ke area utama aplikasi Anda.'
      : 'The Header component sits at the top of your page, providing essential branding, navigation, and global actions. It anchors the user experience and ensures consistent access to key areas of your application.',
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
                <div style={{ width: '80px' }}></div> 

                {/* View Toggles */}
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

              {/* Visual Preview Container */}
              <div style={{ 
                background: theme.colors.surface, 
                padding: theme.spacing.xl, 
                borderLeft: `1px solid ${borderColor}`,
                borderRight: `1px solid ${borderColor}`,
                minHeight: '160px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
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
                  <Header variant={variant} />
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
