import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props: any) => props.theme.background};
    color: ${(props: any) => props.theme.color};
    font-family: ${(props: any) => props.theme.fontFamily};
    transition: background 0.4s, color 0.4s, font-family 0.4s;
    margin: 0;
    padding: 0;
  }
`;
export default GlobalStyles;
