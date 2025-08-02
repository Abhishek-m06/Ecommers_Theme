import React, { useState } from "react";
import styled from "styled-components";
import ThemeDropdown from "./ThemeDropdown";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { Menu, X } from "lucide-react"; // for hamburger icons

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.cardBg || "#fff"};
  color: ${({ theme }) => theme.color || "#000"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 99;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-weight: 700;
  margin-left: 45px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color};
  text-decoration: none;
`;

const Nav = styled.nav<{ open?: boolean }>`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.cardBg};
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 1rem 0;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-200%)")};
    transition: transform 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    font-weight: 500;

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.buttonBg};
    }
  }
`;

const RightBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const { themeName } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrap>
      <Container>
        <Logo to="/">🧱 ECommerce App</Logo>

        <MenuToggle onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuToggle>

        <Nav open={menuOpen}>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
          <ThemeDropdown />
        </Nav>

        
      </Container>
    </HeaderWrap>
  );
}

export default Header;
