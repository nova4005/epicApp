import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useColorMode, IconButton, Icon } from "@chakra-ui/react";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      size="lg"
      w="full"
      colorScheme="purple"
      icon={<Icon fontSize="24" as={colorMode === "light" ? FiMoon : FiSun} />}
    />
  );
}

export default ThemeToggle;
