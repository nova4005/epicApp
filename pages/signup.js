import React from 'react';
import NextLink from "next/link";
import { PasswordInput } from './login';
import {
  Button,
  Container,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";

function signup() {
  return (
    <Container p={4}>
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
    </Container>
  );
}

export default signup
