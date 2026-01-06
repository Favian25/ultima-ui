// theme.js
const theme = {
  colors: {
    // base
    primary: "#0E0700",      // authority black
    secondary: "#FFFFFF",    // canvas
    surface: "#F7F7F5",      // soft background
    border: "#E6E6E3",

    // gold accent (ultima)
    gold: "#F5A623",
    goldSoft: "#FFD58A",
    goldMuted: "#C98A12",

    // text
    textPrimary: "#0E0700",
    textSecondary: "#8A8A86",
    textInverted: "#FFFFFF",

    // states
    hover: "rgba(0,0,0,0.04)",
    focus: "rgba(245,166,35,0.35)",
  },

  typography: {
    fontFamily: {
      base: "'Inter', system-ui, -apple-system, sans-serif",
      heading: "'Poppins', 'Inter', sans-serif",
      mono: "'JetBrains Mono', monospace",
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.375rem",
      xxl: "1.75rem",
    },

    lineHeight: {
      tight: 1.2,
      normal: 1.6,
      loose: 1.8,
    },

    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  radius: {
    sm: "6px",
    md: "10px",
    lg: "16px",
    pill: "999px",
  },

  shadow: {
    sm: "0 1px 2px rgba(0,0,0,0.06)",
    md: "0 6px 16px rgba(0,0,0,0.08)",
    goldGlow: "0 0 0 2px rgba(245,166,35,0.35)",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },

  zIndex: {
    base: 1,
    header: 100,
    overlay: 500,
    modal: 1000,
    toast: 2000,
  },

  motion: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "400ms ease",
  },
};

export default theme;

export const colors = theme.colors;
export const fontColors = {
  primary: theme.colors.textPrimary,
  secondary: theme.colors.textSecondary,
  inverted: theme.colors.textInverted
};
export const spacing = theme.spacing;
export const borderRadius = theme.radius;
export const typography = theme.typography;
