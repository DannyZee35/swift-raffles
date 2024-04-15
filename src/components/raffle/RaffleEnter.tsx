import {
  Box,
  Button,
  Flex,
  FlexProps,
  Select,
  Spacer,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

import StyledBox from "../StyledBox";

const reqBoxStyles: FlexProps = {
  border: "1px dashed",
  borderColor: "brand.border.100",
  w: "100%",

  p: "20px",
  borderRadius: "5px",
  className: "justify-between block lg:flex space-y-3 lg:space-y-0 ",
};

const reqSubTStyles: TextProps = {
  fontWeight: "semibold",
  fontSize: "12px",
  color: "brand.font.200",
};

export default function RaffleEnter() {
  return (
    <StyledBox>
      <Text color="brand.font.200">COMPLETE TASKS</Text>
      <Flex justify="space-between">
        <Text fontSize="20px">Enter Raffle</Text>
        <Box
          bg={"brand.bg.300"}
          border={"1px"}
          borderColor={"brand.border.100"}
          p="8px"
          my="auto"
          borderRadius="5px"
        >
          <Text fontSize="12px" fontWeight="semibold">
            1/3 fullfilled
          </Text>
        </Box>
      </Flex>
      <Tag color="#4D9EFA" bg="#4D9EFA20" my="15px">
        <TagLeftIcon boxSize="13px" as={FaTicketAlt} />
        <TagLabel>1. Wallet </TagLabel>
      </Tag>
      <Box {...reqBoxStyles}>
        <Box>
          <Text>Select Wallet</Text>
          <Text {...reqSubTStyles}>Select one wallet to enter</Text>
        </Box>
        <Select placeholder="Select option" w="40%">
          <option value="option1">Option 1</option>
        </Select>
      </Box>
      <Tag color="#4D9EFA" bg="#4D9EFA20" my="15px">
        <TagLeftIcon boxSize="13px" as={FaTicketAlt} />
        <TagLabel>2. Discord </TagLabel>
      </Tag>
      <Box {...reqBoxStyles}>
        <Box>
          <Text>Connect Discord</Text>
          <Text {...reqSubTStyles}>Connect your discord account</Text>
        </Box>
        <Flex>
          <Flex
            bg={"brand.bg.300"}
            border={"1px"}
            borderColor={"brand.border.100"}
            w="125px"
            p="11px"
            my="auto"
            mr="12px"
            borderRadius="5px"
          >
            <Text fontWeight="semibold" fontSize="12px" color="brand.font.200">
              Not connected
            </Text>
            <Spacer />

            <Box
              boxSize="10px"
              borderRadius="full"
              bg="#FF7C7C"
              my="auto"
            ></Box>
          </Flex>
          <Button my="auto" variant="brand-blue">
            Connect
          </Button>
        </Flex>
      </Box>
      <Tag color="#4D9EFA" bg="#4D9EFA20" my="15px">
        <TagLeftIcon boxSize="13px" as={FaTicketAlt} />
        <TagLabel>3. Requirements </TagLabel>
      </Tag>

      <Box {...reqBoxStyles}>
        <Box>
          <Text>Join discord</Text>
          <Text {...reqSubTStyles}>Join discord and get member role</Text>
        </Box>
        <Button variant="brand-purple">Join Discord</Button>
      </Box>
    </StyledBox>
  );
}
