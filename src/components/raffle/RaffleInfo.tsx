import {
  Flex,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Box,Button
} from "@chakra-ui/react";
import StyledBox from "../StyledBox";
import { FaEthereum, FaTicketAlt } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { TbClock } from "react-icons/tb";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";
export default function RaffleInfo() {
  return (
    <StyledBox className="w-full lg:w-1/2">
      <Image
        src={
          "https://pbs.twimg.com/profile_banners/1533352103971672064/1663297336/1500x500"
        }
        alt={"banner-image"}
        width={725}
        height={200}
        style={{
          borderRadius: "5px",
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <Text mt="20px" color="brand.font.200" fontWeight="bold" fontSize="14px">
        Whitelist Raffle | Meta Discover
      </Text>
      <Text mt="-2px" mb="7px" fontSize="24px" fontWeight="bold">
        Cozy Express Whitelist
      </Text>
      <Flex>
        <Tag color="#4D9EFA" bg="#4D9EFA20">
          <TagLeftIcon boxSize="13px" as={FaTicketAlt} />
          <TagLabel>2 Winners</TagLabel>
        </Tag>
        <Tag color="#B583F1" bg="#B583F120">
          <TagLeftIcon boxSize="13px" as={TbClock} />
          <TagLabel>End in 34h 12m</TagLabel>
        </Tag>
        <Tag color="#F19783" bg="#F1978320">
          <TagLeftIcon boxSize="13px" as={BiCategoryAlt} />
          <TagLabel> Supply: 1000</TagLabel>
        </Tag>
        <Tag color="#8BDA97" bg="#8BDA9720">
          <TagLeftIcon boxSize="13px" as={FaEthereum} />
          <TagLabel>Ethereum</TagLabel>
        </Tag>
      </Flex>

      <Text mt="20px" fontWeight="bold">
        About
      </Text>
      <Text fontSize="12px" color="brand.font.100" fontWeight="semibold">
        Lorem ipsum dolor sit amet consectetur. Facilisis adipiscing donec
        libero adipiscing quis bibendum. Mi auctor vivamus lobortis eu nisi id
        non quam. Vestibulum turpis sodales non amet. Lorem ipsum dolor sit amet
        consectetur. Facilisis adipiscing donec libero adipiscing quis bibendum.
        Mi auctor vivamus lobortis eu nisi id non quam. Vestibulum turpis
        sodales non amet.
      </Text>

      <Text mt="20px" mb="9px" fontWeight="bold">
        Created by
      </Text>
      <Flex>
        <StyledBox
          bg="brand.bg.300"
          p="13px"
          w="165px"
          h="130px"
          borderRadius="5px"
        >
          <Flex>
            <Image
              alt="pfp"
              src={
                "https://pbs.twimg.com/profile_images/1570667830810652675/7c4CfPGk_400x400.jpg"
              }
              height={60}
              width={60}
              style={{
                borderRadius: "4px",
                objectFit: "cover",
                height: "60px",
                width: "60px",
              }}
              mr="13px"
            />
            <Tag color="#4D9EFA" bg="#4D9EFA20">
              Verified
            </Tag>
          </Flex>
          <Text mt="8px" fontWeight="bold">
            Brixxx#0001
          </Text>
          <Text color="brand.font.200" fontWeight="semibold" fontSize="12px">
            Owner
          </Text>
        </StyledBox>
      </Flex>
      <Text
        mt="25px"
        fontSize="12px"
        fontWeight="semibold"
        color="brand.font.200"
      >
        Created on{" "}
        <span
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          {" "}
          december 16th 12:23 AM
        </span>
      </Text>
     
    </StyledBox>
  );
}
