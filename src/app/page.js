"use client";

import Link from "next/link";
import styled, { useTheme } from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { RiReactjsLine, RiNextjsLine, RiCodeBoxLine } from "react-icons/ri";

const StyledButton = styled(Link)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textInverted};
  padding: 12px 32px;
  border-radius: ${props => props.theme.radius.pill};
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.theme.colors.gold};
    color: ${props => props.theme.colors.textPrimary};
  }
`;

export default function LandingPage() {
  const theme = useTheme();

  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: theme.spacing.xl, width: "100%", boxSizing: "border-box" }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: "center", padding: "80px 0 60px" }}>
          <h1 style={{ 
            fontSize: "3.5rem", 
            fontWeight: 800, 
            letterSpacing: "-0.02em", 
            marginBottom: theme.spacing.md,
            color: theme.colors.textPrimary,
            marginTop: 64, // Compensate for fixed header
          }}>
            Build Faster with <span style={{ color: theme.colors.gold }}>Ultima UI</span>
          </h1>
          <p style={{ 
            fontSize: theme.typography.fontSize.xl, 
            color: theme.colors.textSecondary, 
            maxWidth: 600, 
            margin: "0 auto 40px", 
            lineHeight: 1.6 
          }}>
            A modern, accessible, and customizable design system for building premium web applications.
          </p>
          <div style={{ display: "flex", gap: theme.spacing.md, justifyContent: "center" }}>
            <StyledButton href="/docs">
              Get Started <FiArrowRight />
            </StyledButton>
          </div>
        </section>

        {/* Component Preview Section */}
        <section style={{ margin: "60px 0" }}>
          <div style={{ 
            background: theme.mode === 'dark' ? theme.colors.surface : '#fff', 
            border: `1px solid ${theme.colors.border}`, 
            borderRadius: theme.radius.lg, 
            padding: theme.spacing.xl,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: theme.spacing.xl,
            alignItems: "center"
          }}>
            <div>
              <span style={{ 
                color: theme.colors.gold, 
                fontWeight: 700, 
                textTransform: "uppercase", 
                fontSize: theme.typography.fontSize.xs,
                letterSpacing: "0.05em" 
              }}>
                Component Preview
              </span>
              <h2 style={{ fontSize: "2rem", margin: "10px 0 20px" }}>Ready-to-use Components</h2>
              <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.lg }}>
                Everything you need to build a great UI. From Buttons to Cards, fully styled and accessible.
              </p>
              <div style={{ background: "#1e1e1e", padding: "20px", borderRadius: theme.radius.md, color: "#fff", fontFamily: theme.typography.fontFamily.mono, fontSize: "0.85rem", overflowX: "auto" }}>
                <pre style={{ margin: 0 }}>
{`import { Card } from "ultima-ui";

export default function Example() {
  return (
    <Card
      variant="primary"
      title="Primary Card"
      desc="Deskripsi singkat komponen card."
      image="\${IMG}"
      tags={["Design", "Next.js", "Styled"]}
      ctaPrimary={{ label: "Detail", href: "#" }}
      ctaGhost={{ label: "Preview", href: "#" }}
    />
  );
}`}
                </pre>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* Preview Card */}
              <div style={{ 
                width: 320, 
                background: theme.colors.secondary,
                borderRadius: theme.radius.lg, 
                boxShadow: theme.shadow.md,
                border: `1px solid ${theme.colors.border}`,
                overflow: "hidden" 
              }}>
                <div style={{ height: 180, background: theme.colors.surface, position: "relative" }}>
                   <img src="https://i.ibb.co.com/xtdsRQhQ/Hu-Tao.jpg" alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: theme.spacing.lg }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                     {["Design", "Next.js", "Styled"].map(tag => (
                       <span key={tag} style={{ fontSize: 12, padding: "4px 8px", borderRadius: 100, background: theme.colors.surface, color: theme.colors.textSecondary }}>{tag}</span>
                     ))}
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: "1.25rem" }}>Primary Card</h3>
                  <p style={{ fontSize: "0.875rem", color: theme.colors.textSecondary, marginBottom: theme.spacing.md, lineHeight: 1.5 }}>
                    Deskripsi singkat komponen card.
                  </p>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <button style={{ 
                        background: theme.colors.primary, 
                        color: theme.colors.textInverted, 
                        border: "none", 
                        padding: "10px 20px", 
                        borderRadius: theme.radius.md, 
                        fontWeight: 600,
                        cursor: "pointer"
                      }}>
                        Detail
                      </button>
                      <button style={{ 
                        background: "transparent", 
                        color: theme.colors.textPrimary, 
                        border: "none", 
                        padding: "10px 20px", 
                        fontWeight: 600,
                        cursor: "pointer"
                      }}>
                        Preview
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Supported Stack Section - Full Width */}
      <section style={{ 
          textAlign: "center", 
          padding: "80px 24px",
          background: "#1f2937", // Gray constant
          color: "#ffffff",
          width: "100%"
        }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h3 style={{ opacity: 0.7, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "1px", marginBottom: theme.spacing.xl, color: "#9ca3af" }}>Powered By Top Technologies</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: 60, flexWrap: "wrap", color: "#ffffff" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <RiNextjsLine size={48} color={theme.colors.gold} />
              <span style={{ fontWeight: 600 }}>Next.js</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <RiReactjsLine size={48} color={theme.colors.gold} />
              <span style={{ fontWeight: 600 }}>React</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <RiCodeBoxLine size={48} color={theme.colors.gold} />
              <span style={{ fontWeight: 600 }}>Styled Components</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
