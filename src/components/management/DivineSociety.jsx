import { Box, Text, Image, Flex, Tag, Button } from "@chakra-ui/react"
import StyledBox from "../StyledBox"
import society from "./society.png"
import { TeamMembers } from "./TeamMembers"
import BrandDropzone from "../BrandDropzone";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";

const reqBoxStyles = {
    border: "1px dashed",
    borderColor: "brand.border.100",
    w: "100%",

    p: "10px",
    borderRadius: "5px",
    className: "justify-between block lg:flex space-y-3 lg:space-y-0 ",
};

export const DivineSociety = () => {

    return (
        <>
            <Box border={"1px"}
                borderColor={"brand.border.100"} s
                borderRadius="10px"
             
                marginLeft="30px"
               
                w="100%"
                sx={{
                    "@media screen and (max-width: 400px)": {
                      flexDirection:'column',
                      marginLeft:"12px",
              
                      display:'flex',
                       alignItems:'center',
                       
                       justifyContent:"center"
                    },
                }}
                >
                <StyledBox margin="20px" >
                    <Flex gap={2}  sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }
                                }} >
                        <Flex direction={"column"} gap={4}  sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }
                                }}>
                            <Box display="flex" alignItems="center" justifyContent="flex-start"
                                sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection: "column",
                                        alignItems: "flex-start"
                                    }
                                }}>

                                <Image
                                    alt="pfp"
                                    src={"/assets/society.png"}


                                    style={{
                                        borderRadius: "4px",
                                        objectFit: "cover",
                                        height: "100px",
                                        width: "100px",
                                    }}
                                />

                                <Flex direction={"column"} gap={2} >

                                    <Text fontWeight="bold">Divine Society</Text>
                                    <Text style={{ padding: 6, color: "#FF7C7C", backgroundColor: "rgba(255, 124, 124, 0.2)", fontWeight: "bold", fontSize: '12px' }}>Payment has expired</Text>

                                </Flex>
                            </Box>
                            <Box display="flex" alignItems="flex-start"  >

                                <Text fontSize={12} color={'#7C829F'}>
                                    Lorem ipsum dolor sit amet consectetur. Ac elit orci in tellus mattis mauris velit. Ut vitae in quis interdum morbi justo eu hendrerit mollis. In et tortor fames sit lobortis ultrices.
                                </Text>
                            </Box>

                        </Flex>
                        <Flex gap={2}   sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection: "column",
                                        alignItems: "center"
                                    }
                                }}>
                            <StyledBox
                                bg="brand.bg.300"
                                p="13px"
                                w="165px"
                                h="130px"
                                borderRadius="5px"
                              
                            >
                                <Flex justifyContent={"center"} >
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

                                </Flex>
                                <Text textAlign={"center"} mt="8px" fontWeight="bold">
                                    DiscordServer
                                </Text>
                                <Text textAlign={"center"} color="brand.font.200" fontWeight="semibold" fontSize="12px">
                                    Connected
                                </Text>
                            </StyledBox>
                            <StyledBox
                                bg="brand.bg.300"
                                p="13px"
                                w="165px"
                                h="130px"
                                borderRadius="5px"
                            >
                                <Flex alignItems={"center"} justifyContent={"center"} >
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

                                </Flex>
                                <Text mt="8px" fontWeight="bold" textAlign={"center"}>
                                    @DivineSociety
                                </Text>
                                <Text color="brand.font.200" fontWeight="semibold" fontSize="12px" textAlign={"center"}>
                                    Connected
                                </Text>
                            </StyledBox>
                        </Flex>
                        <Box style={{ borderRight: "1px solid #29273F" }}>

                        </Box>
                        <Flex direction={"column"} gap={2} style={{ width: '100%' }}   sx={{
                                    "@media screen and (max-width: 767px)": {
                                       width:'100px',
                                       alignItems:'center',
                                       gap:4
                                       
                                    }
                                }}>

                            <BrandDropzone title="Icon Image" onDrop={() => null} style={{ maxWidth: '300px' }} />


                            <BrandDropzone title="Icon Hover Image" onDrop={() => null} style={{ maxWidth: '300px' }} />

                        </Flex>
                    </Flex>

                </StyledBox>
                <Box style={{ borderBottom: '2px solid #29273F', marginTop: 20, marginBottom: 20 }} margin="20px" >
                </Box>
                <TeamMembers />
                <Box  backgroundColor="#1D1A35" padding="20px" style={{ border: '1px solid #29273F',   marginTop: '20px', borderRadius: "0 0 10px 10px" }}>
                    <Flex justifyContent={"space-between"} gap={500}
                    sx={{
                        "@media screen and (max-width: 400px)": {
                          gap:2,
                          flexDirection: "column",
                        },
                    }}
                    >
                        <Button
                            mt="15px"
                            variant="brand-blue"
                            width="100%"
                            leftIcon={<FiArrowLeft size="18px" />}
                            justifyContent="space-between"

                        >
                            Previous
                        </Button>
                        <Button
                            mt="15px"
                            variant="brand-purple"
                            width="100%"
                            rightIcon={<FiArrowRight size="18px" />}
                            justifyContent="space-between"
                            as={NextLink}
                            href="/SettingsComponent"
                        >
                            Next
                        </Button>
                    </Flex>

                </Box>
            </Box>
        </>
    )
}