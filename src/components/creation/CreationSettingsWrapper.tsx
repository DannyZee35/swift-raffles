import { Box, Flex, Spacer, Text } from "@chakra-ui/react";

export default function CreationSettingsWrapper({
  children,
  title,
  subtitle,
  addon,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  addon?: React.ReactNode;
}) {
  return (
    <Box
      border={"1px"}
      borderColor={"brand.border.100"}
      borderRadius="10px"

      w="100%"
    >
      <Flex
        pb="14px"
        mb="14px"      m="25px"
        borderBottom="1px"
        borderColor="brand.border.100"
      >
        <Box>
          <Text fontSize="14px">{title}</Text>
          <Text fontWeight="semibold" fontSize="12px" color="brand.font.100">
            {subtitle}
          </Text>
        </Box>
        <Spacer />
        {addon}
      </Flex>
      {children}
    </Box>
  );
}
