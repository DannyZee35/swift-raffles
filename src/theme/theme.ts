import { extendTheme } from "@chakra-ui/react";

import { buttonTheme } from "./components/button";
import { inputTheme } from "./components/input";
import { selectTheme } from "./components/select";
import { switchTheme } from "./components/switch";
import { tagTheme } from "./components/tag";

const themeConfig = {
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  fontSizes: {
    xs: "10px",
    sm: "12px",
    md: "13px",
    lg: "14px",
    xl: "16px",
    "2xl": "18px",
    "3xl": "20px",
    "4xl": "24px",
    "5xl": "28px",
    "6xl": "32px",
  },
  colors: {
    brand: {
      bg: {
        100: "#03001B",
        200: "#120F2A",
        300: "#1D1A35",
        500: "#29273F",
      },
      font: {
        100: "#6A6E81",
        200: "#7C829F",
        300: "#616578",
        purple: "#A992FF",
      },
      border: {
        100: "#2D2C3F",
      },
      green: {
        base: "#8BDA97",
      },
    },
  },
  radii: {
    none: "0",
    xs: "2px",
    sm: "4px",
    md: "5px",
    lg: "10px",
  },
  breakpoints: {
    md: "1740px",
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        bg: "brand.bg.100",
        color: "white",
        fontWeight: "bold",
      },
    },
  },
  components: {
    Button: buttonTheme,
    Tag: tagTheme,
    Input: inputTheme,
    Switch: switchTheme,
    Select: selectTheme,
  },
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(themeConfig);
export default theme;
