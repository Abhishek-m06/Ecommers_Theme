import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0,0,0,0.08); }
  70% { box-shadow: 0 0 0 8px rgba(0,0,0,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
`;

const Btn = styled.button`
  background: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonColor};
  border: none; border-radius: 8px;
  padding: 0.7em 1.5em; font-size: 1.1em;
  cursor: pointer; font-weight: 600; margin: 1em 0 0.6em 0;
  transition: background 0.3s, color 0.3s, transform 0.18s;
  animation: ${pulse} 1.5s infinite;
  box-shadow: 0 2px 14px #2221;
  &:hover { transform: translateY(-3px) scale(1.05); }
`;

export default function AnimatedButton({ children }: { children: React.ReactNode }) {
  return <Btn>{children}</Btn>;
}
