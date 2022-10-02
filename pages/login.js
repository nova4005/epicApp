import React, { useState } from "react";
import NextLink from "next/link";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

export function PasswordInput(userInput, setUserInput) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Enter password"
        value={userInput.Password}
        onChange={(event) =>
          setUserInput({ ...userInput, Password: event.target.value })
        }
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

function Login() {
  const [userInput, setUserInput] = useState({
    Username: "",
    Password: "",
  });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(
        userInput.Username,
        userInput.Password
      ).then(() => {
        router.push("/");
      });
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <Container p={4}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          mb={2}
          value={userInput.Username}
          onChange={(event) =>
            setUserInput({ ...userInput, Username: event.target.value })
          }
        />
        {PasswordInput(userInput, setUserInput)}
        <NextLink href="/forgotPassword" passHref>
          <Link color="purple">Forgot Password</Link>
        </NextLink>
        <Button
          type="submit"
          colorScheme="purple"
          variant="solid"
          w="100%"
          mt={3}
        >
          Login
        </Button>
      </form>
      <Text>
        Need an account?{" "}
        <NextLink href="signup">
          <Link color="purple">Sign up</Link>
        </NextLink>
      </Text>
    </Container>
  );
}

export default Login;
