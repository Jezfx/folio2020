import React from "react";
import { RichText } from "prismic-reactjs";

import { htmlSerializer } from "src/gatsby/htmlSerializer";

import * as Styles from "./section-wrapper.styles";
import * as Types from "./section-wrapper.types";

const SectionWrapper: React.FunctionComponent<Types.SectionWrapperProps> = ({
  children,
  title,
  icon,
  styles,
  content
}: Types.SectionWrapperProps): JSX.Element => {
  return (
    <Styles.Container as="section">
      <Styles.Header>
        {icon && <Styles.Icon>{icon}</Styles.Icon>}
        {title}
      </Styles.Header>
      {content && (
        <Styles.ContentWrapper css={styles}>
          <RichText render={content} htmlSerializer={htmlSerializer} />
        </Styles.ContentWrapper>
      )}
      {children && children}
    </Styles.Container>
  );
};

export default SectionWrapper;
