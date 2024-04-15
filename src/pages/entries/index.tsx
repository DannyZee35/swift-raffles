



import {
  Box,
  Text,
  Flex,
  Image,Tag,TagRightIcon,TagLabel
} from "@chakra-ui/react";

import {BarChart} from "../../components/BarChart"
import {LineChart} from "../../components/LineChart"
import {EntriesCards} from "../../components/EntriesCards";

import StyledBox from "../../components/StyledBox";
import { HiChartPie } from "react-icons/hi";
import {Footer} from "../../components/Footer/Footer";


export default function Index() {
  
  return <>
  <Box p={25} >
    <Flex gap={5}  sx={{
          "@media screen and (max-width: 767px)": {
         flexDirection:'column',
       
          }
      }}> 

 
    <Flex flexDirection="column">

   
  <Text fontSize={"20px"} mt={3} mb={2}>
  Entries Overview  </Text>
  <StyledBox  marginBottom={0} width={"550px"} height={"100%"} sx={{
          "@media screen and (max-width: 767px)": {
         width:'100%',
       
          }
      }}>
  <Flex alignItems="center" justifyContent="space-between" >
      <Flex flexDirection="column" alignItems="flex-start"> 
        <Text>
        Winning Entries
        </Text>
        
          
          <Tag color="#726684" bg="transparent"  >
        <TagLabel sx={{fontSize:'14px'}}>Last 7 days</TagLabel>
        <TagRightIcon boxSize="20px" as={HiChartPie} />

      </Tag>
   
      </Flex>
      <Text fontSize="32px" color="#36CD7B">
        21
      </Text>
    </Flex>
    <LineChart/>
  </StyledBox>
  <Text fontSize={"20px"} mt={3} mb={2}>
  Winning Entries By Server
  </Text>
  <StyledBox paddingBottom={0} marginBottom={0}  width={"550px"} height={"100%"} sx={{
          "@media screen and (max-width: 767px)": {
         width:'100%',
       
          }
      }}>
    <BarChart/>
    </StyledBox>
    </Flex>
    <Flex flexDirection={"column"} sx={{
    
    }}>
    <Text fontSize={"20px"} mt={3} mb={2}>
    Winner Logs / Entry Logs
      </Text>
      <StyledBox backgroundColor="#03001B" >
        <Flex gap={3}    sx={{
         
          "@media screen and (max-width: 767px)": {
         flexDirection:'column',
         
          }
      }}>

      
        <Flex flexDirection="column" gap={4}>
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        </Flex>
    <Box borderRight="20px solid #120F2A"></Box>
        <Flex flexDirection="column" gap={4}>
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        <EntriesCards title={"Mekaverse"} image={"/assets/meka.png"} date={"11th March"} time={"11:23:11 AM"} finalized={"Finalized"}
      tag="Winner" tag2="Meta Discoverer" color="#36CD7B" backgroundColor="rgba(54, 205, 123, 0.2)" color2="#36CD7B"
      /> 
        </Flex>
        </Flex>
      </StyledBox>
    </Flex>
    </Flex>
    <Footer/>
    </Box>
   </>;
}
