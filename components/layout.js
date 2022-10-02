import Sidebar from "./sidebar";
import Footer from "./footer";
import Header from "./header";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

export default function Layout({ authenticated, children }) {
  return (
    <Box>
      <Grid templateColumns="200px 1fr" gap={6}>
        <GridItem>
          <Sidebar authenticated={authenticated} />
        </GridItem>
        <GridItem p="3" h="100%">
          <main>{children}</main>
        </GridItem>
      </Grid>
    </Box>
  );
}
