import {
  Flex,
  Tag,
  TagLeftIcon,
  TagLabel,
  Button,
  Link as ChakraLink,
  Box,
  Text,
} from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";

import { BsTwitter, BsFillCaretRightFill } from "react-icons/bs";
import { FaEthereum, FaTicketAlt } from "react-icons/fa";
import StyledBox from "../StyledBox";

export default function RaffleCard() {
  return (
    <StyledBox w="255px" p="10px" position={"relative"}>
      <ChakraLink
        aria-label="twitter"
        bg="white"
        boxSize="27px"
        display="flex"
        direction="column"
        justifyContent="center"
        borderRadius={"4px"}
        as={Box}
        position="absolute"
        top="30px"
        left="30px"
        border={"1px solid #E2E8F0"}
        boxShadow="0 0 8px 3px #00000060"
      >
        <BsTwitter
          color="black"
          style={{
            margin: "auto",
          }}
        />
      </ChakraLink>
      <ChakraLink
        aria-label="twitter"
        bg="white"
        boxSize="27px"
        borderRadius={"4px"}
        display="flex"
        direction="column"
        justifyContent="center"
        as={Box}
        position="absolute"
        top="30px"
        left="69px"
        boxShadow="0 0 8px 3px #00000060"
      >
        <BsTwitter
          color="black"
          style={{
            margin: "auto",
          }}
        />
      </ChakraLink>
      <Image
        alt="pdp"
        src="https://pbs.twimg.com/profile_images/1513990519545896963/jCrEwX9e_400x400.jpg"
        height={42}
        width={42}
        style={{
          borderRadius: "5px",
          position: "absolute",
          top: "30px",
          right: "30px",
          objectFit: "cover",
          width: "42px",
          height: "42px",
          boxShadow: "0 0 8px 3px #00000060",
        }}
      />
      <Image
        alt="banner"
        src="https://pbs.twimg.com/profile_banners/1471084534208815106/1675663236/1500x500"
        width={340}
        height={130}
        style={{
          borderRadius: "5px 5px 0 0",
          objectFit: "cover",
          width: "100%",
          height: "130px",
          border: "1px solid #E2E8F0",
          borderBottom: "none",
          borderColor: "#2D2C3F",
        }}
      ></Image>
      <Flex
        h="35px"
        border="1px solid"
        bg="brand.bg.300"
        borderRadius="0 0 5px 5px"
        borderColor="brand.border.100"
        justify="space-between"
        px="16px"
      >
        <Text fontSize="14px" my="auto" color="brand.font.200">
          The Meta Discovery Team
        </Text>
        <FaEthereum
          color="#8BDA97"
          style={{
            marginTop: "auto",
            marginBottom: "auto",
          }}
        />
      </Flex>
      <Text fontSize="14px" mt="13px">
        Nyan Ballon Projet
      </Text>
      <Tag color="#4D9EFA" bg="#4D9EFA20" my="5px">
        <TagLeftIcon boxSize="13px" as={FaTicketAlt} />
        <TagLabel>2 Winners</TagLabel>
      </Tag>
      <Box
        w="90%"
        mt="8px"
        mx="auto"
        borderTop="1px"
        color={"brand.border.100"}
      />
      <Flex mt="9px" justify={"space-between"}>
        <Text
          color="brand.font.200"
          fontWeight="semibold"
          fontSize="14px"
          my="auto"
        >
          Ends in{" "}
        </Text>
        <Text fontSize="16px">24 hrs </Text>
      </Flex>
      <Button
        mt="15px"
        variant="brand-purple"
        width="100%"
        rightIcon={<BsFillCaretRightFill size="18px" />}
        justifyContent="space-between"
        as={Link}
        href="/entries/1"
      >
        Register
      </Button>
    </StyledBox>
  );
}
