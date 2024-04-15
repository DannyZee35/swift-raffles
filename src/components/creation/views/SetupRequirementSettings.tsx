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

import BrandDropzone from "../../BrandDropzone";
import SwitchSettings from "../../SwitchSettings";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import NextLink from "next/link";

export default function SetupRequirementSettings() {
  return (
    <>
      <SimpleGrid columns={3} spacing={6} m="25px"
            sx={{
              "@media screen and (max-width: 400px)": {
                flexDirection:'column',
            
                display:'flex',
          
                 
        
              },
          }}
      >
        <Box>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Verified Email
            </FormLabel>
            <SwitchSettings name="Verified Email" />
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Connect Twitter
            </FormLabel>
            <SwitchSettings name="Verified Email" />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Wallet Requirements
            </FormLabel>
            <SwitchSettings name="Wallet Requirements" />
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Password Protected
            </FormLabel>
            <SwitchSettings name="Password Protected" />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Connect Discord
            </FormLabel>
            <SwitchSettings name="Connect Discord" />
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Require Captcha
            </FormLabel>
            <SwitchSettings name="Require Captcha" />
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
