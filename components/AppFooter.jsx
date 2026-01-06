"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { colors, spacing } from "../src/app/token/theme";

const Footer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${spacing.xl} ${spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  margin-top: auto;
  transition: background 0.3s ease;
  position: relative;
  z-index: 100; /* Ensure above sidebar if overlap occurs */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-size: 1.25rem;
    font-weight: 800;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.9rem;
    line-height: 1.6;
    max-width: 300px;
    margin: 0;
  }
`;

const BrandIconContainer = styled.div`
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 6px;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin: 0 0 8px 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    /* Adaptive Heading Color */
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  width: fit-content;
  position: relative;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 0 24px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;

export default function AppFooter() {
  return (
    <Footer>
      <Container>
        <Grid>
          {/* Col 1: Brand */}
          <BrandCol>
             <h3>
               <BrandIconContainer />
               Ultima UI
             </h3>
             <p>
               A modern design system for building premium, accessible, and high-performance web applications.
             </p>
          </BrandCol>

          {/* Col 2: Docs */}
          <LinkGroup>
            <h4>Navigation</h4>
            <FooterLink href="/docs">Get Started</FooterLink>
            <FooterLink href="/docs/components">Documentation</FooterLink>
          </LinkGroup>

          {/* Col 3: Version (Replaces Meta) */}
          <LinkGroup>
            <h4>Version</h4>
            <div style={{ fontSize: '0.95rem', color: colors.textSecondary, fontWeight: 500 }}>
              v0.1.5
            </div>
            <div style={{ fontSize: '0.95rem', color: colors.textSecondary, marginTop: 4 }}>
              Build with Next.js
            </div>
          </LinkGroup>
        </Grid>

        <Divider />

        <BottomRow>
          <div>
            &copy; {new Date().getFullYear()} Ultima UI. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            <FooterLink href="#">Privacy</FooterLink>
            <FooterLink href="#">Terms</FooterLink>
          </div>
        </BottomRow>
      </Container>
    </Footer>
  );
}
