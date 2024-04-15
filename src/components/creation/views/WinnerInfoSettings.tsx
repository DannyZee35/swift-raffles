import {
  SimpleGrid,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Grid,
  GridItem,
  Flex,
  Input,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";

import BrandDropzone from "../../BrandDropzone";
import SwitchSettings from "../../SwitchSettings";

export default function WinnerInfoSettings() {
  return (
    <>
      <SimpleGrid columns={3} spacing={6} m="25px"
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
              Private Info for winners
            </FormLabel>
            <Textarea
              borderColor="brand.border.100"
              bg="brand.bg.200"
              placeholder="Enter private information"
            />
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Direct to Contract
            </FormLabel>
            <SwitchSettings name="Direct to Contract" />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="11px" h="100%">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Public Info for winners
            </FormLabel>
            <Textarea
              borderColor="brand.border.100"
              bg="brand.bg.200"
              placeholder="Enter public information"
            />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="11px" h="100%">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Award Invite Codes
            </FormLabel>
            <Textarea
              borderColor="brand.border.100"
              bg="brand.bg.200"
              placeholder="Enter Codes"
            />
          </FormControl>
        </Box>
      </SimpleGrid>
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
