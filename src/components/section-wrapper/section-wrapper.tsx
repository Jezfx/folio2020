import React from "react";

import * as Styles from "./section-wrapper.styles";
import * as Types from "./section-wrapper.types";

const SectionWrapper: React.FunctionComponent<Types.SectionWrapperProps> = ({
  children,
  title,
  html
}: Types.SectionWrapperProps): JSX.Element => {
  return (
    <Styles.Container as="section">
      <Styles.Header>{title}</Styles.Header>
      {html && (
        <div
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
      )}
      {children && children}
    </Styles.Container>
  );
};

export default SectionWrapper;
