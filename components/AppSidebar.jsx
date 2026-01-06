"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";
import { useThemeContext } from "../src/app/Provider";
import { APP_HEADER_H } from "./AppHeader";

const SIDEBAR_W = 260;
export const APP_SIDEBAR_W = SIDEBAR_W;

const menu = [
  { label: "Button", href: "/button" },
  { label: "Header", href: "/header" },
  { label: "Footer", href: "/footer" },
  { label: "Card", href: "/card" },
  { label: "Sidebar", href: "/sidebar" },
];

const SidebarContainer = styled.aside`
  position: fixed;
  top: ${APP_HEADER_H}px;
  left: 0;
  bottom: 0;
  width: ${SIDEBAR_W}px;
  /* Specific Backgrounds: Light = Gray-ish White, Dark = Contrast Gray */
  background: ${({ theme }) => theme.mode === 'dark' ? '#111111' : '#F9F9F9'};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 24px 16px;
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  overflow-y: auto;
  z-index: 40;
  transition: background 0.3s ease;
`;

const SectionLabel = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 12px;
  padding-left: 12px;
`;

const Spacer = styled.div`
  height: 24px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 8px; /* radius.md */
  margin-bottom: 4px;
  text-decoration: none;
  font-size: 0.9rem; /* fontSize.sm approx */
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  /* Color Logic */
  color: ${({ theme }) => theme.mode === 'light' ? theme.colors.textPrimary : 'rgba(255,255,255,0.85)'};

  &:hover {
    background: ${({ theme }) => theme.mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.06)'};
    color: ${({ theme }) => theme.colors.gold};
  }

  &[aria-current="page"] {
    background: ${({ theme }) => theme.mode === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'};
    color: ${({ theme }) => theme.colors.gold};
    box-shadow: inset 3px 0 0 ${({ theme }) => theme.colors.gold};
    
    /* Remove previous pseudo-element indicator */
    &::before {
      display: none;
    }
  }
`;

export default function AppSidebar() {
  const pathname = usePathname();
  const { mode } = useThemeContext();

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <SidebarContainer>
      <SectionLabel>Documentation</SectionLabel>
      <nav>
        <NavItem 
          href="/docs" 
          aria-current={isActive("/docs") && pathname !== "/docs/components" ? "page" : undefined}
        >
          Get Started
        </NavItem>

        <Spacer />
        <SectionLabel>Components</SectionLabel>

        {menu.map((item) => (
          <NavItem
            key={item.label}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
          >
            {item.label}
          </NavItem>
        ))}
      </nav>
    </SidebarContainer>
  );
}

