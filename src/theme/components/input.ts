import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const brandVariant = defineStyle({
  field: {
    bg: "brand.bg.200",
    textColor: "brand.font.100",
    fontSize: "12px",
    fontWeight: "semibold",
    border: "1px solid",
    h: "36px",
    borderColor: "brand.border.100",
    _placeholder: {
      color: "brand.font.100",
      fontSize: "12px",
      fontWeight: "semibold",
    },
    // style background of the input
  },
  addon: {
    bg: "brand.bg.200",
    color: "brand.font.100",
    border: "1px solid",
    borderColor: "brand.border.100",
  },
});

export const inputTheme = defineMultiStyleConfig({
  variants: { brand: brandVariant },
});
