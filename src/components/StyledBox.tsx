import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

export default function StyledBox({
  children,
  ...props
}: {
  children: React.ReactNode;
} & BoxProps) {
  return (
    <Box
      bg="brand.bg.200"
      border={"1px"}
      borderColor={"brand.border.100"}
      borderRadius="10px"
      p="25px"
      {...props}
    >
      {children}
    </Box>
  );
}
