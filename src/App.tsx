import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from "./themes/GlobalStyles";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const ThemedApp = () => {
  const { theme, themeName } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{
        minHeight: "100vh",
        transition: "background 0.4s, color 0.4s",
      }}>
        <Header />
        <main 
          key={themeName} // For fade animation per theme change
          style={{
            transition: "opacity 0.5s",
            animation: "fadeIn 0.5s"
          }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </StyledThemeProvider>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemedApp />
      </Router>
    </ThemeProvider>
  );
}
