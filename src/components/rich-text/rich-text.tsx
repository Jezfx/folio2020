import React from "react";
import { RichText } from "prismic-reactjs";

import * as Types from "./rich-text.types";

const elementTypes: Types.ElementTypes = {
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
  paragraph: "p",
  preformatted: "pre",
  strong: "strong",
  em: "em"
};

export default ({ content, styles }) => {
  const htmlSerializer = function(type, element, content, children, key) {
    console.log(type, element, content, children, key);

    const hasMatch = !!styles[type];

    if (hasMatch) {
      const Component = styles[type];
      return <Component as={elementTypes[type]} children={children} />;
    }

    return null;
  };

  return <RichText render={content} htmlSerializer={htmlSerializer} />;
};
