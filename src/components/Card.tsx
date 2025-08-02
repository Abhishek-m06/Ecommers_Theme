import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.cardShadow};
  padding: 1rem;
  transition: transform 0.15s, box-shadow 0.2s;
  display: flex; flex-direction: column;
  border: ${({ theme }) => theme.cardBorder || 'none'};
  &:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 6px 36px #0001; }
  margin-bottom: 1.2rem;
`;

const CardImg = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
  max-height: 150px;
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-size: 1.12rem; font-weight: 700;
  margin: 0.2rem 0;
`;

const CardPrice = styled.span`
  color: ${({ theme }) => theme.buttonBg}; font-weight: 600;
`;

export default function Card({ title, image, price }: { title: string; image: string; price: number; }) {
  return (
    <CardWrap>
      <CardImg src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardPrice>${price}</CardPrice>
    </CardWrap>
  );
}
