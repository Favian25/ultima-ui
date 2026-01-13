"use client";

import { useTheme } from "styled-components";
import Link from "next/link";
import { useThemeContext } from "../../Provider";

export default function DocsPage() {
  const theme = useTheme();
  const { language } = useThemeContext();

  const t = {
    title: language === 'id' ? 'Pendahuluan' : 'Introduction',
    desc: language === 'id' 
      ? 'Ultima UI adalah sistem desain komprehensif untuk membangun aplikasi web modern. Ultima UI menyediakan set komponen yang aksesibel, dapat digunakan kembali, dan dapat disusun yang membantu Anda membangun antarmuka pengguna yang konsisten lebih cepat.'
      : 'Ultima UI is a comprehensive design system for building modern web applications. It provides a set of accessible, reusable, and composable components that help you build consistent user interfaces faster.',
    featuresTitle: language === 'id' ? 'Fitur Utama' : 'Core Features',
    features: [
      { 
        title: language === 'id' ? "Dapat Ditemakan" : "Themable", 
        desc: language === 'id' ? "Kustomisasi tema bawaan yang mudah digunakan" : "Built-in easy to use theme customization" 
      },
      { 
        title: language === 'id' ? "Aksesibel" : "Accessible", 
        desc: language === 'id' ? "Mengikuti pola WAI-ARIA untuk aksesibilitas" : "Follows WAI-ARIA patterns for accessibility" 
      },
      { 
        title: language === 'id' ? "Modern" : "Modern", 
        desc: language === 'id' ? "Estetika bersih, minimal, dan profesional" : "Clean, minimal, and professional aesthetics" 
      },
      { 
        title: language === 'id' ? "Responsif" : "Responsive", 
        desc: language === 'id' ? "Pendekatan mobile-first untuk semua komponen" : "Mobile-first approach for all components" 
      }
    ],
    quickStart: language === 'id' ? 'Mulai Cepat' : 'Quick Start',
    install: language === 'id' ? 'Instal Ultima UI melalui npm untuk memulai proyek Anda.' : 'Install Ultima UI via npm to get started with your project.',
    wrap: language === 'id' ? 'Bungkus aplikasi Anda dengan ThemeProvider untuk mengaktifkan styling.' : 'Wrap your application with the ThemeProvider to enable styling.',
    whatsNext: language === 'id' ? 'Selanjutnya?' : "What's Next?",
    ready: language === 'id' ? 'Siap membangun? Jelajahi perpustakaan komponen kami.' : 'Ready to start building? Explore our library of components.',
    browse: language === 'id' ? 'Lihat Komponen' : 'Browse Components'
  };

  return (
    <div style={{ maxWidth: 1000 }}>
      {/* Introduction */}
      <section style={{ marginBottom: theme.spacing.xxl }}>
        <h1 style={{ fontSize: theme.typography.fontSize.xxl, marginBottom: theme.spacing.lg }}>
          {t.title}
        </h1>
        <p style={{ fontSize: theme.typography.fontSize.lg, color: theme.colors.textSecondary, lineHeight: 1.6 }}>
          {t.desc}
        </p>
      </section>

      {/* Core Features */}
      <section style={{ marginBottom: theme.spacing.xxl }}>
        <h2 style={{ fontSize: theme.typography.fontSize.xl, marginBottom: theme.spacing.md }}>{t.featuresTitle}</h2>
        <ul style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: theme.spacing.md,
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {t.features.map((feature) => (
            <li key={feature.title} style={{ 
              background: theme.colors.surface, 
              padding: theme.spacing.lg, 
              borderRadius: theme.radius.md,
              border: `1px solid ${theme.colors.border}`
            }}>
              <h3 style={{ fontSize: theme.typography.fontSize.lg, marginBottom: theme.spacing.xs, fontWeight: 600 }}>{feature.title}</h3>
              <p style={{ color: theme.colors.textSecondary, margin: 0, fontSize: theme.typography.fontSize.md }}>{feature.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Start */}
      <section style={{ marginBottom: theme.spacing.xxl }}>
        <h2 style={{ fontSize: theme.typography.fontSize.xl, marginBottom: theme.spacing.md }}>{t.quickStart}</h2>
        <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.md }}>
          {t.install}
        </p>
        <div style={{ 
          background: theme.colors.surface, 
          padding: theme.spacing.lg, 
          borderRadius: theme.radius.md,
          fontFamily: theme.typography.fontFamily.mono,
          border: `1px solid ${theme.colors.border}`,
          overflowX: "auto",
          marginBottom: theme.spacing.md
        }}>
          npm install ultima-ui
        </div>
        <p style={{ color: theme.colors.textSecondary }}>
           {t.wrap}
        </p>
      </section>

      {/* Next Step / CTA */}
      <section>
        <h2 style={{ fontSize: theme.typography.fontSize.xl, marginBottom: theme.spacing.md }}>{t.whatsNext}</h2>
        <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.lg }}>
          {t.ready}
        </p>
        <div style={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap' }}>
          <Link href="/button" style={{ 
            background: theme.colors.primary, 
            color: theme.mode === 'dark' ? theme.colors.textInverted : 'white', 
            padding: `${theme.spacing.sm} ${theme.spacing.xl}`, 
            borderRadius: theme.radius.md, 
            textDecoration: 'none',
            fontWeight: 500,
            display: 'inline-block'
          }}>
             {t.browse}
          </Link>
          <a href="https://github.com/favian25/ultima-ui" target="_blank" rel="noopener noreferrer" style={{ 
            background: theme.colors.surface, 
            color: theme.colors.textPrimary, // use textPrimary for text on surface
            padding: `${theme.spacing.sm} ${theme.spacing.xl}`, 
            borderRadius: theme.radius.md, 
            textDecoration: 'none',
            border: `1px solid ${theme.colors.border}`,
            fontWeight: 500,
            display: 'inline-block'
          }}>
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
