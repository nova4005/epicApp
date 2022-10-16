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
import { getProjects } from "../src/projectController";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/layout";
import { ChakraProvider } from "@chakra-ui/react";

function Projects() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    getProjects().then((project) => {
      setProjects(project);
    });
  }, []);

  return (
    <div>
      <Heading fontWeight={"500"}>My Projects</Heading>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {projects &&
          projects.map((project) => (
            <GridItem key={project.uuid}>
              <ProjectCard project={project} />
            </GridItem>
          ))}
      </Grid>
    </div>
  );
}

Projects.getLayout = function getLayout(page, auth, theme) {
  return (
    <ChakraProvider theme={theme}>
      <Layout authenticated={auth}>{page}</Layout>
    </ChakraProvider>
  );
};

export default Projects;
