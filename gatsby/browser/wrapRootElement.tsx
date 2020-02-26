import React from "react";
import { css, createGlobalStyle } from "styled-components";
import "normalize.css/normalize.css";
import { ThemeProvider } from "styled-components";

import theme from "../../src/utils/theme/theme";

const GlobalStyle = createGlobalStyle`

`;

const wrapRootElement = ({ element }: any): JSX.Element => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
);

export default wrapRootElement;
