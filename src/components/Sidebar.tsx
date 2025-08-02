import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const SidebarWrap = styled.aside<{ isOpen: boolean }>`
  width: 200px;
  min-height: 100vh;
  background: ${({ theme }) => theme.sidebarBg};
  color: #fff;
  padding-top: 80px;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-220px")};
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  transition: left 0.3s ease-in-out;
  box-shadow: 2px 0 16px rgba(0, 0, 0, 0.07);

  @media (min-width: 701px) {
    left: 0;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;

  @media (min-width: 701px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 101;
  background: none;
  border: none;
  color: ${({ theme }) => theme.color};
  cursor: pointer;

  @media (min-width: 701px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  width: 80%;
  text-align: center;

  &.active {
    background: ${({ theme }) => theme.buttonBg};
  }

  &:hover {
    background: ${({ theme }) => theme.hoverBg || "#ffffff22"};
  }
`;

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false); // close sidebar on mobile
  };

  return (
    <>
      <ToggleButton onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle Sidebar">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </ToggleButton>

      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <SidebarWrap isOpen={isOpen}>
        <div style={{ fontWeight: 600, fontSize: "1.3rem", marginBottom: "2rem" }}>
          My Sidebar
        </div>
        {menuItems.map((item) => (
          <StyledLink
            key={item.to}
            to={item.to}
            className={location.pathname === item.to ? "active" : ""}
            onClick={handleLinkClick}
          >
            {item.label}
          </StyledLink>
        ))}
      </SidebarWrap>
    </>
  );
}
