import React from "react";
import styled from "styled-components";
import { useTheme, themes, ThemeOption } from "../context/ThemeContext";

const Select = styled.select`
  font-family: inherit; font-size: 1rem; padding: 0.4rem 1rem;
  border-radius: 6px; border: 1px solid #aaa; outline: none;
`;

const themeLabels: Record<ThemeOption, string> = {
  theme1: "Minimal (Light)",
  theme2: "Dark + Sidebar",
  theme3: "Colorful Cards"
};

export default function ThemeDropdown() {
  const { setThemeName, themeName } = useTheme();
  return (
    <Select
      value={themeName}
      onChange={e => setThemeName(e.target.value as ThemeOption)}
      aria-label="Select theme"
    >
      {Object.keys(themes).map(t => (
        <option key={t} value={t}>{themeLabels[t as ThemeOption]}</option>
      ))}
    </Select>
  );
}
