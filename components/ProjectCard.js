import React from "react";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FiTag } from "react-icons/fi";

function ProjectCard({project, ...rest}) {
  return (
    <Box
      role={"group"}
      p={2}
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"relative"}
      zIndex={1}
    >
      <Stack pt={2} align={"left"}>
        <Heading fontSize={"lg"} fontFamily={"heading"} fontWeight={500}>
          {project.name}
        </Heading>
        <Heading
          fontSize={"sm"}
          fontFamily={"body"}
          fontWeight={400}
          color="gray.500"
        >
          (Company Name)
        </Heading>
        <Stack>
          <Link display={"flex"} alignItems={"center"} w="100%" gap={"0.5rem"} fontSize={"sm"}>
            <Icon as={FiTag} /> Add Tag
          </Link>
          <Text fontWeight={400} fontSize={"sm"}>
            This is my body font text 01238.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProjectCard;
