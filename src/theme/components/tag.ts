import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/unbound-method
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    color: "#4D9EFA",
    bg: "#4D9EFA20",
    fontWeight: "bold",
    borderRadius: "3px",
    padding: "3px",
    margin: "3px",
    height: "fit-content",
    // lower opacity
  },
  label: {
    opacity: 1,
    padding: "0px",
    margin: "0px",
  },
});

export const tagTheme = defineMultiStyleConfig({ baseStyle });
