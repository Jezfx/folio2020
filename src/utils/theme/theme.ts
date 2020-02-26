import * as Types from "./theme.types";

export const fontSizes: Types.FontSizes = {
  small: 13,
  base: 16,
  medium: 20,
  large: 22,
  xLarge: 29
};

export const target = {
  ie: `(-ms-high-contrast: none), (-ms-high-contrast: active)`
};

export const space = [0, 10, 20, 30, 40, 50, 60, 70, 80];

export const themeBreakpoints = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xLarge: "1200px",
  xxLarge: "1500px",
  xxxLarge: "1800px"
};

export const breakpoints: Types.Breakpoints = {
  ...themeBreakpoints,
  mobileMenu: "895px"
};

export const getEM = (pixels: number): string => {
  const point = (pixels * 3) / 4;

  return `${point / 12}em;`;
};

export const getCurrentBreakpoint = (innerWidth: number): string => {
  const getIndex = Object.values(themeBreakpoints).findIndex(
    breakpoint =>
      Math.round(parseInt(getEM(innerWidth).replace("em", ""))) <
      parseInt(getEM(parseInt(breakpoint)).replace("em", ""))
  );

  return getIndex < 0
    ? Object.keys(themeBreakpoints)[Object.keys(themeBreakpoints).length - 1]
    : Object.keys(themeBreakpoints)[getIndex];
};

export const widths: Types.Widths = {
  container: "1124px",
  gutter: "20px"
};

export const colors = {
  brandDark: "#000",
  brandLight: "#fff",
  background: "#000",
  boulder: "#797979",
  clearDay: "#E6FFFB",
  corduroy: "#617773",
  foam: "#D4FDF7"
};

export const fonts = {
  body:
    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  heading: "Georgia, serif",
  monospace: "Menlo, monospace"
};

export default {
  space,
  colors,
  fonts,
  fontSizes: Object.values(fontSizes),
  breakpoints: Object.values(themeBreakpoints),
  text: {
    paragon: {
      fontSize: [2, 3],
      letterSpacing: "0.67px",
      lineHeight: "57px",
      fontWeight: "bold",
      transition: "font-size 0.2s ease"
    },
    greatPrimer: {
      fontSize: [4, 3],
      letterSpacing: "0.73px",
      lineHeight: "36px",
      fontWeight: "normal",
      transition: "font-size 0.2s ease"
    },
    bodyCopy: {
      fontSize: [2, 1],
      letterSpacing: "0.53px",
      lineHeight: "32px",
      fontWeight: "normal",
      transition: "font-size 0.2s ease"
    },
    minion: {
      fontSize: [1, 0],
      letterSpacing: "2.65px",
      lineHeight: "29px",
      fontWeight: "bold",
      textTransform: "uppercase",
      transition: "font-size 0.2s ease"
    }
  },
  styles: {
    root: {
      color: "boulder",
      fontFamily: "body"
    }
  }
};
