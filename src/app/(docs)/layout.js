"use client";

import styled from "styled-components";
import AppSidebar, { SIDEBAR_W } from "../../layout/AppSidebar";
import theme from "../../app/token/theme";

const { spacing } = theme;

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding-top: 10px;
`;

const MainContent = styled.div`
  flex: 1;
  padding: ${spacing.lg};
  margin-left: ${SIDEBAR_W}px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 960px) {
    margin-left: 0;
    padding: ${spacing.md};
  }
`;

export default function DocsLayout({ children }) {
  return (
    <LayoutContainer>
      <AppSidebar />
      <MainContent>
        {children}
      </MainContent>
    </LayoutContainer>
  );
}
