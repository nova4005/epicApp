import React from "react";
import {
  Button,
  Container,
  Input,
} from "@chakra-ui/react";

function forgotPassword() {
  return (
    <Container p={4}>
      <Input type="text" placeholder="Email" mb={2} />
      <Button colorScheme="purple" variant="solid" w="100%">
        Reset My Password
      </Button>
    </Container>
  );
}

export default forgotPassword;
