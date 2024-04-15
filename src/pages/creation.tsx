import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Select,
  SimpleGrid,
  Spacer,
  Text,
  Textarea,
  Link,
  Switch,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

import { useState } from "react";
import StyledBox from "../components/StyledBox";
import { SiDiscord } from "react-icons/si";
import type { IconType } from "react-icons";
import { FaTicketAlt } from "react-icons/fa";
import { VscPieChart } from "react-icons/vsc";
import { BiScan } from "react-icons/bi";
import { BsFolderFill } from "react-icons/bs";
import CreationSettingsWrapper from "../components/creation/CreationSettingsWrapper";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";
import RaffleInfo from "../components/raffle/RaffleInfo";
import RaffleSettingsViews from "../components/creation/RaffleSettingsViews";
import { Footer } from "../components/Footer/Footer";

const menu: {
  name: string;
  icon: IconType;
  path: string;
  disabled?: boolean;
}[] = [
  { name: "Raffle Info", icon: VscPieChart, path: "/info" },
  { name: "Discord Bot", icon: SiDiscord, path: "/discord" },
  { name: "Winner Info", icon: FaTicketAlt, path: "/winner" },
  { name: "Setup Requirements", icon: BiScan, path: "/requirements" },
  {
    name: "Setup Questions",
    icon: BsFolderFill,
    path: "/questions",
  },
];

export default function Index() {
  const [current, setCurrent] = useState(menu[0]?.name);
   const { isOpen, onOpen, onClose } = useDisclosure();
 
  return (
    <Box 
    sx={{
      "@media screen and (max-width: 400px)": {
        flexDirection:'column',
   

        display:'flex',
         alignItems:'center',
         
         justifyContent:"center"
      },
  }}
    >
    <Box mt="25px" mb="10px" className="flex justify-between lg:block" 
    
     >
         
      <Box className="mb-0 block justify-between lg:mb-6 lg:flex">
        <Flex alignItems="center" justifyContent="space-between" gap={10}>
      
         <Text fontWeight="bold" fontSize="20px"   sx={{
                                    "@media screen and (max-width: 767px)": {
                                   
                                        textAlign: "center"
                                    }
                                }} >
          Raffle Creation
        </Text>
        <IconButton
          aria-label="Open Menu"
          variant="ghost"
          color="current"
          onClick={onOpen}
          icon={<AiOutlineMenu />}
          size="xl"
          display={{ lg: "none" }}
        />
        </Flex>
       
     
      </Box>
    </Box>
    <Flex  >
    <StyledBox w="26%" flexDir="column"  display={{ base: "none", lg: "flex" }}
>
  {menu.map((item) => (
    <Button
      variant={current === item.name ? "brand-blue" : "brand"}
      key={item.name}
      fontWeight="700"
      color={current === item.name ? "white" : "brand.font.300"}
      rightIcon={<item.icon />}
      border="0px"
      backgroundColor={"brand.bg.200"}
      justifyContent="space-between"
      onClick={() => setCurrent(item.name)}
    >
      {item.name}
    </Button>
  ))}
  <Spacer />
  <Text color="brand.font.300" fontSize="12px" textAlign="center">
            Any questions? Contact us{" "}
            <Link
              href={"https://twitter.com/SwiftTechApp"}
              color="brand.font.purple"
              isExternal
            >
              here
            </Link>
          </Text>
      
</StyledBox>
      <Box w="20px"></Box>
      <RaffleSettingsViews current={current} />    
 

    </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}  >
          <DrawerOverlay />
          <DrawerContent bg="brand.bg.200">
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              {menu.map((item) => (
                <Button
                  key={item.name}
                  variant={current === item.name ? "brand-blue" : "brand"}
                  fontWeight="700"
                  color={
                    current === item.name ? "white" : "brand.font.300"
                  }
                  rightIcon={<item.icon />}
                  border="0px"
                  backgroundColor={"brand.bg.200"}
                  justifyContent="space-between"
                  onClick={() => {
                    setCurrent(item.name);
                    onClose();
                  }}
                  mb={2}
                  w="100%"
                >
                  {item.name}
                </Button>
              ))}
              <Text color="brand.font.300" fontSize="12px" textAlign="center">
            Any questions? Contact us{" "}
            <Link
              href={"https://twitter.com/SwiftTechApp"}
              color="brand.font.purple"
              isExternal
            >
              here
            </Link>
          </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      <Footer/>
    </Box>
  );
}
