"use client";

import { Box, Button, Flex, HStack, Spacer, Text,  IconButton,Menu, MenuButton, MenuItem, MenuList,
  useDisclosure,
  Drawer,Input,
  DrawerOverlay,InputRightElement,InputGroup,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,useMediaQuery,
  DrawerBody, } from "@chakra-ui/react";
import { VscPieChart } from "react-icons/vsc";
import { BiCategory } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { FiBarChart2 } from "react-icons/fi";
import type { DiscordProfile } from "next-auth/providers/discord";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import Image from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";


export default function HeaderDesktop() {
  const router = useRouter();
  const session = useSession().data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanLg] = useMediaQuery("(min-width: 992px)");
  const options = ['Option 1', 'Option 2', 'Option 3']
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    setMenuIsOpen(false)
  }
  const isCurrentPath = (path: string) => {
    return path === router.pathname;
  };
  return (
<>
{isLargerThanLg ? (
    <Box
      bg="brand.bg.200"
      h="90px"
      display="flex"
      borderBottom={"1px"}
      borderColor={"brand.border.100"}
      px="5%"
    >
      <Box my="auto">
        <Flex alignItems={"center"} justifyContent={"space-between"} gap={3}>
        <Image
          src={"/assets/title-logo.svg"}
          width={230}
          height={60}
          alt={"title-logo"}
        />
      <Menu  isOpen={menuIsOpen} onOpen={() => setMenuIsOpen(true)} onClose={() => setMenuIsOpen(false)}>
      <MenuButton as={InputGroup} size="md" variant='outline' sx={{border:'1px solid #29273F'}}>
        <Input
          placeholder='Outline'
          sx={{
            width:'300px',
            border: 'none',
            '::placeholder': {
              color: '#6A6E81',
            },
          }}
          onClick={() => setMenuIsOpen(true)}
        />

        <InputRightElement>
          <CiSearch style={{ color: '#6A6E81', fontSize: '20px' }} />
        </InputRightElement>

      </MenuButton>
      <MenuList sx={{backgroundColor:"#120F2A",border:'1px solid #29273F',p:'3px'}} >

        {options.map((option) => (

          <MenuItem key={option} sx={{ backgroundColor: "#120F2A" }} onClick={() => handleOptionClick(option)}>

            <Box sx={{ border: "1px solid #29273F", p: "4px", mt: "3px", width: "300px", borderRadius: "5px" }}>
              <Flex alignItems="center">
                <Image
                  alt="pfp"
                  src={"/assets/car.png"}
                  width={50}
                  height={50}
                />
                <Box>
                  <Text fontSize="12px">
                    Swift Collection Name
                  </Text>
                  <Flex alignItems="flex-end" gap={2}>
                    <Text fontSize="10px" color="#6A6E81">
                      TwitterName
                    </Text>
                    <Image
                      alt="pfp"
                      src={"/assets/twitter.png"}
                      width={15}
                      height={15}
                    />
                  </Flex>

                </Box>
              </Flex>

            </Box>

          </MenuItem>

        ))}

      </MenuList>
    </Menu>

        </Flex>

      </Box>
      <Spacer />

      <HStack my="auto" spacing="10px">

        <Button
          as={NextLink}
          variant={isCurrentPath("/entries") ? "brand-purple" : "nav"}
          href="/entries"
          leftIcon={<VscPieChart size={20} />}
          fontWeight="700"
        >
          Entries
        </Button>
        <Button
          as={NextLink}
          href="/overview"
          variant={isCurrentPath("/overview") ? "brand-purple" : "nav"}
          leftIcon={<BiCategory size={20} />}
          fontWeight="700"
        >
          Overview
        </Button>
        <Button
          as={NextLink}
          href="/creation"
          variant={isCurrentPath("/creation") ? "brand-purple" : "nav"}
          leftIcon={<TbListDetails size={20} />}
          fontWeight="700"
        >
          Creation
        </Button>
        <Button
          as={NextLink}
          href="/management"
          variant={isCurrentPath("/management") ? "brand-purple" : "nav"}
          leftIcon={<FiBarChart2 size={20} />}
          fontWeight="700"
        >
          Management
        </Button>

      </HStack>




      <Box
        w="1px"
        ml={4}
        borderLeft="2px"
        borderColor="brand.bg.500"
        h="25%"
        my="auto"
        mx="23px"
      />

      <Flex my="auto">
        {session ? (
          <Box
            bg={"brand.bg.300"}
            border={"1px"}
            borderColor={"brand.border.100"}
            w="160px"
            px="11px"
            my="auto"
            borderRadius="5px"
            display="flex"
            h="36px"
          >
            <Text fontWeight="bold" my="auto" fontSize="13px">
              {session.user.name}
            </Text>
            <Spacer />
            <Box
              boxSize="10px"
              borderRadius="full"
              bg="blue.400"
              my="auto"
              mr="6px"
            />
          </Box>
        ) : (
          <Button
            variant="brand-purple"
            ml="13px"
            my="auto"
            onClick={() => {
              signIn("discord").catch((err) => console.log(err));
            }}
          >
            Login
          </Button>
        )}

        <Button variant="brand-blue" ml="13px" my="auto"  as={NextLink}
          href="/LoginComponent">
          Get Access
        </Button>
      </Flex>
    </Box>

) : (
  <>

<Flex justifyContent={"space-between"}>


        <Image
          src={"/assets/title-logo.svg"}
          width={250}
          height={60}
          alt={"title-logo"}
        />

      <IconButton
          aria-label="Open Menu"
          variant="ghost"
          color="current"
          onClick={onOpen}
          icon={<AiOutlineMenu />}
          size="xl"
          me={4}
          display={{ lg: "none" }}
        />
</Flex>


 <Drawer isOpen={isOpen} placement="top" onClose={onClose}  >
          <DrawerOverlay />
          <DrawerContent bg="brand.bg.200">
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>

            <Box
      bg="brand.bg.200"

      display="flex"
      flexDirection={"column"}
      mb={5}

    >

    <Menu  isOpen={menuIsOpen} onOpen={() => setMenuIsOpen(true)} onClose={() => setMenuIsOpen(false)}>
      <MenuButton as={InputGroup} size="md" variant='outline' sx={{border:'1px solid #29273F',mb:3}}>
        <Input
          placeholder='Outline'
          sx={{
            
            border: 'none',
            '::placeholder': {
              color: '#6A6E81',
            },
          }}
          onClick={() => setMenuIsOpen(true)}
        />

        <InputRightElement>
          <CiSearch style={{ color: '#6A6E81', fontSize: '20px' }} />
        </InputRightElement>

      </MenuButton>
      <MenuList sx={{backgroundColor:"#120F2A",border:'1px solid #29273F',p:'3px'}} >

        {options.map(option => (

          <MenuItem key={option} sx={{backgroundColor:"#120F2A"}}  onClick={() => handleOptionClick(option)}>

            <Box sx={{border:'1px solid #29273F',p:'4px',mt:'3px' ,width:'300px', borderRadius:'5px'}}>
              <Flex alignItems="center">
                <Image
                  alt="pfp"
                  src={"/assets/car.png"}
                  width={50}
                  height={50}
                />
                <Box>
                  <Text fontSize="12px">
                    Swift Collection Name
                  </Text>
                  <Flex alignItems="flex-end" gap={2}>
                    <Text fontSize="10px" color="#6A6E81">
                      TwitterName
                    </Text>
                    <Image
                      alt="pfp"
                      src={"/assets/twitter.png"}
                      width={15}
                      height={15}
                    />
                  </Flex>

                </Box>
              </Flex>

            </Box>

          </MenuItem>

        ))}

          <MenuItem sx={{backgroundColor:"#120F2A"}} display="flex" alignItems="center" justifyContent="center" onClick={() => handleOptionClick("option")}>
              <Box sx={{backgroundColor:'#6166DC', borderRadius:'5px',p:"5px",px:'10px'}}>
                3 more
              </Box>
          </MenuItem>
      </MenuList>
    </Menu>
      <Spacer />
      <HStack my="auto" spacing="10px" direction={"column"}>
        <Flex
      flexDirection={"column"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      >


        <Button
          as={NextLink}
          variant={isCurrentPath("/entries") ? "brand-purple" : "nav"}
          href="/entries"
          leftIcon={<VscPieChart size={20} />}
          fontWeight="700"
        >
          Entries
        </Button>
        <Button
          as={NextLink}
          href="/overview"
          variant={isCurrentPath("/overview") ? "brand-purple" : "nav"}
          leftIcon={<BiCategory size={20} />}
          fontWeight="700"
        >
          Overview
        </Button>
        <Button
          as={NextLink}
          href="/creation"
          variant={isCurrentPath("/creation") ? "brand-purple" : "nav"}
          leftIcon={<TbListDetails size={20} />}
          fontWeight="700"
        >
          Creation
        </Button>
        <Button
          as={NextLink}
          href="/management"
          variant={isCurrentPath("/management") ? "brand-purple" : "nav"}
          leftIcon={<FiBarChart2 size={20} />}
          fontWeight="700"
        >
          Management
        </Button>
        </Flex>
      </HStack>

</Box>




          <Button
            variant="brand-purple"
            mb={10}
            onClick={() => {
              signIn("discord").catch((err) => console.log(err));
            }}
          >
            Login
          </Button>


        <Button variant="brand-blue" ml="13px" my="auto" mb={10}>
          Get Access
        </Button>


            </DrawerBody>
          </DrawerContent>
        </Drawer>
        </>
)}
    </>

  );
}
