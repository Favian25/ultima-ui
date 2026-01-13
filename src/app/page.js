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

// ... imports ...
import { useThemeContext } from "./Provider"; 

// ... StyledButton ...

const PreviewGrid = styled.div`
  background: ${props => props.theme.mode === 'dark' ? props.theme.colors.surface : '#fff'};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.radius.lg};
  padding: ${props => props.theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`;

export default function LandingPage() {
  const theme = useTheme();
  const { language } = useThemeContext();

  const t = {
    titleStart: language === 'id' ? "Bangun Lebih Cepat dengan" : "Build Faster with",
    subtitle: language === 'id' 
      ? "Sistem desain modern, aksesibel, dan mudah disesuaikan untuk membangun aplikasi web premium."
      : "A modern, accessible, and customizable design system for building premium web applications.",
    getStarted: language === 'id' ? "Mulai Sekarang" : "Get Started",
    previewTitle: language === 'id' ? "Komponen Siap Pakai" : "Ready-to-use Components",
    previewDesc: language === 'id'
      ? "Semua yang kamu butuhkan untuk UI hebat. Dari Tombol hingga Kartu, bergaya lengkap dan aksesibel."
      : "Everything you need to build a great UI. From Buttons to Cards, fully styled and accessible.",
    powerBy: language === 'id' ? "Ditenagai oleh Teknologi Teratas" : "Powered By Top Technologies"
  };

  return (
    <>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: theme.spacing.xl, width: "100%", boxSizing: "border-box" }}>
        
        {/* Hero Section */}
        <section style={{ textAlign: "center", padding: "80px 0 60px" }}>
          <h1 style={{ 
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.02em", 
            marginBottom: theme.spacing.md,
            color: theme.colors.textPrimary,
            marginTop: 64, 
          }}>
            {t.titleStart} <span style={{ color: theme.colors.gold }}>Ultima UI</span>
          </h1>
          <p style={{ 
            fontSize: theme.typography.fontSize.xl, 
            color: theme.colors.textSecondary, 
            maxWidth: 600, 
            margin: "0 auto 40px", 
            lineHeight: 1.6 
          }}>
            {t.subtitle}
          </p>
          <div style={{ display: "flex", gap: theme.spacing.md, justifyContent: "center" }}>
            <StyledButton href="/docs">
              {t.getStarted} <FiArrowRight />
            </StyledButton>
          </div>
        </section>

        {/* Component Preview Section */}
        <section style={{ margin: "60px 0" }}>
          <PreviewGrid>
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
              <h2 style={{ fontSize: "2rem", margin: "10px 0 20px" }}>{t.previewTitle}</h2>
              <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.lg }}>
                {t.previewDesc}
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

            <div style={{ display: "flex", justifyContent: "center", width: '100%' }}>
              {/* Preview Card */}
              <div style={{ 
                width: "100%",
                maxWidth: 340,
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
          </PreviewGrid>
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
          <h3 style={{ opacity: 0.7, textTransform: "uppercase", fontSize: "0.875rem", letterSpacing: "1px", marginBottom: theme.spacing.xl, color: "#9ca3af" }}>{t.powerBy}</h3>
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
