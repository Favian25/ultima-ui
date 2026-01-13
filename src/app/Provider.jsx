"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./token/theme";

// Create Context
const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

// Dark Theme Overrides
const darkColors = {
  ...theme.colors,
  primary: "#FFFFFF",
  secondary: "#0E0700", // Dark canvas
  surface: "#1C1C1E",   // Dark surface
  border: "#333333",
  textPrimary: "#FFFFFF",
  textSecondary: "#A1A1A1",
  textInverted: "#000000",
  hover: "rgba(255,255,255,0.1)",
};

const lightTheme = { ...theme, mode: "light" };
const darkTheme = { ...theme, colors: darkColors, mode: "dark" };

const GlobalCSSVars = createGlobalStyle`
  :root {
    --color-primary: ${(props) => props.theme.colors.primary};
    --color-secondary: ${(props) => props.theme.colors.secondary};
    --color-surface: ${(props) => props.theme.colors.surface};
    --color-text: ${(props) => props.theme.colors.textPrimary};
    --font-primary: ${(props) => props.theme.typography.fontFamily.base};
    --radius-md: ${(props) => props.theme.radius.md};
    --space-md: ${(props) => props.theme.spacing.md};
  }
  body {
    font-family: var(--font-primary);
    margin: 0;
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.textPrimary};
    transition: background 0.3s ease, color 0.3s ease;
  }
`;

// ... overrides ...

export default function Providers({ children }) {
  const [mode, setMode] = useState("light");
  const [language, setLanguage] = useState("id");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, language, toggleLanguage }}>
      <ThemeProvider theme={theme}>
        <GlobalCSSVars />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
