import React from "react";

import RichText from "src/components/rich-text";
import SectionWrapper from "src/components/section-wrapper";
import { Paragon, GreatPrimer, BodyCopy, Minion } from "src/components/text";

import ClientList from "./components/home-client-list";

import * as Hooks from "./home.hooks";
import * as Types from "./home.types";
import * as Styles from "./home.styles";

export default (): JSX.Element => {
  const { prismicHome, allPrismicGlobal } = Hooks.useHomePageQuery();
  const clientList = allPrismicGlobal.edges[0].node.data.body;

  return (
    <Styles.Container>
      <RichText
        content={prismicHome.data.hero.raw}
        styles={{ heading1: GreatPrimer, heading2: BodyCopy }}
      />

      <Paragon>Paragon</Paragon>
      <GreatPrimer>Great Primer</GreatPrimer>
      <BodyCopy>Body Text</BodyCopy>
      <Minion>minon</Minion>

      <SectionWrapper title="👨‍💻 Work">
        <ClientList clients={clientList} />
      </SectionWrapper>

      {/* TODO: typecheck the section arg  */}
      {prismicHome.data.body.map(section => (
        <SectionWrapper
          title={section.primary.content_section_header}
          html={section.primary.content_section_body.html}
        />
      ))}
    </Styles.Container>
  );
};
