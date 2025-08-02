import React from "react";
import styled from "styled-components";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Card from "../components/Card";
import AnimatedButton from "../components/AnimatedButton";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
`;

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const InnerContent = styled.div<{ sidebar: boolean }>`
  width: 100%;
  max-width: 1200px;
  margin-left: ${({ sidebar }) => (sidebar ? "150px" : "0")};
  transition: margin 0.4s;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const PageTitle = styled.h1`
  margin-top: 90px;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color};

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-top: 120px;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.color};
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export default function Home() {
  const { products, loading } = useFetchProducts();
  const { themeName } = useTheme();
  const sidebar = themeName === "theme2";

  const dummyText = {
    theme1: "Welcome to a minimalist light theme - clean, clear, and distraction free.",
    theme2: "This is the dark mode with a handy sidebar for quick menus!",
    theme3: "Brighten your day with a playful, colorful theme and fun cards. 🎉"
  };

  return (
    <Wrapper>
      {sidebar && <Sidebar />}
      <PageContainer>
        <InnerContent sidebar={sidebar}>
          <PageTitle>Home</PageTitle>
          <Description>{dummyText[themeName]}</Description>
          <AnimatedButton>Animated CTA</AnimatedButton>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <CardGrid>
              {products.map((p) => (
                <Card key={p.id} title={p.title} image={p.image} price={p.price} />
              ))}
            </CardGrid>
          )}
        </InnerContent>
      </PageContainer>
    </Wrapper>
  );
}
