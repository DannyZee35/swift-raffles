import { Box, Text } from "@chakra-ui/react";
import RaffleEnter from "../../components/raffle/RaffleEnter";

import RaffleInfo from "../../components/raffle/RaffleInfo";
import RaffleOthers from "../../components/raffle/RaffleOthers";

export default function Index() {
  return (
    <Box>
      <Box mt="25px" mb="10px">
        <Text fontWeight="bold" fontSize="20px">
          Raffle Information
        </Text>
      </Box>
      <Box className="block lg:flex">
        <RaffleInfo />
        <Box className="mt-4 lg:mt-0" w="20px" />
        <Box className="w-full lg:w-1/2">
          <RaffleEnter />
          <Box h="20px" />

          <RaffleOthers />
        </Box>
      </Box>
    </Box>
  );
}
