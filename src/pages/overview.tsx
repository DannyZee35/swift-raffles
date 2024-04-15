import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  SimpleGrid,
  Text, Flex
} from "@chakra-ui/react";
import {
  BsLightningChargeFill,
  BsArrowDownShort,
  BsList,
} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import {Footer} from "../components/Footer/Footer";

import RaffleCard from "../components/raffle/RaffleCard";

export default function RaffleList() {
  return (
    <Box>
      <Box mt="25px" mb="10px" className="block justify-between lg:flex"
      sx={{
        "@media screen and (max-width: 767px)": {
       flexDirection:"column",
       alignItems:"center",
       justifyContent:'center',
     display:'flex',
        }
    }}
      >
        <Box className="mb-6 flex justify-between lg:mb-0 lg:block"
        sx={{
          "@media screen and (max-width: 767px)": {
          gap:'20px'
       
          }
      }}
        >
          <Text fontWeight="bold" fontSize="20px">
            Raffle Otherview
          </Text>
          <Button mt="15px" variant="brand-blue" my="auto">
            New Raffle
          </Button>
        </Box>
        <Box>
          <InputGroup variant="brand">
            <InputLeftAddon>
              <BiSearch />
            </InputLeftAddon>
            <Input placeholder="Search Raffle" />
          </InputGroup>
          <HStack spacing="10px" mt="10px">
            <IconButton
              variant="brand"
              aria-label=""
              icon={<BsLightningChargeFill color="white" size="17px" />}
            />

            <IconButton
              aria-label=""
              variant="brand"
              icon={<FaFilter size="17px" />}
            />
            <Box />
            <IconButton
              aria-label="Search database"
              variant={"brand"}
              icon={<BsArrowDownShort color="white" size="27px" />}
            />
            <IconButton
              aria-label="Search database"
              variant={"brand"}
              disabled
              icon={<BsList color="white" size="21px" />}
            />
            <Box />
            <IconButton
              aria-label="Search database"
              variant={"brand"}
              icon={<IoRefresh color="white" size="19px" />}
            />
          </HStack>
        </Box>
      </Box>
      <Flex flexDirection="column" gap="15px">


        <Flex alignItems="center" gap="15px"
          sx={{
            "@media screen and (max-width: 767px)": {
              flexDirection: "column",
              alignItems: "center",
              justifyContent: 'center'

            }
          }}
        >
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
        </Flex>

        <Flex alignItems="center" gap="15px" 
        sx={{
          "@media screen and (max-width: 767px)": {
         flexDirection:"column",
         alignItems:"center",
         justifyContent:'center'
       
          }
      }}
        >
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
          <RaffleCard />
        </Flex>
      </Flex>

      <Footer/>
    </Box>
  );
}
