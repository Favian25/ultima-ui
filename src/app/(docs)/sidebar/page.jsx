"use client";

import { useState } from "react";
import { useTheme } from "styled-components";
import { FaDesktop, FaTabletScreenButton, FaMobileScreenButton, FaCopy, FaCheck, FaChevronDown, FaChevronUp, FaHouse, FaBoxOpen, FaUsers, FaGear, FaCircleQuestion, FaFileLines, FaLayerGroup, FaFolder, FaBell, FaRocket, FaStar, FaGlobe, FaSatelliteDish } from "react-icons/fa6";
import { useThemeContext } from "../../Provider";
import { Sidebar } from "../../../../components/SidebarVariant";

const ContentGrid = ({ theme }) => {
  const boxBg = theme.mode === 'dark' ? '#1f2937' : '#e5e7eb';
  const borderColor = theme.mode === 'dark' ? '#374151' : '#d1d5db';
  const textColor = theme.mode === 'dark' ? '#6b7280' : '#9ca3af';
  
  return (
    <div style={{ flex: 1, padding: '16px', display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto auto', alignContent: 'start', background: theme.mode === 'dark' ? '#111827' : '#f9fafb', minHeight: '100%' }}>
      {/* Top 3 cards */}
      {[1, 2, 3].map(i => (
        <div key={`top-${i}`} style={{ background: boxBg, borderRadius: '12px', border: `2px dashed ${borderColor}`, height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '24px', color: textColor, fontWeight: 300 }}>+</span>
        </div>
      ))}
      {/* Large content area spanning 2 cols */}
      <div style={{ gridColumn: 'span 2', background: boxBg, borderRadius: '12px', border: `2px dashed ${borderColor}`, height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '28px', color: textColor, fontWeight: 300 }}>+</span>
      </div>
      {/* Side panel */}
      <div style={{ display: 'grid', gap: '16px' }}>
        <div style={{ background: boxBg, borderRadius: '12px', border: `2px dashed ${borderColor}`, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '20px', color: textColor, fontWeight: 300 }}>+</span>
        </div>
        <div style={{ background: boxBg, borderRadius: '12px', border: `2px dashed ${borderColor}`, height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '20px', color: textColor, fontWeight: 300 }}>+</span>
        </div>
      </div>
      {/* Bottom 2 large cards */}
      <div style={{ background: boxBg, borderRadius: '12px', border: `2px dashed ${borderColor}`, height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '24px', color: textColor, fontWeight: 300 }}>+</span>
      </div>
      <div style={{ gridColumn: 'span 2', background: boxBg, borderRadius: '12px', border: `2px dashed ${borderColor}`, height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '24px', color: textColor, fontWeight: 300 }}>+</span>
      </div>
    </div>
  );
};

const SNIPPETS = {
  primary: `import { Sidebar } from "ultima-ui";
import { FaHouse, FaBoxOpen, FaUsers, FaGear, FaCircleQuestion } from "react-icons/fa6";

// NOTE: Install react-icons first: npm install react-icons

const primaryMenu = [
  {
    title: "Main",
    items: [
      { ic: <FaHouse />, label: "Dashboard", key: "dash", kbd: "D" },
      { ic: <FaBoxOpen />, label: "Products", key: "prod", kbd: "P" },
      { ic: <FaUsers />, label: "Customers", key: "cust", kbd: "C" }
    ]
  },
  {
    title: "Support",
    items: [
      { ic: <FaGear />, label: "Settings", key: "settings" },
      { ic: <FaCircleQuestion />, label: "Help Center", key: "help" }
    ]
  }
];

export default function Example() {
  return (
    <div style={{ height: "600px" }}>
      <Sidebar 
        variant="primary" 
        active="dash" 
        menuGroups={primaryMenu}
        brandText="MyApp"
      />
    </div>
  );
}`,

  outline: `import { Sidebar } from "ultima-ui";
import { FaHouse, FaFileLines, FaLayerGroup, FaGear } from "react-icons/fa6";

// NOTE: Install react-icons first: npm install react-icons

const outlineMenu = [
  {
    title: "Navigation",
    items: [
      { ic: <FaHouse />, label: "Home", key: "home" },
      { ic: <FaFileLines />, label: "Documents", key: "docs" },
      { ic: <FaLayerGroup />, label: "Projects", key: "projects" }
    ]
  },
  {
    title: null,
    items: [{ ic: <FaGear />, label: "Preferences", key: "prefs" }]
  }
];

export default function Example() {
  return (
    <div style={{ height: "600px" }}>
      <Sidebar 
        variant="outline" 
        active="home" 
        menuGroups={outlineMenu}
        brandText="DokumenKu"
      />
    </div>
  );
}`,

  rail: `import { Sidebar } from "ultima-ui";
import { FaHouse, FaFolder, FaBell, FaGear } from "react-icons/fa6";

// NOTE: Install react-icons first: npm install react-icons

const railMenu = [
  {
    title: null,
    items: [
      { ic: <FaHouse />, label: "Home", key: "home" },
      { ic: <FaFolder />, label: "Files", key: "files" },
      { ic: <FaBell />, label: "Notifications", key: "notif" },
      { ic: <FaGear />, label: "Settings", key: "settings" }
    ]
  }
];

export default function Example() {
  return (
    <div style={{ height: "600px" }}>
      <Sidebar 
        variant="rail" 
        active="home" 
        menuGroups={railMenu}
        brandText="R"
      />
    </div>
  );
}`,

  animated: `import { Sidebar } from "ultima-ui";
import { FaRocket, FaStar, FaGlobe, FaSatelliteDish } from "react-icons/fa6";

// NOTE: Install react-icons first: npm install react-icons

const spaceMenu = [
  {
    title: "Mission Control",
    items: [
      { ic: <FaRocket />, label: "Launch Pad", key: "launch", kbd: "L" },
      { ic: <FaStar />, label: "Star Map", key: "starmap" },
      { ic: <FaGlobe />, label: "Planets", key: "planets" }
    ]
  },
  {
    title: "Communications",
    items: [{ ic: <FaSatelliteDish />, label: "Signal Hub", key: "signals" }]
  }
];

export default function Example() {
  return (
    <div style={{ height: "600px" }}>
      <Sidebar 
        variant="animated" 
        active="launch" 
        menuGroups={spaceMenu}
        brandText="SpaceApp"
      />
    </div>
  );
}`,
};

const PREVIEW_PROPS = {
  primary: {
    menuGroups: [
      {
        title: "Main",
        items: [
          { ic: <FaHouse />, label: "Dashboard", key: "dash", kbd: "D" },
          { ic: <FaBoxOpen />, label: "Products", key: "prod", kbd: "P" },
          { ic: <FaUsers />, label: "Customers", key: "cust", kbd: "C" }
        ]
      },
      {
        title: "Support",
        items: [
          { ic: <FaGear />, label: "Settings", key: "settings" },
          { ic: <FaCircleQuestion />, label: "Help Center", key: "help" }
        ]
      }
    ],
    brandText: "MyApp",
    active: "dash"
  },
  outline: {
    menuGroups: [
      {
        title: "Navigation",
        items: [
          { ic: <FaHouse />, label: "Home", key: "home" },
          { ic: <FaFileLines />, label: "Documents", key: "docs" },
          { ic: <FaLayerGroup />, label: "Projects", key: "projects" }
        ]
      },
      {
        title: null,
        items: [{ ic: <FaGear />, label: "Preferences", key: "prefs" }]
      }
    ],
    brandText: "DokumenKu",
    active: "home"
  },
  rail: {
    menuGroups: [
      {
        title: null,
        items: [
          { ic: <FaHouse />, label: "Home", key: "home" },
          { ic: <FaFolder />, label: "Files", key: "files" },
          { ic: <FaBell />, label: "Notifications", key: "notif" },
          { ic: <FaGear />, label: "Settings", key: "settings" }
        ]
      }
    ],
    brandText: "R",
    active: "home"
  },
  animated: {
    menuGroups: [
      {
        title: "Mission Control",
        items: [
          { ic: <FaRocket />, label: "Launch Pad", key: "launch", kbd: "L" },
          { ic: <FaStar />, label: "Star Map", key: "starmap" },
          { ic: <FaGlobe />, label: "Planets", key: "planets" }
        ]
      },
      {
        title: "Communications",
        items: [{ ic: <FaSatelliteDish />, label: "Signal Hub", key: "signals" }]
      }
    ],
    brandText: "SpaceApp",
    active: "launch"
  }
};

export default function SidebarPage() {
  const theme = useTheme();
  const { language } = useThemeContext();
  
  const t = {
    title: language === 'id' ? 'Sidebar' : 'Sidebar',
    desc: language === 'id' 
      ? 'Sidebar adalah panel navigasi vertikal yang biasanya muncul di sisi kiri atau kanan aplikasi. Ini menyediakan akses cepat ke bagian utama dan fitur penting dari aplikasi Anda.'
      : 'A Sidebar is a vertical navigation panel that typically appears on the left or right side of an application. It provides quick access to main sections and important features of your app.',
    variants: language === 'id' ? 'Varian' : 'Variants'
  };
  
  const [copiedStates, setCopiedStates] = useState({});
  const [expandedStates, setExpandedStates] = useState({});
  const [viewModes, setViewModes] = useState({});

  const handleCopy = async (variant, text) => {
    await navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({ ...prev, [variant]: true }));
    setTimeout(() => { setCopiedStates((prev) => ({ ...prev, [variant]: false })); }, 1200);
  };

  const toggleExpand = (variant) => { setExpandedStates((prev) => ({ ...prev, [variant]: !prev[variant] })); };
  const setViewMode = (variant, mode) => { setViewModes((prev) => ({ ...prev, [variant]: mode })); };

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

              <div style={{ background: theme.colors.surface, padding: theme.spacing.xl, borderLeft: `1px solid ${borderColor}`, borderRight: `1px solid ${borderColor}`, minHeight: '650px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden', transition: 'all 0.3s ease' }}>
                <div style={{ width: previewWidth, height: '620px', transition: 'width 0.3s ease, padding 0.3s ease', border: currentView !== 'desktop' ? `1px dashed ${theme.colors.border}` : 'none', padding: currentView !== 'desktop' ? theme.spacing.md : 0, display: 'flex', justifyContent: 'flex-start', background: currentView !== 'desktop' ? (theme.mode === 'dark' ? '#000' : '#fff') : 'transparent', borderRadius: currentView !== 'desktop' ? theme.radius.md : 0 }}>
                  <Sidebar variant={variant} {...PREVIEW_PROPS[variant]} />
                  <ContentGrid theme={theme} />
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
