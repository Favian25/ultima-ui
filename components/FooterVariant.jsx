"use client";
import styled, { keyframes } from "styled-components";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const darkBg = "#0b1220";
const darkText = "#e6edf5";
const softText = "#9fb0c4";
const accent = "#60a5fa";
const border = "rgba(255,255,255,.08)";
const lightBg = "#ffffff";
const lightInk = "#0f172a";
const lightSub = "#475569";

const Wrapper = styled.footer`
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ maxw }) => maxw || "1200px"};
  margin: 0 auto;
  padding: 36px 24px;
  font-family: "Nunito", sans-serif;
`;

const Brand = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 0.2px;
`;

const Grid = styled.div`
  display: grid;
  gap: 22px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h4`
  font-size: 0.95rem;
  font-weight: 800;
  margin: 0 0 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 8px;
  li a {
    text-decoration: none;
    font-size: 0.92rem;
    transition: 0.2s ease;
  }
`;

const NewsWrap = styled.div`
  display: grid;
  gap: 12px;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  border: 2px solid transparent;
  outline: none;
  transition: 0.2s ease;
`;

const Button = styled.button`
  padding: 0.7rem 1rem;
  border-radius: 10px;
  border: 0;
  font-weight: 800;
  cursor: pointer;
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  & > a,
  & > span {
    inline-size: 36px;
    block-size: 36px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    font-weight: 900;
    text-decoration: none;
    font-size: 1.1rem;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  margin: 22px 0;
`;

// Primary Variant
const PrimaryWrap = styled(Wrapper)`
  background: ${darkBg};
  color: ${darkText};
  ${Inner} {
    padding-top: 44px;
    padding-bottom: 28px;
  }
  ${Title} {
    color: ${darkText};
  }
  ${List} li a {
    color: ${softText};
  }
  ${List} li a:hover {
    color: ${darkText};
    transform: translateX(2px);
  }

  ${NewsWrap} small {
    color: ${softText};
    line-height: 1.5;
    display: block;
  }
  ${Input} {
    background: #0f172a;
    color: ${darkText};
    border-color: ${border};
  }
  ${Input}:focus {
    border-color: ${accent};
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.2);
  }
  ${Button} {
    background: ${accent};
    color: #0b1220;
  }
  ${Social} > a {
    color: ${darkText};
    border: 2px solid ${border};
    background: #0f172a;
  }
  ${Divider} {
    background: ${border};
  }
`;

// Secondary Variant
const SecondaryWrap = styled(Wrapper)`
  background: ${lightBg};
  color: ${lightInk};
  ${Inner} {
    padding-top: 32px;
    padding-bottom: 20px;
  }
  ${Title} {
    color: ${lightInk};
  }
  ${List} li a {
    color: ${lightSub};
  }
  ${List} li a:hover {
    color: ${lightInk};
  }

  ${Input} {
    background: #fff;
    border-color: #e5e7eb;
    color: ${lightInk};
  }
  ${Input}:focus {
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, 0.25);
  }
  ${Button} {
    background: #0ea5e9;
    color: #fff;
  }
  ${Social} > a {
    color: ${lightInk};
    border: 2px solid #e5e7eb;
    background: #fff;
  }
  ${Divider} {
    background: #e5e7eb;
  }
`;

// Outline Variant
const OutlineWrap = styled(Wrapper)`
  background: ${lightBg};
  color: ${lightInk};
  border-top: 2px solid #0f172a;
  ${Inner} {
    padding-top: 18px;
    padding-bottom: 18px;
  }
  a {
    color: ${lightInk};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

// Animated Variant

const holoBreath = keyframes`
  0% { background-color: #0b1220; }
  50% { background-color: #0d1528; }
  100% { background-color: #0b1220; }
`;

const emberRise = keyframes`
  0% { transform: translateY(20px) scale(0.6); opacity: 0; }
  20% { opacity: 0.7; }
  100% { transform: translateY(-60px) scale(1); opacity: 0; }
`;

const scanSweep = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 0.3; }
  100% { transform: translateY(-140%); opacity: 0; }
`;

const AnimatedWrap = styled(Wrapper)`
  background: ${darkBg};
  color: ${darkText};
  position: relative;
  overflow: hidden;

  animation: ${holoBreath} 8s ease-in-out infinite;

  ${Inner} {
    position: relative;
    z-index: 5;
  }

  ${Title} {
    color: ${darkText};
  }
  ${List} li a {
    color: ${softText};
  }
  ${List} li a:hover {
    color: ${darkText};
    transform: translateX(2px);
  }
  ${NewsWrap} small {
    color: ${softText};
  }
  ${Input} {
    background: #0f172a;
    color: ${darkText};
    border-color: ${border};
  }
  ${Input}:focus {
    border-color: ${accent};
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.25);
  }
  ${Button} {
    background: ${accent};
    color: ${darkBg};
  }
  ${Social} > a {
    color: ${darkText};
    border: 2px solid ${border};
    background: #0f172a;
  }
  ${Divider} {
    background: ${border};
  }
`;

const EmberLayer = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;

  span {
    position: absolute;
    width: 3px;
    height: 3px;
    background: ${accent};
    border-radius: 50%;
    opacity: 0;
    animation: ${emberRise} 3s linear infinite;
  }
`;

const Scanline = styled.div`
  pointer-events: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 2px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(120, 200, 255, 0.35),
    transparent
  );

  animation: ${scanSweep} 12s linear infinite;
  z-index: 2;
  opacity: 0.25;
`;

export default function FooterVariant({ variant = "primary", maxWidth = "1200px" }) {
  if (variant === "primary") {
    return (
      <PrimaryWrap>
        <Inner maxw={maxWidth}>
          <Grid>
            <div>
              <Title>Info</Title>
              <List>
                <li><a href="#">Formats</a></li>
                <li><a href="#">Compression</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Status</a></li>
                <li><a href="#">Policy</a></li>
              </List>
            </div>

            <div>
              <Title>Getting Started</Title>
              <List>
                <li><a href="#">Introduction</a></li>
                <li><a href="#">Themes</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Usages</a></li>
                <li><a href="#">Elements</a></li>
                <li><a href="#">Global</a></li>
              </List>
            </div>

            <div>
              <Title>Resources</Title>
              <List>
                <li><a href="#">API</a></li>
                <li><a href="#">Form Validation</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Marketplace</a></li>
                <li><a href="#">Visibility</a></li>
                <li><a href="#">Community</a></li>
              </List>
            </div>

            <div>
              <Title>Newsletter</Title>
              <NewsWrap>
                <small>
                  Subscribe to our newsletter for a weekly dose of news, updates, helpful tips, and exclusive offers.
                </small>
                <InputRow>
                  <Input placeholder="Your email" aria-label="Email address" />
                  <Button type="button">SUBSCRIBE</Button>
                </InputRow>

                <Social aria-label="Social links">
                  <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#" aria-label="GitHub"><FaGithub /></a>
                  <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                </Social>
              </NewsWrap>
            </div>
          </Grid>

          <Divider />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <Brand>Ultima UI</Brand>
            <small style={{ color: softText }}>© {new Date().getFullYear()} Ultima UI. All rights reserved.</small>
          </div>
        </Inner>
      </PrimaryWrap>
    );
  }

  if (variant === "secondary") {
    return (
      <SecondaryWrap>
        <Inner maxw={maxWidth}>
          <div style={{ display: "grid", gap: 22, gridTemplateColumns: "2fr 2fr 1.5fr" }}>
            <div>
              <Brand>Ultima UI</Brand>
              <p style={{ margin: "8px 0 0", color: lightSub, lineHeight: 1.6 }}>
                Komponen siap pakai untuk Next.js + styled-components, berpadu BEM + Sass.
              </p>

              <Social style={{ marginTop: 12 }}>
                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" aria-label="GitHub"><FaGithub /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
              </Social>
            </div>

            <div>
              <Title>Newsletter</Title>
              <NewsWrap>
                <InputRow>
                  <Input placeholder="Email kamu" />
                  <Button type="button">Daftar</Button>
                </InputRow>
                <small style={{ color: lightSub }}>
                  Dengan mendaftar, kamu menyetujui kebijakan privasi kami.
                </small>
              </NewsWrap>
            </div>

            <div>
              <Title>Links</Title>
              <List>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Changelog</a></li>
                <li><a href="#">Components</a></li>
                <li><a href="#">Figma Kit</a></li>
              </List>
            </div>
          </div>

          <Divider />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <small style={{ color: lightSub }}>© {new Date().getFullYear()} Ultima UI</small>
            <div style={{ display: "flex", gap: 14 }}>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Status</a>
            </div>
          </div>
        </Inner>
      </SecondaryWrap>
    );
  }

  if (variant === "animated") {
  return (
    <AnimatedWrap>
      <EmberLayer>
        {Array.from({ length: 38 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 40}px`,
              animationDuration: `${5 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.4 + Math.random() * 0.4,
              background: [
                "#7dd3fc",
                "#5eead4",
                "#a5f3fc"
              ][Math.floor(Math.random() * 3)]
            }}
          />
        ))}
      </EmberLayer>

      <Scanline />

      <Inner maxw={maxWidth}>
        <Grid>
          <div>
            <Title>Info</Title>
            <List>
              <li><a href="#">Formats</a></li>
              <li><a href="#">Compression</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
            </List>
          </div>

          <div>
            <Title>Resources</Title>
            <List>
              <li><a href="#">API</a></li>
              <li><a href="#">Validation</a></li>
              <li><a href="#">Marketplace</a></li>
            </List>
          </div>

          <div>
            <Title>Newsletter</Title>
            <NewsWrap>
              <small>Stay updated with the latest releases.</small>
              <InputRow>
                <Input placeholder="Email..." />
                <Button>Join</Button>
              </InputRow>
            </NewsWrap>
          </div>

          <div>
            <Title>Social</Title>
            <Social>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaGithub /></a>
            </Social>
          </div>
        </Grid>
      </Inner>
    </AnimatedWrap>
  );
}

  return (
    <OutlineWrap>
      <Inner maxw={maxWidth}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <Brand>Ultima UI</Brand>
          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#">Docs</a>
            <a href="#">Components</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </nav>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 8,
              minWidth: 280,
            }}
          >
            <input
              aria-label="Email"
              placeholder="Email"
              style={{
                padding: "10px 12px",
                borderRadius: 10,
                border: "2px solid #0f172a",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px 14px",
                borderRadius: 10,
                border: "2px solid #0f172a",
                background: "transparent",
                fontWeight: 800,
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <small>© {new Date().getFullYear()} Ultima UI</small>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </Inner>
    </OutlineWrap>
  );
}
