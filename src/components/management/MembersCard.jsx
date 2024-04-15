import { Box, Flex, Image,Text } from "@chakra-ui/react"

import   {MdDelete}  from "react-icons/md";


export const MembersCard=({text,image,owner,code,icon})=>{

    return(
    <Box backgroundColor="#120F2A" border="1px solid #29273F" px={2} borderRadius={"5px"} width={"400px"}  sx={{
        "@media screen and (max-width: 400px)": {
           width:'200px',
     
        },
    }} > 
    <Flex alignItems={"center"} justifyContent={"space-evenly"} sx={{
    "@media screen and (max-width: 767px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
       p:2,
       gap:2
    },
}} >
        <Image
           alt="pfp"
           src={image}
           style={{
               borderRadius: "4px",
               objectFit: "cover",
               height: "50px",
               width: "50px",
           }}
           sx={{
            "@media screen and (max-width: 767px)": {
                  height: "20px",
               width: "20px",
            },
        }}
        />
        <Text fontWeight={"bold"} fontSize={14}>
            {text}
        </Text>
        <Text fontSize={12} color={"#7C829F"}>
            {owner}
        </Text>
        <Text fontSize={12} color={"#7C829F"}>
            {code}
        </Text>
        <MdDelete size={"20px"}/>
    </Flex>

        </Box>
    )
}