import { Box, Flex, Image,Text } from "@chakra-ui/react"

import   {MdDelete}  from "react-icons/md";





export const WalletsCard=({text,image,code})=>{

    return(

        <>
         <Box backgroundColor="#1B1833" border="1px solid #29273F" mt={3} p={4} borderRadius={"5px"} width={"100%"}  sx={{
        "@media screen and (max-width: 400px)": {
           width:'100%',
           p:'2px'
        },
    }} > 
    <Flex alignItems={"center"} justifyContent={"space-between"} sx={{
    "@media screen and (max-width: 767px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
       p:2,
       gap:2
    },
}} >
    <Flex alignItems={"center"} justifyContent={"space-evenly"} gap={10}
    sx={{
        "@media screen and (max-width: 767px)": {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
           p:2,
           gap:2
        },
    }} 
    >

        

  
        <Image
           alt="pfp"
           src={image}
           style={{
               borderRadius: "4px",
               objectFit: "cover",
               height: "30px",
               width: "30px",
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
         
        <Text fontSize={14}  >
            {code}
        </Text>
        </Flex>
        <Box marginRight='20px'  sx={{
    "@media screen and (max-width: 767px)": {
        marginRight:'0'
    },
}} >
        <MdDelete size={"20px"} style={{color:"#6A6E81"}}/>

        </Box>
    </Flex>

        </Box>
        </>
    )
}