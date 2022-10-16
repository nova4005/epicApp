import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { getTasks } from "../src/taskController";
import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";

function Tasks() {
  const [tasks, setTasks] = useState(null);
  useEffect(() => {
    getTasks().then((task) => {
      setTasks(task);
    });
  }, []);

  return (
    <div>
      <p>Tasks</p>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {tasks &&
          tasks.map((task) => (
            <GridItem key={task.uuid}>
              <Box
                role={"group"}
                p={6}
                maxW={"330px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                pos={"relative"}
                zIndex={1}
              >
                <Stack pt={10} align={"center"}>
                  <Heading
                    fontSize={"2xl"}
                    fontFamily={"body"}
                    fontWeight={500}
                  >
                    {task.name}
                  </Heading>
                  <Stack direction={"row"} align={"center"}>
                    <Text fontWeight={800} fontSize={"xl"}>
                      {task.title}
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </GridItem>
          ))}
      </Grid>
    </div>
  );
}

Tasks.getLayout = function getLayout(page, auth, theme) {
  return (
    <ChakraProvider theme={theme}>
      <Layout authenticated={auth}>{page}</Layout>
    </ChakraProvider>
  );
};

export default Tasks;
