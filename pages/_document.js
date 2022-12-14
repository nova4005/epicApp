import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "./theme.js";

export default function Document() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} data-theme="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
