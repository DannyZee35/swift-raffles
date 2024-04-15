
import React, { useState } from "react";
import {Textarea, Flex,FormControl,FormLabel,Input, Image, Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, ModalCloseButton } from "@chakra-ui/react"
 

export default function LoginComponent(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(

        <>
         <Button onClick={onOpen}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={onClose} size="xl">
    <ModalOverlay />
    <ModalContent sx={{ backgroundColor: '#120F2A',
     "@media screen and (max-width: 767px)": {
      p:0
     }
}} p={3}
     
    >

        <ModalBody>
        <Flex alignItems={"center"} justifyContent={"space-between"} 
        
        >
                            <Box>
                                <Text fontSize={'24px'}>
                                Sign In
                                </Text>
                                <Text fontSize={"14px"} color={"#6A6E81"}>
                                Continue to SwiftTech
                                </Text>
                            </Box>
                            <Box   sx={{height:'80px',
                              
                                "@media screen and (max-width: 767px)": {
                                    height:'50px',
                                }
                            
                        }} >
                              
                                <Image
                                    alt="pfp"
                                    src={"/assets/logo.png"}


                                    style={{
                                        borderRadius: "4px",

                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                    }}
                                />
                            </Box>


                        </Flex>
       
       <Flex justifyContent={"space-between"} gap={5} mt={5}
       sx={{ 
                              
       "@media screen and (max-width: 767px)": {
           flexDirection:'column'
       }
   
}}
       >
        <Flex width={"100%"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={3} 
        backgroundColor={"#1B1833"} p={10} borderRadius={"5px"}
        >
        <Text fontSize={'12px'}>
        Continue with MetaMask
                                </Text>
                                <Text fontSize={"10px"} color={"#6A6E81"}>
                                Sign in by using wallet connect
                                </Text>
                                <Image
                                    alt="pfp"
                                    src={"/assets/meta.png"}


                                    style={{
                                        borderRadius: "4px",

                                        height: "50px",
                                        width: "50px",
                                    }}
                                />
        </Flex>
        <Flex width={"100%"}  alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={3} 
        backgroundColor={"#8A61DC"} p={10} borderRadius={"5px"}>
        <Text fontSize={'12px'}>
        Continue with Discord
                                </Text>
                                <Text fontSize={"10px"} color={'hsl(0, 0%, 75%)'}>
                                Sign in by using OpenSea
                                </Text>
                                <Image
                                    alt="pfp"
                                    src={"/assets/whiteDiscord.png"}


                                    style={{
                                        borderRadius: "4px",

                                        height: "50px",
                                        width: "70px",
                                    }}
                                />
        </Flex>
       </Flex>
        </ModalBody>

        <ModalFooter px={140}>
 
  
        </ModalFooter>
    </ModalContent>
</Modal>
        </>
    )
}