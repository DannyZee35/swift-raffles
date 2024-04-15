import { Flex, Text, Box } from "@chakra-ui/react"
import { AiOutlinePlus } from "react-icons/ai";
import { MembersCard } from "./MembersCard"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import { ManagmentCard } from "./ManagementCard";







export const TeamMembers = () => {

    return (
        <>
            <Flex margin="20px"          justifyContent="space-between" 
 sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection: "column",
                                        alignItems: "center",
                                       mt:10
                                    }
                                }}>

                <Flex direction={"column"} gap={3}  sx={{
        "@media screen and (max-width: 767px)": {
     
           display:'flex',
           alignItems: "center",
        justifyContent: "center",
        },
    }} >


                    <Flex alignItems={"flex-start"} justifyContent={"space-between"} 
                    sx={{
                        "@media screen and (max-width: 767px)": {
                      gap:10
                        },
                    }} 
                    >
                        <Flex direction={"column"} >
                            <Text fontWeight="bold" fontSize={16} >
                                Team Members
                            </Text>
                            <Text fontSize={12} color="#6A6E81">
                                Manage Divine Society team members
                            </Text>
                        </Flex>
                        <Box p="15px" borderRadius="5px" border={"1px solid #29273F"} backgroundColor="brand.bg.200">
                            <AiOutlinePlus />
                        </Box>
                    </Flex>

                    <MembersCard image={"/assets/society.png"} text={"Brixxx#0001"} owner={"Owner"} code={"0x3d3rfsdfer33das..asdw"} />
                    <MembersCard image={"/assets/society.png"} text={"Brixxx#0001"} owner={"Owner"} code={"0x3d3rfsdfer33das..asdw"} />
                    <MembersCard image={"/assets/society.png"} text={"Brixxx#0001"} owner={"Owner"} code={"0x3d3rfsdfer33das..asdw"} />
                    <MembersCard image={"/assets/society.png"} text={"Brixxx#0001"} owner={"Owner"} code={"0x3d3rfsdfer33das..asdw"} />


                </Flex>
                <Box style={{ borderRight: '2px solid #29273F' }}>
                </Box>
                <Flex alignItems={"flex-start"} justifyContent={"space-between"}  >
                    <Flex direction={"column"} gap={5}>

                        <Flex justifyContent="space-between" sx={{
    "@media screen and (max-width: 767px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
       p:2,
       gap:2
    },
}} >
                            <Flex direction={"column"} >
                                <Text fontWeight="bold" fontSize={16}>
                                    Team Raffles
                                </Text>
                                <Text fontSize={12} color="#6A6E81">
                                    Manage Divine Society team raffles
                                </Text>
                            </Flex>
                            <Flex gap={2}>
                                <Box p="15px" borderRadius="5px" border={"1px solid #29273F"} backgroundColor="brand.bg.200">
                                    <MdNavigateBefore size={"20px"} />

                                </Box>
                                <Box p="15px" borderRadius="5px" border={"1px solid #29273F"} backgroundColor="brand.bg.200">
                                    <MdNavigateNext size={"20px"} />
                                </Box>
                            </Flex>
                        </Flex>

                        <Flex gap={2} sx={{
                                    "@media screen and (max-width: 767px)": {
                                        flexDirection: "column",
                                        alignItems: "center",
                                       gap:10,
                                    }
                                }}>
                            <ManagmentCard />
                            <ManagmentCard />

                        </Flex>
                    </Flex>

                </Flex>
            </Flex>
        </>
    )
}