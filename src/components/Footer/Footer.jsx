
import {
    Box,
    Text,
    Flex,
    Image
} from "@chakra-ui/react";
 
export const Footer = () => {

    return (
        <>
            <Flex sx={{ backgroundColor: '#120F2A', p: 3, mt: 50,mb:50,
             "@media screen and (max-width: 767px)": {
   
                flexDirection:'column',
                gap:4,
                flexWrap:'wrap',
                width:'300px',
               
            } }} alignItems={"center"} justifyContent={"space-between"} borderRadius={"8px"} 
            border={"1px solid #29273F"}>
                <Flex gap={5}  sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection:'column',
                                        justifyContent:'center',
                                        

                                    }
                                }}>


                    <Text color="white" fontWeight="bold" fontSize={'14px'}>
                        2023 Swift by SwiftTech
                    </Text>
                    <Text color="#7C829F" fontWeight="bold" fontSize={'14px'}>
                        Terms
                    </Text>
                    <Text color="#7C829F" fontWeight="bold" fontSize={'14px'}>
                        Privacy
                    </Text>
                </Flex>
                <Flex gap={5}  sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection:'column',
                                        justifyContent:'center',
                                   

                                    }
                                }}>
                                    <Flex gap={3}>
                                    <Image
                        alt="pfp"
                        src={"/assets/url.png"}


                        style={{
                         
                            objectFit: "cover",
                            height: "20px",
                            width: "20px",
                        }}
                    />
                    <Text color="white" fontWeight="bold" fontSize={'14px'}>
                        swiftwebsiteurl.com
                    </Text>
                                    </Flex>
                  
                    <Box sx={{height:'25px',backgroundColor:'#353953', borderRadius:'3px',width:'4px'}}>
                        </Box>
                  <Flex gap={3}>
                  <Image
                        alt="pfp"
                        src={"/assets/discord.png"}


                        style={{
                          
                            objectFit: "cover",
                            height: "20px",
                            width: "20px",
                        }}
                    />
                    <Text color="white" fontWeight="bold" fontSize={'14px'}>
                        discord.gg/SWIFT
                    </Text>
                    </Flex>
                    
                </Flex>
            </Flex>
        </>
    )
}