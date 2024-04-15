import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brandPurple = defineStyle({
  color: "#FFFFFF",
  bg: "linear-gradient(135deg, #D899F8 0%, #7E61E7 100%), linear-gradient(135deg, #654AD3 0%, #6A2BEF 100%), #15141C;",
  borderRadius: "5px",
  py: "9px",
  px: "14px",
  fontWeight: "bold",
  fontSize: "13px",
  h: "36px",

  transition: "all 0.2s ease-in-out",
});

const nav = defineStyle({
  color: "brand.font.100",
  fontWeight: "bold",
  fontSize: "13px",

  py: "9px",
  px: "14px",
  _hover: {
    bg: "#FFFFFF09",
    borderRadius: "5px",
  },
  h: "36px",
  transition: "all 0.2s ease-in-out",
});

const brandBlue = defineStyle({
  bg: "linear-gradient(90deg, #6166DC 0%, #9397E8 100%), linear-gradient(135deg, #654AD3 0%, #6A2BEF 100%), linear-gradient(90deg, #6166DC 0%, #9397E8 100%), linear-gradient(135deg, #56A4FF 0%, #0069E4 100%), #15141C;",
  fontWeight: "bold",
  fontSize: "13px",

  py: "9px",
  px: "14px",
  h: "36px",
});

const brand = defineStyle({
  borderRadius: "5px",
  py: "9px",
  px: "14px",
  color: "brand.border.100",
  bg: "brand.bg.300",
  border: "1px solid",
  borderColor: "brand.border.100",
  h: "36px",
});

export const buttonTheme = defineStyleConfig({
  variants: {
    "brand-purple": brandPurple,
    "brand-blue": brandBlue,
    brand,
    nav,
  },
});
