import { Box, Flex, FlexProps, Spacer, Text } from "@chakra-ui/react";

import { useDropzone } from "react-dropzone";
import { AiOutlinePlus } from "react-icons/ai";

export default function BrandDropzone({
  onDrop,
  title,
  ...props
}: {
  onDrop: (acceptedFiles: File[]) => void;
  title: string;
} & FlexProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <Flex
      {...getRootProps()}
      {...props}
      border="1px dashed"
      borderColor="brand.border.100"
      borderRadius="5px"
      p="21px"
      bg={isDragActive ? "brand.bg.200" : ""}
      cursor="pointer"
    
    
    >
      <input {...getInputProps()} />
      <Box>
        <Text fontSize="14px">{title}</Text>
        <Text color="brand.font.100" fontSize="12px">
          Drop or upload a file here
        </Text>
      </Box>
      <Spacer />
      <Box p="10px" borderRadius="5px" backgroundColor="brand.bg.200">
        <AiOutlinePlus />
      </Box>
    </Flex>
  );
}
