"use client";

import AppSidebar from "../../../components/AppSidebar";
import theme from "../../app/token/theme";
const { spacing } = theme;

export default function DocsLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", paddingTop: 64, paddingLeft: 15, paddingRight: 15, paddingBottom: 30 }}>
      <AppSidebar />
      <div style={{ flex: 1, padding: spacing.lg, marginLeft: 260 }}>
        {children}
      </div>
    </div>
  );
}
