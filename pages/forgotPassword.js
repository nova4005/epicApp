import React from "react";
import { Button, Container, Flex, Input, Img, Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

function forgotPassword() {
  return (
    <Container h={"100vh"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        h={"100%"}
      >
        <Box>
          <Img src="logo-full.png" alt="Epicteq" mb={"2rem"} />
          <Input type="text" placeholder="Email" mb={2} />
          <Button colorScheme="purple" variant="solid" w="100%">
            Reset My Password
          </Button>
        </Box>
      </Flex>
    </Container>
  );
}

forgotPassword.getLayout = function getLayout(page, auth, theme) {
  return <ChakraProvider theme={theme}>{page}</ChakraProvider>;
};

export default forgotPassword;
