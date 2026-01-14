"use client";
import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { FiSun, FiMoon } from "react-icons/fi";
import { useThemeContext } from "../app/Provider";
import { colors, fontColors, spacing, typography, borderRadius } from "../app/token/theme";

import { IoLanguage, IoMenu, IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { menu as docsMenu } from "./AppSidebar";

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
  z-index: 100;
  transition: all 0.2s ease;

  @media (max-width: 600px) {
    padding: 0 ${spacing.md};
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: ${spacing.md};
  align-items: center;

  @media (max-width: 600px) {
    display: none; /* Potentially hidden on mobile or moved to a menu */
  }
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
  flex-shrink: 0;

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

// Language Button
const LangButton = styled.button`
  background: transparent;
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.primary};
  }
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
  
  @media (max-width: 600px) {
    font-size: 1.1rem;
    gap: 8px;
  }
`;

const BrandIconContainer = styled.div`
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



// ... existing code ...

const HamburgerBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
  display: none;
  padding: 4px;
  
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileBackdrop = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 105;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
  transition: opacity 0.3s ease;
`;

const MobileMenuDrawer = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 80%; /* Drawer style */
  max-width: 320px;
  background: ${({ theme }) => theme.mode === 'dark' ? '#111111' : theme.colors.secondary};
  z-index: 110;
  padding: 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

const MobileLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.mode === 'dark' ? theme.colors.textInverted : theme.colors.textPrimary};
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const MobileSubLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.mode === 'dark' ? theme.colors.textInverted : theme.colors.textPrimary};
  padding: 8px 0 8px 16px;
  display: block;
`;

const MobileSectionTitle = styled.div`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 12px;
  margin-bottom: 8px;
`;

export default function AppHeader() {
  const { mode, toggleTheme, language, toggleLanguage } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  // Close menu when path changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isDocsPage = pathname.startsWith('/docs') || pathname.startsWith('/button') || pathname.startsWith('/header') || pathname.startsWith('/footer') || pathname.startsWith('/card') || pathname.startsWith('/sidebar');

  return (
    <>
      <Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <HamburgerBtn onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </HamburgerBtn>
          <Brand href="/">
            <Image 
              src={mode === 'dark' ? '/Logo-Ultima-Light.png' : '/Logo-Ultima-Dark.png'}
              alt="Ultima UI Logo"
              width={32}
              height={32}
              style={{ borderRadius: 8 }}
            />
            Ultima UI
          </Brand>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <NavLinks>
            <NavLink href="/">{language === 'id' ? 'Beranda' : 'Home'}</NavLink>
            <NavLink href="/docs">{language === 'id' ? 'Dokumentasi' : 'Docs'}</NavLink>
          </NavLinks>

          <LangButton onClick={toggleLanguage} title={language === 'id' ? "Ganti Bahasa" : "Switch Language"}>
             <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{language.toUpperCase()}</span>
          </LangButton>

          <ToggleTrack onClick={toggleTheme} aria-label="Toggle theme">
            <ToggleKnob $mode={mode}>
              {mode === 'dark' ? <FiMoon /> : <FiSun />}
            </ToggleKnob>
          </ToggleTrack>
        </div>
      </Header>

      <MobileBackdrop $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      
      <MobileMenuDrawer $isOpen={isMenuOpen}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <MobileLink href="/">{language === 'id' ? 'Beranda' : 'Home'}</MobileLink>
          <MobileLink href="/docs">{language === 'id' ? 'Dokumentasi' : 'Docs'}</MobileLink>
          
          {/* Docs Specific Links in Mobile Menu */}
          {isDocsPage && (
            <div style={{ marginTop: 16, paddingLeft: 8, borderLeft: `2px solid ${({ theme }) => theme.colors.border? theme.colors.border : '#eee'}` }}>
              <MobileSectionTitle>{language === 'id' ? 'Komponen' : 'Components'}</MobileSectionTitle>
              {docsMenu.map(item => (
                <MobileSubLink key={item.label} href={item.href}>
                  {item.label}
                </MobileSubLink>
              ))}
            </div>
          )}
        </div>
      </MobileMenuDrawer>
    </>
  );
}
