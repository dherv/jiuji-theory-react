import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  color: #484848
}
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: var(--color)
  }
`;

export default GlobalStyle;
