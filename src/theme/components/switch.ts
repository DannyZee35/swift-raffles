import { SystemStyleObject } from "@chakra-ui/react";
import { switchAnatomy } from "@chakra-ui/anatomy";

type SwitchStyleConfig = {
  parts: typeof switchAnatomy.keys;
  variants: {
    brand: SystemStyleObject;
  };
};

const brand: SystemStyleObject = {
  track: {
    bg: "brand.bg.500",
  },
  thumb: {
    _checked: {
      bg: "linear-gradient(135deg, #56A4FF 0%, #0069E4 100%), linear-gradient(90deg, #6166DC 0%, #9397E8 100%);",
    },

    bg: "linear-gradient(135deg, #FF5656 0%, #FF7C7C 100%), linear-gradient(90deg, #6166DC 0%, #9397E8 100%);",
  },
};

export const switchTheme: SwitchStyleConfig = {
  parts: switchAnatomy.keys,
  variants: { brand },
};

// Now we can use the new `boxy` variant
