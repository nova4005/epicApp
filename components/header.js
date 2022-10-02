import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

function Header() {
  return (
    <Box
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
    >
      <h2>Header</h2>
    </Box>
  );
}

export default Header;
