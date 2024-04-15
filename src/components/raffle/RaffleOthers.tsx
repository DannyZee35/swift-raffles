import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Image from "next/image";
import StyledBox from "../StyledBox";

export default function RaffleOthers() {
  return (
    <StyledBox>
      <Box className="block space-y-4 lg:flex lg:space-y-0">
        <Box>
          <Text fontSize="16px">Other active raffles</Text>
          <Text fontSize="14px" color="brand.font.200">
            by The meta Discovery Team
          </Text>
          <Text mt="26px" fontSize="20px" color="#8BDA97">
            2 avaliable
          </Text>
        </Box>
        <Spacer />
        <Flex wrap="wrap">
          <StyledBox
            bg="brand.bg.300"
            borderRadius="5px"
            p="13px"
            w="200px"
            h="110px"
            ml="18px"
            mt="8px"
          >
            <Image
              src="https://pbs.twimg.com/profile_images/1570667830810652675/7c4CfPGk_400x400.jpg"
              height={40}
              width={40}
              alt="team pfp"
              style={{
                borderRadius: "5px",
              }}
            />
            <Text mt="10px" fontSize="14px">
              Crocopixi X SwiftAIO
            </Text>
            <Text fontWeight="semibold" fontSize="12px" color="brand.font.200">
              Ends in 45h 23m
            </Text>
          </StyledBox>
          <StyledBox
            bg="brand.bg.300"
            borderRadius="5px"
            p="13px"
            ml="18px"
            w="200px"
            h="110px"
            mt="8px"
          >
            <Image
              src="https://pbs.twimg.com/profile_images/1570667830810652675/7c4CfPGk_400x400.jpg"
              height={40}
              width={40}
              alt="team pfp"
              style={{
                borderRadius: "5px",
              }}
            />
            <Text mt="10px" fontSize="14px">
              Crocopixi X SwiftAIO
            </Text>
            <Text fontWeight="semibold" fontSize="12px" color="brand.font.200">
              Ends in 45h 23m
            </Text>
          </StyledBox>
        </Flex>
      </Box>
    </StyledBox>
  );
}
