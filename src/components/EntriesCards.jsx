import StyledBox from "./StyledBox"
import { Box, Text, Image, Flex, Tag, Button } from "@chakra-ui/react"
import { TfiDownload } from "react-icons/tfi";




export const EntriesCards=({image,title,date,time,finalized,tag,color,backgroundColor,tag2,color2})=>{

    return(

        <>
        <StyledBox  width={"310px"} sx={{
          "@media screen and (max-width: 767px)": {
         width:'100%',
       
          }
      }}>
        <Flex justifyContent={"space-between"} >
            <Flex flexDirection={"column"} gap={1}>
          
            <Flex gap={2}>
            <Image
                        alt="pfp"
                        src={image}


                        style={{
                         
                            objectFit: "cover",
                            height: "20px",
                            width: "20px",
                        }}
                    />
                <Text fontSize={'14px'}>
                    {title}
                </Text>
            </Flex>
            <Flex gap={2}>
            <Text fontSize={'13px'}>
                    {date}
                </Text>
                <Text color={"#726684"} fontSize={'13px'}>
                    {time}
                </Text>
            </Flex>
            <Flex gap={2}>
           <Box sx={{height:'17px',width:'3px',borderRadius:'2px'}} backgroundColor={color2}>

           </Box>
                <Text color={color} fontSize={'13px'}>
                    {finalized}
                </Text>
            </Flex>
            </Flex>
 

    <Flex flexDirection={"column"} >
 
                      <Text color={color} backgroundColor={backgroundColor} textAlign="center" borderRadius="5px" mb={1} fontSize="13px">
                        {tag}
                      </Text>
                      <Text fontSize="13px" color="#726684" >
                        {tag2}
                      </Text>
        </Flex>
 </Flex>
        </StyledBox>
        </>
    )
}