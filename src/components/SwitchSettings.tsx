import { Flex, FlexProps, Switch, Text } from "@chakra-ui/react";
import { ChangeEvent } from "react";

export default function SwitchSettings({
  name,
  value,
  onChange,
  ...props
}: {
  name: string;
  value?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & FlexProps) {
  const id = name.replace(/\s/g, "-").toLowerCase() + "-switch";
  return (
    <Flex
      bg="brand.bg.200"
      w="100%"
      h="36px"
      border="1px"
      borderColor={"brand.border.100"}
      borderRadius="5px"
      px="12px"
      justify="space-between"
      {...props}
    >
      <Text fontSize="12px" color="brand.font.100" my="auto">
        <label htmlFor={id}>{name}</label>
      </Text>
      <Switch
        id={id}
        my="auto"
        variant="brand"
        checked={value}
        onChange={onChange}
      />
    </Flex>
  );
}
