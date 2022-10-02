import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../components/layout";
import amplifyConfig from "../src/amplify-config";
import { Auth } from "aws-amplify";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  amplifyConfig();
  const [userAuth, setUserAuth] = useState(false);
  Auth.currentAuthenticatedUser()
    .then((user) => {
      if(user) {
        setUserAuth(true);
      } else {
        console.log("No User Found");
      }
    });
  return (
    <ChakraProvider>
      <Layout authenticated={userAuth}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
