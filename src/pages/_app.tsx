import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";
import { Box, ChakraProvider,useMediaQuery,useDisclosure ,Input } from "@chakra-ui/react";
import theme from "../theme/theme";
import Head from "next/head";
import HeaderDesktop from "../components/Header";
import { AiOutlineMenu } from "react-icons/ai";

const MyApp: AppType<{ session: Session | null }> = ({
  
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [isLargerThanLg] = useMediaQuery("(min-width: 992px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Swift Raffle</title>
          <meta name="description" content="Swift raffles" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
       
        <Box className=" ">
          <HeaderDesktop />
          
        </Box>

            
        <Box px="8%">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </SessionProvider>
    
  );
};

export default MyApp;
