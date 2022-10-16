import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../components/layout";
import amplifyConfig from "../src/amplify-config";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  amplifyConfig();
  const [userAuth, setUserAuth] = useState(false);
  Auth.currentAuthenticatedUser().then((user) => {
    if (user) {
      setUserAuth(true);
    } else {
      console.log("No User Found");
    }
  });

  const theme = extendTheme({
    fonts: {
      body: "Lato, system-ui, sans-serif",
      heading: "Rubik, serif",
      mono: "Roboto Mono, monospace",
    },
  });

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />, userAuth, theme);
}

export default MyApp;
