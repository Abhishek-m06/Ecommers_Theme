import React, { createContext, useContext, useEffect, useState } from "react";
import { theme1 } from "../themes/theme1";
import { theme2 } from "../themes/theme2";
import { theme3 } from "../themes/theme3";

export type ThemeOption = 'theme1' | 'theme2' | 'theme3';

export const themes = {
  theme1, theme2, theme3,
};

interface ThemeContextProps {
  theme: typeof theme1;
  setThemeName: (name: ThemeOption) => void;
  themeName: ThemeOption;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getInitialTheme = (): ThemeOption => {
    const saved = localStorage.getItem("app_theme");
    if (saved === "theme1" || saved === "theme2" || saved === "theme3") {
      return saved as ThemeOption;
    }
    return "theme1";
  };

  const [themeName, setThemeNameState] = React.useState<ThemeOption>(getInitialTheme);

  React.useEffect(() => {
    localStorage.setItem("app_theme", themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        theme: themes[themeName],
        setThemeName: setThemeNameState,
        themeName,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}


export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
