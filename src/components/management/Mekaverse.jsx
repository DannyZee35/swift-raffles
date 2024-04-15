import StyledBox from "../StyledBox"
import { Box, Text, Image, Flex, Tag, Button } from "@chakra-ui/react"
import { TfiDownload } from "react-icons/tfi";




export const Mekaverse=({image,title,date,time,finalized})=>{

    return(

        <>
        <StyledBox   >
        <Flex justifyContent={"space-between"} gap={"80px"}>
            <Flex flexDirection={"column"} gap={2}>
          
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
           <Box sx={{height:'17px',width:'3px',backgroundColor:'#36CD7B'}}>

           </Box>
                <Text color={"#36CD7B"} fontSize={'13px'}>
                    {finalized}
                </Text>
            </Flex>
            </Flex>
 

    <Flex flexDirection={"column"} >
    <Button
                        
                            variant="brand-blue"
                            width="100%"
                             justifyContent="space-between"

                        >
                            Google Sheets
                        </Button>
                        <Button
                          backgroundColor={"transparent"}
                          color={"#726684"}
                             width="100%"
                             justifyContent="space-between"
                             leftIcon={<TfiDownload size="18px" />}

                        >
                          Download CSV
                        </Button>
        </Flex>
 </Flex>
        </StyledBox>
        </>
    )
}