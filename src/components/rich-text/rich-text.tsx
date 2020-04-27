import React from "react";
import { RichText } from "prismic-reactjs";
import { htmlSerializer as defaultSerializer } from "src/gatsby/htmlSerializer";

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
  em: "em",
};

export default ({ content, styles }: Types.RichTextProps) => {
  const htmlSerializer = function(
    type: Types.ElementTypeOption,
    element: any,
    content: any,
    children: any,
    key: number
  ) {
    const hasMatch = !!styles[type];

    if (hasMatch) {
      const Component = styles[type];
      return (
        <Component key={key} as={elementTypes[type]} children={children} />
      );
    }

    return defaultSerializer(type, element, content, children, key);
  };

  return <RichText render={content} htmlSerializer={htmlSerializer} />;
};
