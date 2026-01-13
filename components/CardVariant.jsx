"use client";
import styled, { keyframes } from "styled-components";
import React from 'react';

/* ======================================================
   TOKENS
====================================================== */
const ink = "#0f172a";
const sub = "#475569";
const ring = "rgba(2,132,199,.25)";
const brand = "#14203d";
const surface = "#ffffff";
const soft = "#f1f5f9";

/* ======================================================
   BASE COMPONENTS
====================================================== */
const CardBase = styled.article`
  width: 100%; /* Changed from max-width to 100% for container control */
  max-width: 520px;
  margin: 0 auto;
  border-radius: 16px;
  background: ${surface};
  color: ${ink};
  box-shadow: 0 10px 28px rgba(2, 8, 23, 0.08);
  overflow: hidden;
  transition: 0.25s ease;
  font-family: "Nunito", sans-serif;

  &:focus-within {
    outline: 3px solid ${ring};
    outline-offset: 2px;
  }
`;

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0;
`;

const Desc = styled.p`
  margin: 8px 0 0;
  color: ${sub};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 14px;

  & > a {
    padding: 0.6rem 0.9rem;
    border-radius: 12px;
    border: 0;
    font-weight: 800;
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
  }
`;

const BtnPrimary = styled.a`
  background: ${brand};
  color: #fff;
`;

const BtnGhost = styled.a`
  background: ${soft};
  color: ${ink};
`;

const TagRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  & > span {
    background: ${soft};
    color: ${ink};
    border-radius: 999px;
    padding: 0.25rem 0.6rem;
    font-size: 0.8rem;
    font-weight: 700;
  }
`;

/* ======================================================
   VARIANTS
====================================================== */

/* PRIMARY */
const PrimaryWrap = styled(CardBase)`
  display: grid;
  grid-template-rows: 180px auto;

  .media {
    position: relative;
    overflow: hidden;
  }

  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  &:hover .media img {
    transform: scale(1.05);
  }

  .body {
    padding: 16px 16px 18px;
  }
`;

/* SECONDARY */
const SecondaryWrap = styled(CardBase)`
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 180px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: 180px auto;
  }

  .media {
    position: relative;
    overflow: hidden;
  }

  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .body {
    padding: 18px;
    display: grid;
    align-content: start;
    gap: 10px;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;

/* OUTLINE */
const OutlineWrap = styled(CardBase)`
  background: #fff;
  border: 2px solid ${ink};
  box-shadow: none;

  .media {
    position: relative;
    overflow: hidden;
    height: 180px;
  }

  .media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .body {
    padding: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(2, 8, 23, 0.08);
  }
`;

/* ANIMATED */
const borderAnim = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedWrap = styled.article`
  position: relative;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  border-radius: 16px;
  background: #ffffff;
  color: ${ink};
  box-shadow: 0 10px 28px rgba(2, 8, 23, 0.08);
  overflow: hidden;
  font-family: "Nunito", sans-serif;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 3px;
    background: linear-gradient(90deg, #60a5fa, #facc15, #60a5fa);
    background-size: 300% 300%;
    animation: ${borderAnim} 6s ease-in-out infinite;

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .media {
    padding: 14px;
  }

  .media-inner {
    overflow: hidden;
    height: 180px;
    border-radius: 14px;
  }

  .media-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  .media-inner:hover img {
    transform: scale(1.05);
  }

  .body {
    padding: 16px 18px 18px;
  }
`;

/* ======================================================
   COMPONENT
====================================================== */
const Card = React.forwardRef(({
  variant = "primary",
  title,
  desc,
  image,
  tags = [],
  ctaPrimary,
  ctaGhost,
  className,
  ...rest
}, ref) => {
  const resolvedTitle = title || "Card Title";
  const resolvedDesc = desc;
  const resolvedImage = image;

  const renderMeta = () => (
    <>
      {tags?.length > 0 && (
        <TagRow>
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </TagRow>
      )}

      <div style={{ marginTop: 10 }}>
        <Title>{resolvedTitle}</Title>
        {resolvedDesc && <Desc>{resolvedDesc}</Desc>}
      </div>

      {(ctaPrimary || ctaGhost) && (
        <Actions>
          {ctaPrimary && (
            <BtnPrimary href={ctaPrimary.href}>
              {ctaPrimary.label}
            </BtnPrimary>
          )}
          {ctaGhost && (
            <BtnGhost href={ctaGhost.href}>
              {ctaGhost.label}
            </BtnGhost>
          )}
        </Actions>
      )}
    </>
  );

  if (variant === "secondary") {
    return (
      <SecondaryWrap ref={ref} className={className} {...rest}>
        <div className="media">
          <img src={resolvedImage} alt={resolvedTitle} />
        </div>
        <div className="body">{renderMeta()}</div>
      </SecondaryWrap>
    );
  }

  if (variant === "outline") {
    return (
      <OutlineWrap ref={ref} className={className} {...rest}>
        <div className="media">
          <img src={resolvedImage} alt={resolvedTitle} />
        </div>
        <div className="body">{renderMeta()}</div>
      </OutlineWrap>
    );
  }

  if (variant === "animated") {
    return (
      <AnimatedWrap ref={ref} className={className} {...rest}>
        <div className="media">
          <div className="media-inner">
            <img src={resolvedImage} alt={resolvedTitle} />
          </div>
        </div>
        <div className="body">{renderMeta()}</div>
      </AnimatedWrap>
    );
  }

  /* PRIMARY (DEFAULT) */
  return (
    <PrimaryWrap ref={ref} className={className} {...rest}>
      <div className="media">
        <img src={resolvedImage} alt={resolvedTitle} />
      </div>
      <div className="body">{renderMeta()}</div>
    </PrimaryWrap>
  );
});

Card.displayName = "Card";

export { Card };
export default Card;
