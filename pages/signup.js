import React from "react";
import NextLink from "next/link";
import { PasswordInput } from "./login";
import {
  Button,
  Container,
  Input,
  Link,
  Text,
  Flex,
  Box,
  Img,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function Signup() {
  return (
    <Container h={"100vh"}>
      <Flex justifyContent={"center"} alignItems={"center"} h={"100%"}>
        <Box>
          <Img src="logo-full.png" alt="Epicteq" mb={"2rem"} />
          <Input type="text" placeholder="Email" mb={2} />
          {PasswordInput()}
          <Button colorScheme="purple" variant="solid" w="100%" mt={3}>
            Login
          </Button>
          <Text>
            Already have an account?{" "}
            <NextLink href="login">
              <Link color="purple">Sign in</Link>
            </NextLink>
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

Signup.getLayout = function getLayout(page, auth, theme) {
  return <ChakraProvider theme={theme}>{page}</ChakraProvider>;
};

export default Signup;
