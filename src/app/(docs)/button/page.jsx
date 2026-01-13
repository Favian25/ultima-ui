"use client";

import { useState } from "react";
import { useTheme } from "styled-components";
import { FaDesktop, FaTabletScreenButton, FaMobileScreenButton, FaCopy, FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useThemeContext } from "../../Provider";
import { Button } from "../../../../components/ButtonVariant";

const SNIPPETS = {
  primary: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button 
      variant="primary" 
      onClick={() => console.log('Clicked')}
    >
      Primary Action
    </Button>
  );
}`,
  secondary: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button variant="secondary">
      Secondary Action
    </Button>
  );
}`,
  outline: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button variant="outline">
      Outline Action
    </Button>
  );
}`,
  animated: `import { Button } from "ultima-ui";

export default function Example() {
  return (
    <Button variant="animated">
      Animated Action
    </Button>
  );
}`,
};

export default function ButtonPage() {
  const theme = useTheme();
  const { language } = useThemeContext();
  
  const t = {
    title: language === 'id' ? 'Tombol' : 'Button',
    desc: language === 'id' 
      ? 'Tombol adalah elemen UI dasar yang memungkinkan pengguna berinteraksi dengan aplikasi, memicu tindakan, atau menavigasi ke halaman lain. Ultima UI menyediakan berbagai gaya tombol yang sesuai dengan berbagai konteks, dari ajakan bertindak utama hingga opsi sekunder yang halus.'
      : 'Buttons are fundamental UI elements that allow users to interact with the application, trigger actions, or navigate to other pages. Ultima UI provides a versatile set of button styles to suit various contexts, from primary calls-to-action to subtle secondary options.',
    variants: language === 'id' ? 'Varian' : 'Variants'
  };
  
  // State for copy buttons (keyed by variant)
  const [copiedStates, setCopiedStates] = useState({});
  // State for expanded code snippets (keyed by variant)
  const [expandedStates, setExpandedStates] = useState({});
  // State for view mode (keyed by variant, so each example can be toggled independently)
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

          // Define width style based on view mode
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

              {/* Visual Preview Container */}
              <div style={{ 
                background: theme.colors.surface, 
                padding: theme.spacing.xl, 
                borderLeft: `1px solid ${borderColor}`,
                borderRight: `1px solid ${borderColor}`,
                minHeight: '160px',
                display: 'flex',             // Keeps the inner centered if smaller
                justifyContent: 'center',    // Keeps the inner centered if smaller
                alignItems: 'center',
                overflow: 'hidden',           // Scroll if too big? No, we want to contain it.
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
                  <Button variant={variant}>
                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </Button>
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
