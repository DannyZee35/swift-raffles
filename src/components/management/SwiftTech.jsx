import { Box ,Flex,Button} from "@chakra-ui/react"
import StyledBox from "../StyledBox"
import { Mekaverse } from "./Mekaverse"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";
export const SwiftTech=()=>{

    return(
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
<Flex gap={5}     m="20px" sx={{
                    "@media screen and (max-width: 400px)": {
                      flexDirection:'column',
                      marginLeft:"12px",
                     
                      display:'flex',
                       alignItems:'center',
                       
                       justifyContent:"center"
                    },
                }}>


<StyledBox  sx={{height:'250px',width:'450px',
"@media screen and (max-width: 400px)": {
     
     width:"100%",
     height:"100%"
  },}}>
                   

                </StyledBox>
                <Box style={{ borderRight: "1px solid #29273F" }}>

</Box>
<Flex flexDirection={"column"} gap={3}>
<Mekaverse title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}/>
<Mekaverse title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}/>
<Mekaverse title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}/>
<Mekaverse title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}/>
<Mekaverse title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}/>

    </Flex>

                </Flex>
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