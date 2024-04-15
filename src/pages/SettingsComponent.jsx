import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    InputRightElement, InputGroup,
    Textarea, Flex, FormControl, FormLabel, Input, Image, Box, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, ModalCloseButton, Select
} from "@chakra-ui/react"
import { RiArrowDropDownLine } from "react-icons/ri";
import { WalletsCard } from "../components/WalletsCard";

export default function SettingsComponent() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [showContent, setShowContent] = useState(false);



    return (
        <Box>



            <Button onClick={onOpen}>Open Modal</Button>

            <Modal isOpen={isOpen} onClose={onClose} size="3xl" p={0}>
                <ModalOverlay />
                <ModalContent sx={{
                    backgroundColor: '#120F2A',
                    "@media screen and (max-width: 767px)": {
                        p: 0
                    }
                }} p={3}

                >
                    <ModalCloseButton sx={{ border: '2px solid #29273F' }} backgroundColor={"#1B1833"} />

                    <ModalBody>
                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                            <Box>
                                <Text fontSize={'24px'}>
                                    Settings
                                </Text>
                                <Text fontSize={"14px"} color={"#6A6E81"}>
                                    Manage your account
                                </Text>
                            </Box>
                            <Flex alignItems={"center"} gap={3} me={5} sx={{ backgroundColor: "rgba(255, 117, 117, 0.15)" }} p={3} borderRadius={"5px"}>
                                <Button color={"#FF7575"} variant='link'>
                                    Logout
                                </Button>
                                <Image
                                    alt="pfp"
                                    src={"/assets/logout.png"}


                                    style={{
                                        borderRadius: "4px",

                                        height: "20px",
                                        width: "20px",
                                    }}
                                />
                            </Flex>


                        </Flex>

                        <Accordion defaultIndex={[0]} allowMultiple mt={10} sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <AccordionItem sx={{ border: 'none' }}>

                                <AccordionButton sx={{ backgroundColor: '#1B1833', border: '1px solid #29273F', borderRadius: '5px' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Social Connections
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex gap={3}
                                        sx={{
                                            "@media screen and (max-width: 767px)": {
                                                flexDirection: "column"
                                            }
                                        }}
                                    >


                                        <Flex alignItems="center" gap={10} mt={5} border="1px dashed #39374F" p={5}
                                            borderStyle="dashed" borderWidth="2px" borderRadius="5px"
                                        >
                                            <Flex alignItems="center" gap={3}>
                                                <Image
                                                    alt="pfp"
                                                    src={"/assets/purpleDiscord.png"}


                                                    style={{

                                                        width: "30px",
                                                        height: "20px",
                                                    }}
                                                />
                                                <Flex flexDirection="column">
                                                    <Text fontSize={"14px"} >
                                                        Connect Discord
                                                    </Text>
                                                    <Text fontSize={"12px"} color={"#6A6E81"}>
                                                        Connect your discord
                                                    </Text>
                                                </Flex>
                                            </Flex>

                                            <Button

                                                variant="brand-blue"


                                                justifyContent="space-between"

                                            >
                                                Connect
                                            </Button>
                                        </Flex>
                                        <Flex alignItems="center" gap={10} mt={5} border="1px dashed #39374F" p={5}
                                            borderStyle="dashed" borderWidth="2px" borderRadius="5px"
                                        >
                                            <Flex alignItems="center" gap={3}>
                                                <Image
                                                    alt="pfp"
                                                    src={"/assets/twitter.png"}


                                                    style={{

                                                        width: "30px",
                                                        height: "20px",
                                                    }}
                                                />
                                                <Flex flexDirection="column">
                                                    <Text fontSize={"14px"} >
                                                        Connect Twitter
                                                    </Text>
                                                    <Text fontSize={"12px"} color={"#6A6E81"}>
                                                        Connect your twitter
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Button

                                                variant="brand-blue"


                                                justifyContent="space-between"

                                            >
                                                Connect
                                            </Button>
                                        </Flex>
                                    </Flex>

                                </AccordionPanel>

                            </AccordionItem>

                            <AccordionItem sx={{ border: 'none' }}>

                                <AccordionButton sx={{ backgroundColor: '#1B1833', border: '1px solid #29273F', borderRadius: '5px' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Notifications
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>


                                </AccordionPanel>

                            </AccordionItem>

                            <AccordionItem sx={{ border: 'none' }}>

                                <AccordionButton sx={{ backgroundColor: '#1B1833', border: '1px solid #29273F', borderRadius: '5px' }}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        Community Settings
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text fontSize={"14px"} color={"#6A6E81"}>
                                        Select Community
                                    </Text>

                                    <Flex gap={5} sx={{
                                        "@media screen and (max-width: 767px)": {
                                            flexDirection: "column",
                                            width: '100%',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0'
                                        }
                                    }}>



                                        <Flex mt={5} width={"260px"} alignItems={"center"} justifyContent={"flex-start"} backgroundColor={"#6166DC"} borderRadius={"5px"} px={0}>

                                            <Image
                                                alt="pfp"
                                                src={"/assets/car.png"}


                                                style={{

                                                    width: "100px",
                                                    height: "100px",
                                                }}
                                            />
                                            <Box marginRight={8}>
                                                <Text fontSize={"14px"}>
                                                    Swift Tech
                                                </Text>
                                                <Text fontSize={"12px"} color={"hsl(0, 0%, 75%)"}>
                                                    Owner
                                                </Text>
                                            </Box>
                                        </Flex>

                                        <Flex mt={5} width={"260px"} alignItems={"center"} justifyContent={"flex-start"} border={"2px dashed #39374F"} borderRadius={"5px"} px={0}>

                                            <Image
                                                alt="pfp"
                                                src={"/assets/car.png"}


                                                style={{

                                                    width: "100px",
                                                    height: "100px",
                                                }}
                                            />
                                            <Box marginRight={8}>
                                                <Text fontSize={"14px"}>
                                                    Swift Tech
                                                </Text>
                                                <Text fontSize={"12px"} color={"hsl(0, 0%, 75%)"}>
                                                    Owner
                                                </Text>
                                            </Box>
                                        </Flex>

                                        <Flex mt={5} width={"260px"} alignItems={"center"} justifyContent={"flex-start"} border={"2px dashed #39374F"} borderRadius={"5px"} px={0}>

                                            <Image
                                                alt="pfp"
                                                src={"/assets/car.png"}


                                                style={{

                                                    width: "100px",
                                                    height: "100px",
                                                }}
                                            />
                                            <Box marginRight={8}>
                                                <Text fontSize={"14px"}>
                                                    Swift Tech
                                                </Text>
                                                <Text fontSize={"12px"} color={"hsl(0, 0%, 75%)"}>
                                                    Owner
                                                </Text>
                                            </Box>
                                        </Flex>
                                    </Flex>


                                    <Flex mt={5} gap={5}
                                        sx={{
                                            "@media screen and (max-width: 767px)": {
                                                flexDirection: "column",
                                                width: '100%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '3px'
                                            }
                                        }}
                                    >
                                        <FormControl mb="14px">
                                            <FormLabel fontSize="11px" fontWeight="semibold">
                                                ETH Mint Wallet
                                            </FormLabel>
                                            <InputGroup>

                                                <Select placeholder='Select Wallet' variant="brand" />
                                                <InputRightElement >
                                                    <RiArrowDropDownLine style={{ fontSize: '25px', color: "#6A6E81" }} />
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl mb="14px">
                                            <FormLabel fontSize="11px" fontWeight="semibold">
                                                SOL Mint Wallet
                                            </FormLabel>
                                            <InputGroup>

                                                <Select placeholder='Select Wallet' variant="brand" />
                                                <InputRightElement >
                                                    <RiArrowDropDownLine style={{ fontSize: '25px', color: "#6A6E81" }} />
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl mb="14px">
                                            <FormLabel fontSize="11px" fontWeight="semibold">
                                                APT Mint Wallet
                                            </FormLabel>
                                            <InputGroup>

                                                <Select placeholder='Select Wallet' variant="brand" />
                                                <InputRightElement>
                                                    <RiArrowDropDownLine style={{ fontSize: '25px', color: "#6A6E81" }} />
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>
                                    </Flex>
                                </AccordionPanel>

                            </AccordionItem>


                            <AccordionItem sx={{ border: 'none' }}>

                                <AccordionButton sx={{ backgroundColor: '#1B1833', border: '1px solid #29273F', borderRadius: '5px' }}  >
                                    <Box as="span" flex='1' textAlign='left'>
                                        Signed Wallets
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Flex backgroundColor={"#1A3A58"} borderRadius={"5px"} p={3} width={"100%"} gap={5}>
                                        <Text fontSize={"13px"} color={"#4D9EFA"}>
                                            Blockchain
                                        </Text>
                                        <Text fontSize={"13px"} color={"#4D9EFA"}>
                                            Wallet
                                        </Text>
                                    </Flex>
                                    <WalletsCard text={"Solana"} image={"/assets/solana.png"} code={"0xdfgeg454nfwm3jf3n3 fwlqdgmö4523"} />
                                    <WalletsCard text={"Ethereum"} image={"/assets/eth.png"} code={"0xdfgeg454nfwm3jf3n3 fwlqdgmö4523"} />
                                    <WalletsCard text={"Aptos"} image={"/assets/aptos.png"} code={"0xdfgeg454nfwm3jf3n3 fwlqdgmö4523"} />
                                    <WalletsCard text={"Aptos"} image={"/assets/aptos.png"} code={"0xdfgeg454nfwm3jf3n3 fwlqdgmö4523"} />
                                    <Box borderBottom={"1px solid #29273F"} mt={5} mb={5}>
                                    </Box>
                                    <Flex gap={2} alignItems={"center"}
                                      sx={{
                                        "@media screen and (max-width: 400px)": {
                                          gap:2,
                                          width:'100%',
                                          flexDirection: "column",
                                        },
                                    }}
                                    >
                                        <FormControl mb="14px">
                                            <FormLabel fontSize="11px" fontWeight="semibold">
                                                Chain
                                            </FormLabel>
                                            <InputGroup>

                                                <Select placeholder='Select Chain' variant="brand" />
                                                <InputRightElement>
                                                    <RiArrowDropDownLine style={{ fontSize: '25px', color: "#6A6E81" }} />
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl mb="14px">
                                            <FormLabel fontSize="11px" fontWeight="semibold">
                                                Wallet Address
                                            </FormLabel>
                                            <InputGroup>

                                                <Input placeholder='Enter Address' variant="brand" />
                                            </InputGroup>
                                        </FormControl>

                                        <Button

                                            variant="brand-blue"
                                            width={'70%'}

                                            justifyContent="space-between"
                                            sx={{
                                                "@media screen and (max-width: 400px)": {
                                                
                                                  width:'100%',
                                                  
                                                },
                                            }}
                                        >
                                            Add Wallet
                                        </Button>
                                    </Flex>
                                </AccordionPanel>

                            </AccordionItem>

                            <AccordionItem sx={{ border: 'none' }}>

<AccordionButton sx={{ backgroundColor: '#1B1833', border: '1px solid #29273F', borderRadius: '5px' }}  >
    <Box as="span" flex='1' textAlign='left'>
    General Wallets
    </Box>
    <AccordionIcon />
</AccordionButton>
<AccordionPanel pb={4}>
     
</AccordionPanel>

</AccordionItem>
                        </Accordion>


                    </ModalBody>

                    <ModalFooter px={140}>



                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}