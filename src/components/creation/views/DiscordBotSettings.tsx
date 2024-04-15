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

export default function DiscordBotSettings() {
  return (
    <>
      {" "}
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
              Auto Finalize
            </FormLabel>

            <SwitchSettings name="Activate Auto Finalize" />
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Announcement Channel
            </FormLabel>
            <Select variant="brand" placeholder="Select channel">
              <option>ETH</option>
              <option>SOL</option>
            </Select>
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Create Winners Thread
            </FormLabel>
            <SwitchSettings name="Activate Create Winners Thread" />
          </FormControl>
        </Box>
        <Box>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Auto Announce
            </FormLabel>
            <SwitchSettings name="Activate Auto Announce" />
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Winner channel
            </FormLabel>
            <Select variant="brand" placeholder="Select channel">
              <option>ETH</option>
              <option>SOL</option>
            </Select>
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Create Winners Role
            </FormLabel>
            <SwitchSettings name="Activate Create Winners Role" />
          </FormControl>
        </Box>
        <Box > 
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Connect discord bot
            </FormLabel>
            <Flex>
              <SwitchSettings name="Connect discord bot" w="66%" mr="10px" />
              <Button variant="brand-blue" w="34%">
                Connect
              </Button>
            </Flex>
          </FormControl>
          <FormControl mb="11px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Mint Reminder Channel
            </FormLabel>
            <Select variant="brand" placeholder="Select channel">
              <option>ETH</option>
              <option>SOL</option>
            </Select>
          </FormControl>
        </Box>
      </SimpleGrid>
      <Box my="22px" borderTop="1px" borderColor="brand.border.100" m="25px" />
      {/* Ligne 2 */}
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
          <FormControl mb="14px">
            <FormLabel fontSize="11px" fontWeight="semibold">
              Project Data Source
            </FormLabel>
            <Input variant="brand" placeholder="Enter Raffle Name" />
          </FormControl>

          <BrandDropzone title="Upload Banner" onDrop={() => null} />
        </Box>
        <Box>
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
