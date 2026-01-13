"use client";
import styled, { keyframes } from "styled-components";
import React from 'react';

const HeaderBase = styled.header`
  width: 100%;
  height: 72px;
  background: #bbc4bd;
  color: #0f172a;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  font-family: "Nunito", sans-serif;
  transition: all 0.3s ease;
`;

const Logo = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 1.3rem; 
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.6rem;
  font-weight: 600;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: all 0.25s ease;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 2px;
    background: currentColor;
    transition: width 0.25s ease;
  }

  a:hover::after {
    width: 100%;
  }
`;

const SearchBox = styled.input`
  padding: 0.55rem 1rem;
  border-radius: 8px;
  border: 2px solid currentColor;
  background: #fff;
  color: inherit;
  width: 180px;
  outline: none;
  transition: all 0.25s ease;
`;

const Profile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0f172a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-family: "Nunito", sans-serif;
`;

// Animated Variant
const starFloat = keyframes`
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-500px) translateX(40px);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px) translateX(0);
    opacity: 0.6;
  }
`;

const AnimatedWrapper = styled.div`
  width: 100%;
  height: 360px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background: radial-gradient(
    circle at 20% 20%,
    #21405d,
    #0a1a2f 40%,
    #040b14 80%
  );
  color: #c7e7ff;
  font-family: "Nunito", sans-serif;
`;

// =======================
// Star helpers (HARUS DI ATAS)
// =======================
const seededRandom = (seed) => {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generateStars = (count, color, seed = 1) => {
  let gradients = [];
  for (let i = 0; i < count; i++) {
    const x = seededRandom(seed + i * 13) * 2000;
    const y = seededRandom(seed + i * 29) * 2000;
    const size = seededRandom(seed + i * 7) * 2 + 1;

    gradients.push(
      `radial-gradient(${size}px ${size}px at ${x}px ${y}px, ${color}, transparent)`
    );
  }
  return gradients.join(", ");
};

// =======================
// Static star map (AMAN SSR)
// =======================
const STAR_MAP = {
  far: generateStars(200, "rgba(255,255,255,0.9)", 1),
  mid: generateStars(140, "rgba(160,210,255,0.7)", 42),
  near: generateStars(90, "rgba(200,240,255,0.6)", 99),
};

const StarLayer = styled.div`
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  pointer-events: none;

  background-image: ${(p) => p.$bg};
  
  animation: ${starFloat} ${(p) => p.$speed}s linear infinite;
  opacity: ${(p) => p.$opacity};
  filter: blur(${(p) => p.$blur || 0}px);
`;

const AnimatedHeaderContainer = styled.header`
  width: 100%;
  height: 72px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 10;
`;

const Hero = styled.div`
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 2.6rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    color: #d8f3ff;
    text-shadow: 0 0 12px rgba(160, 220, 255, 0.45);
  }

  p {
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const Header = React.forwardRef(({ 
  variant = "primary",
  links = [],
  logoText,
  className,
  ...rest
}, ref) => {
  const defaultLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" }
  ];

  const resolvedLinks = links.length > 0 ? links : defaultLinks;
  const resolvedLogo = logoText || (variant === "primary" ? "Primary" : variant === "secondary" ? "Secondary" : "Outline");

  const renderNav = () => (
    <Nav>
      {resolvedLinks.map(link => (
        <a key={link.label} href={link.href}>{link.label}</a>
      ))}
    </Nav>
  );

  if (variant === "secondary") {
    return (
      <HeaderBase ref={ref} className={className} {...rest}>
        <Logo>{resolvedLogo}</Logo>
        {renderNav()}
        <Profile>U</Profile>
      </HeaderBase>
    );
  }

  if (variant === "outline") {
    return (
      <HeaderBase ref={ref} className={className} {...rest}>
        <Logo>{resolvedLogo}</Logo>
        {renderNav()}
      </HeaderBase>
    );
  }

  if (variant === "animated") {
    return (
      <AnimatedWrapper ref={ref} className={className} {...rest}>
        <StarLayer $bg={STAR_MAP.far} $speed={90} $opacity={0.25} $blur={1} />
        <StarLayer $bg={STAR_MAP.mid} $speed={55} $opacity={0.4} />
        <StarLayer $bg={STAR_MAP.near} $speed={28} $opacity={0.65} />

        <AnimatedHeaderContainer>
          <Logo style={{ color: "#d8f3ff" }}>Animated</Logo>
          {renderNav()}
        </AnimatedHeaderContainer>

        <Hero>
          <h1>Explore the Cosmos</h1>
          <p>Dive into an infinite universe of creativity.</p>
        </Hero>
      </AnimatedWrapper>
    );
  }

  return (
    <HeaderBase ref={ref} className={className} {...rest}>
      <Logo>{resolvedLogo}</Logo>
      {renderNav()}
      <SearchBox placeholder="Search..." />
    </HeaderBase>
  );
});

Header.displayName = "Header";

export { Header };
export default Header;
