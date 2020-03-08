import React from "react";

import SectionWrapper from "src/components/section-wrapper";

import * as Types from "./slicezone-content_section.types";
import * as Styles from "./slicezone-content_section.styles";

export default ({ id, input }: Types.ContentSectionProps): JSX.Element => {
  return (
    <Styles.Container key={id}>
      <SectionWrapper
        title={input.primary.content_section_header}
        icon={input.primary.icon}
        content={input.primary.content_section_body.raw}
      />
    </Styles.Container>
  );
};
