import React, { useState } from "react";
import {Textarea, Flex,FormControl,FormLabel,Input, Image, Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, ModalCloseButton } from "@chakra-ui/react"
import BrandDropzone from "../components/BrandDropzone";

import { FiArrowRight } from "react-icons/fi";




export default function ModalComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>



            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay />
                <ModalContent sx={{ backgroundColor: '#120F2A',
                 "@media screen and (max-width: 767px)": {
                  p:0
                 }
            }} p={3}
                 
                >

                    <ModalBody>
                        <Flex alignItems={"center"} justifyContent={"space-between"} gap={10}>
                            <Flex flexDirection={"column"}>
                                <Text fontSize={"24px"} mb={2}>
                                    Tell us more about your community
                                </Text>
                                <Text fontSize={"12px"} color={"#6A6E81"}>
                                    Lorem ipsum dolor sit amet consectetur. Rhoncus sed condimentum enim gravida. Vivamus sit pulvinar suspendisse tincidunt accumsan.
                                </Text>
                            </Flex>
                            <Box sx={{ height: '80px' }}>
                                <Image
                                    alt="pfp"
                                    src={"/assets/logo.png"}


                                    style={{

                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                    }}
                                />
                            </Box>


                        </Flex>
                        <Flex gap={3} 
                           sx={{
                            "@media screen and (max-width: 767px)": {
                           flexDirection: "column"
                            }
                        }}
                        >

                
                        <Flex alignItems="center" gap={10} mt={5} border="1px dashed #39374F" p={3}
                          borderStyle="dashed" borderWidth= "2px" borderRadius="5px"
                        >  
                            <Flex  alignItems="center" gap={3}>
                            <Image
                                alt="pfp"
                                src={"/assets/default.png"}


                                style={{

                                    width: "30px",
                                    height: "20px",
                                }}
                            />
                            <Flex flexDirection="column">
                                <Text fontSize={"14px"} >
                                    Upload Team Icon
                                </Text>
                                <Text fontSize={"12px"} color={"#6A6E81"}>
                                    Drop or upload a file here
                                </Text>
                            </Flex>
                            </Flex>
                          
                            <Image
                                alt="pfp"
                                src={"/assets/plus.png"}


                                style={{

                                    width: "40px",
                                    height: "40px",
                                }}
                            />
                        </Flex>
                        <Flex alignItems="center" gap={10} mt={5} border="1px dashed #39374F" p={3}
                          borderStyle="dashed" borderWidth= "2px" borderRadius="5px"
                        >  
                            <Flex  alignItems="center" gap={3}>
                            <Image
                                alt="pfp"
                                src={"/assets/default.png"}


                                style={{

                                    width: "30px",
                                    height: "20px",
                                }}
                            />
                            <Flex flexDirection="column">
                                <Text fontSize={"14px"} >
                                    Upload Team Icon
                                </Text>
                                <Text fontSize={"12px"} color={"#6A6E81"}>
                                    Drop or upload a file here
                                </Text>
                            </Flex>
                            </Flex>
                          
                            <Image
                                alt="pfp"
                                src={"/assets/plus.png"}


                                style={{

                                    width: "40px",
                                    height: "40px",
                                }}
                            />
                        </Flex>
                        </Flex>
                        
                        <Flex mt={3} gap={5} flexDirection="column">
                        <FormControl >
            <FormLabel fontSize="11px" fontWeight="semibold">
            Community Name
            </FormLabel>
            <Input variant="brand" placeholder="Enter Community Name" />
          </FormControl>
          <Box h="100%">
          <FormControl mb="11px" h="100%">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Bio
            </FormLabel>
            <Textarea placeholder="Enter Bio Description" borderColor="brand.border.100" bg="brand.bg.200" />
          </FormControl>
        </Box>

          <FormControl >
            <FormLabel fontSize="11px" fontWeight="semibold">
            Discord Link
            </FormLabel>
            <Input variant="brand" placeholder="Enter Discord URL" />
          </FormControl>

          <FormControl >
            <FormLabel fontSize="11px" fontWeight="semibold">
            Twitter Link
            </FormLabel>
            <Input variant="brand" placeholder="Enter Twitter URL" />
          </FormControl>

          <FormControl >
            <FormLabel fontSize="11px" fontWeight="semibold">
            OpenSea Link
            </FormLabel>
            <Input variant="brand" placeholder="Enter OpenSea URL" />
          </FormControl>
                        </Flex>
                   
                    </ModalBody>

                    <ModalFooter px={140}>
                     
                        <Button
        
        variant="brand-purple"
        width="100%"
        rightIcon={<FiArrowRight size="20px" />}
        justifyContent="space-between"
     
      >
        Add Team
      </Button>
                         
              
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}