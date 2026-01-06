"use client";

import { useTheme } from "styled-components";

export default function DocsPage() {
  const theme = useTheme();

  return (
    <div style={{ maxWidth: 800 }}>
      <h1 style={{ fontSize: theme.typography.fontSize.xxl, marginBottom: theme.spacing.lg }}>
        Get Started
      </h1>
      <p style={{ fontSize: theme.typography.fontSize.lg, color: theme.colors.textSecondary, lineHeight: 1.6, marginBottom: theme.spacing.xl }}>
        Ultima UI is a comprehensive design system for building modern web applications. 
        It provides a set of accessible, reusable, and composable components.
      </p>

      <section style={{ marginBottom: theme.spacing.xxl }}>
        <h2 style={{ fontSize: theme.typography.fontSize.xl, marginBottom: theme.spacing.md }}>Installation</h2>
        <div style={{ 
          background: theme.colors.surface, 
          padding: theme.spacing.lg, 
          borderRadius: theme.radius.md,
          fontFamily: theme.typography.fontFamily.mono,
          border: `1px solid ${theme.colors.border}`,
          overflowX: "auto"
        }}>
          npm install ultima-ui
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: theme.typography.fontSize.xl, marginBottom: theme.spacing.md }}>Introduction</h2>
        <p style={{ color: theme.colors.textSecondary, lineHeight: 1.6, marginBottom: theme.spacing.md }}>
          Explore the components in the sidebar to understand how to use them. Each component documentation provides
          examples and API details.
        </p>
      </section>
    </div>
  );
}
