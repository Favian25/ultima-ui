"use client";
import styled, { keyframes, css } from "styled-components";
import React from 'react';

const hologramShift = keyframes`
  0% { background-position: 0% 50%; }
  100% { background-position: -200% 50%; }
`;

const BaseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.9rem 1.6rem;
  border-radius: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.3px;
  cursor: pointer;
  border: none;
  transition: all 0.25s ease;
  transform-origin: center;
  text-decoration: none; /* In case it's used as 'a' tag */

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  ${props => props.$fullWidth && css`
    width: 100%;
    display: flex;
  `}
`;

//  Primary Variant
const PrimaryButton = styled(BaseButton)`
  color: #fff;
  background: linear-gradient(135deg, #14203d 0%, #3b82f6 100%);
  box-shadow: 0 6px 16px rgba(20, 32, 61, 0.28);

  &:hover:not(:disabled) { 
    background: linear-gradient(135deg, #1b2a52 0%, #60a5fa 100%); 
    transform: translateY(-3px) scale(1.02); 
  }
  &:active:not(:disabled) { 
    transform: translateY(-1px) scale(0.99); 
  }
`;

//  Secondary Variant
const SecondaryButton = styled(BaseButton)`
  color: #14203d;
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7);

  &:hover:not(:disabled) { 
    background: #e7e9ee; 
    border-color: #d6dae0; 
    transform: translateY(-2px); 
  }
  &:active:not(:disabled) { 
    transform: translateY(-1px); 
  }
`;

//  Outline Variant
const OutlineButton = styled(BaseButton)`
  background: transparent;
  color: #14203d;
  border: 2px solid #14203d;

  &:hover:not(:disabled) { 
    color: #fff; 
    background: #14203d; 
    transform: translateY(-2px); 
  }
  &:active:not(:disabled) { 
    transform: translateY(-1px); 
  }
`;

//  Animated Variant
const AnimatedButton = styled(BaseButton)`
  color: #fff;
  background: linear-gradient(
    120deg,
    #00eaff,
    #1f6fff,
    #0a1a2f,
    #4fffe6,
    #00eaff
  );
  background-size: 400% 400%;
  animation: ${hologramShift} 4s linear infinite;

  border: 2px solid rgba(255, 255, 255, 0.35);
  box-shadow: 0 0 12px rgba(90, 180, 255, 0.55);

  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 0 18px rgba(110, 200, 255, 0.75);
  }

  &:active:not(:disabled) {
    transform: translateY(-1px) scale(0.98);
  }
`;

const Button = React.forwardRef(({ 
  variant = "primary", 
  fullWidth = false, 
  children, 
  className,
  as,
  ...rest 
}, ref) => {
  let ButtonType = PrimaryButton;
  if (variant === "secondary") ButtonType = SecondaryButton;
  if (variant === "outline") ButtonType = OutlineButton;
  if (variant === "animated") ButtonType = AnimatedButton;

  return (
    <ButtonType
      as={as}
      ref={ref}
      $fullWidth={fullWidth}
      className={className}
      aria-label={rest['aria-label'] || (typeof children === 'string' ? children : 'button')}
      {...rest}
    >
      {children}
    </ButtonType>
  );
});

Button.displayName = "Button";

export { Button };
export default Button;
