import React from "react";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/styled/global";
import "destyle.css";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Saira Stencil One:300,400,700", "sans-serif"],
  },
});
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
