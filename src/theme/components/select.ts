import { SystemStyleObject } from "@chakra-ui/react";
import { selectAnatomy } from "@chakra-ui/anatomy";

type SelectStyleConfig = {
  parts: typeof selectAnatomy.keys;
  variants: {
    brand: SystemStyleObject;
  };
};

const brand: SystemStyleObject = {
  field: {
    h: "36px",
    bg: "brand.bg.200",
    color: "brand.font.100",
    fontSize: "12px",
    border: "1px solid",
    borderColor: "brand.border.100",
  },
};

export const selectTheme: SelectStyleConfig = {
  parts: selectAnatomy.keys,
  variants: { brand },
};

// Now we can use the new `brandPrimary` variant
