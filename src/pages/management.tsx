import {
  Box,
  Text,
  Flex,
  Button,
  Spacer,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,

} from "@chakra-ui/react";
import {ManagementData} from "../components/management/ManagementData"
import { useState } from "react";
import StyledBox from "../components/StyledBox";
import { FiArrowRight } from "react-icons/fi";
import {Footer} from ".././components/Footer/Footer";
import RaffleInfoSettings from "../components/creation/views/RaffleInfoSettings";
import NextLink from "next/link";

import { BsFillCaretRightFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const menu = [
  { name: "Divine Society",  path: "/info" },
  { name: "Swift Tech", path: "/discord" },
  { name: "Team Name ",  path: "/winner" },
  { name: "Setup Questions", path: "/requirements" },
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
          Team Management
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
      border="0px"
      backgroundColor={"brand.bg.200"}
      justifyContent="space-between"
      onClick={() => setCurrent(item.name)}
    >
      {item.name}
    </Button>
  ))}
  <Spacer />
  <Button
        mt="15px"
        variant="brand-purple"
        width="100%"
        rightIcon={<FiArrowRight size="20px" />}
        justifyContent="space-between"
        as={NextLink}
        href="/ModalComponent"
      >
        Add Team
      </Button>
      
</StyledBox>
      <Box w="20px"></Box>
       <ManagementData current={current} />     
 

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
              <Button
                mt="15px"
                variant="brand-purple"
                width="100%"
                rightIcon={<FiArrowRight size="12px" />}
               
                justifyContent="space-between"
              >
                Add Team
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Footer/>
   </Box>
  
  );
}
