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

const FormContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  border: 1px solid #ccc;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff;
  color: ${({ theme }) => theme.color};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-height: 120px;
  background: #fff;
  color: ${({ theme }) => theme.color};
  font-size: 1rem;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const SubmitWrapper = styled.div`
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export default function Contact() {
  const { products, loading } = useFetchProducts();
  const { themeName } = useTheme();
  const sidebar = themeName === "theme2";

  const dummyText = {
    theme1: "Contact us for support, business collaboration, or to provide feedback.",
    theme2: "Reach out via dark mode! Our team is here for you, day or night.",
    theme3: "Say hello! Send us a message and let's make the web more colorful together 🎈",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted successfully!");
  };

  return (
    <Wrapper>
      {sidebar && <Sidebar />}
      <PageContainer>
        <InnerContent sidebar={sidebar}>
          <PageTitle>Contact</PageTitle>
          <Description>{dummyText[themeName]}</Description>

          <FormContainer>
            <Form onSubmit={handleSubmit}>
              <Input type="text" placeholder="First Name" required />
              <Input type="text" placeholder="Last Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" />
              <TextArea placeholder="Your Message" required />
              <SubmitWrapper>
                <AnimatedButton>Send Message</AnimatedButton>
              </SubmitWrapper>
            </Form>
          </FormContainer>

          {/* {loading ? (
            <p>Loading...</p>
          ) : (
            <CardGrid>
              {products.slice(12, 16).map((p) => (
                <Card key={p.id} title={p.title} image={p.image} price={p.price} />
              ))}
            </CardGrid>
          )} */}
        </InnerContent>
      </PageContainer>
    </Wrapper>
  );
}
