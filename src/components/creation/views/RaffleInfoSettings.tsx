import {
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Grid,
  GridItem,
  Input,
  Box,
  Text,Flex,Button
} from "@chakra-ui/react";

import BrandDropzone from "../../BrandDropzone";
import SwitchSettings from "../../SwitchSettings";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";
export default function RaffleInfoSettings() {
  return (
    <>
      {" "}
      <SimpleGrid columns={3} spacing={6}  m="25px"
          sx={{
            "@media screen and (max-width: 400px)": {
              flexDirection:'column',
            
      
              display:'flex',
                
               justifyContent:"center"
            },
        }}
      >
        <Box>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Raffle Name
            </FormLabel>
            <Input variant="brand" placeholder="Enter Raffle Name" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="11px" fontWeight="semibold">
              Winner Count
            </FormLabel>
            <Input variant="brand" placeholder="Enter Winner Count" />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Vanity URL
            </FormLabel>
            <Input variant="brand" placeholder="Enter Vanity URL" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize="11px" fontWeight="semibold">
              Start Date/Time
            </FormLabel>
            <Input variant="brand" placeholder="Enter Start Date/Time" />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Blockchain
            </FormLabel>
            <Select>
              <option>ETH</option>
              <option>SOL</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontSize="11px" fontWeight="semibold">
              End Date/Time
            </FormLabel>
            <Input variant="brand" placeholder="Enter End Date/Time" />
          </FormControl>
        </Box>
      </SimpleGrid>
      <Box my="22px" borderTop="1px" borderColor="brand.border.100"  m="25px"/>
      {/* Ligne 2 */}
      <SimpleGrid columns={3} spacing={6}  m="25px"     sx={{
                    "@media screen and (max-width: 400px)": {
                      flexDirection:'column',
               
                      display:'flex',
                     
                       justifyContent:"center"
                    },
                }}>
        <Box>
          <FormControl mb="14px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Project Data Source
            </FormLabel>
            <Input variant="brand" placeholder="Enter Raffle Name" />
          </FormControl>

          <BrandDropzone title="Upload Banner" onDrop={() => null} />
        </Box>
        <Box >
          <FormControl mb="14px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Banner URL
            </FormLabel>
            <Input variant="brand" placeholder="Enter Banner URL or" />
          </FormControl>
          <BrandDropzone title="Upload Banner" onDrop={() => null} />
        </Box>
        <Box h="100%">
          <FormControl mb="11px" h="100%">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Description
            </FormLabel>
            <Textarea borderColor="brand.border.100" bg="brand.bg.200" />
          </FormControl>
        </Box>
      </SimpleGrid>
      <Box my="22px" borderTop="1px" borderColor="brand.border.100"  m="25px"/>
      <Grid
        h="fit-content"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}  m="25px"
        sx={{
          "@media screen and (max-width: 400px)": {
            flexDirection:'column',
    
    
            display:'flex',
            
             
             justifyContent:"center"
          },
      }}
      >
        <GridItem colSpan={1}>
          <Text fontWeight="semibold" fontSize="11px">
            Settings
          </Text>
          <SwitchSettings name="Show Team Avatar" mt="11px" mb="5px" />
          <SwitchSettings name="Show Style overrides while editing" />
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl mb="11px" h="100%" w="100%">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Description
            </FormLabel>
            <Textarea
              borderColor="brand.border.100"
              bg="brand.bg.200"
              w="100%"
            />
          </FormControl>
        </GridItem>
      </Grid>
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
    </>
  );
}
