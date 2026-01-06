"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeContext } from "../src/app/Provider";
import { colors, fontColors, spacing, typography, borderRadius } from "../src/app/token/theme";

export const APP_HEADER_H = 64;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${APP_HEADER_H}px;
  background: ${({ theme }) => theme.mode === 'light' ? theme.colors.secondary : theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.lg};
  z-index: 50;
  transition: all 0.2s ease;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: ${spacing.md};
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 4px 0;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.colors.gold};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// Knob Toggle
const ToggleTrack = styled.button`
  width: 52px;
  height: 28px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: 99px;
  border: none;
  position: relative;
  cursor: pointer;
  padding: 2px;
  display: flex;
  align-items: center;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const ToggleKnob = styled.div`
  width: 24px;
  height: 24px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  position: absolute;
  top: 2px;
  left: ${({ $mode }) => $mode === 'dark' ? '26px' : '2px'};
  transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 14px;
`;

const Brand = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BrandIconContainer = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Placeholder for custom icon logic if needed later */
`;

export default function AppHeader() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Header>
      <Brand href="/">
        <BrandIconContainer />
        Ultima UI
      </Brand>

      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/docs">Docs</NavLink>
        </NavLinks>

        <ToggleTrack onClick={toggleTheme} aria-label="Toggle theme">
          <ToggleKnob $mode={mode}>
            {mode === 'dark' ? <FiMoon /> : <FiSun />}
          </ToggleKnob>
        </ToggleTrack>
      </div>
    </Header>
  );
}
