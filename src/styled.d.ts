import 'styled-components';

// 1. Define your custom theme type:
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    background: string;
    color: string;
    fontFamily: string;
    buttonBg: string;
    buttonColor: string;
    cardBg: string;
    cardShadow: string;
    // Optional properties (only exist in some themes)
    cardBorder?: string;
    sidebarBg?: string;
    hoverBg?: string;
  }
}
