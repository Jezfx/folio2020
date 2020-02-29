import React from "react";

import RichText from "src/components/rich-text";
import SectionWrapper from "src/components/section-wrapper";
import { GreatPrimer, BodyCopy } from "src/components/text";

import ClientList from "./components/home-client-list";
import ArticleList from "./components/home-article-list";

import * as Hooks from "./home.hooks";
import * as Types from "./home.types";
import * as Styles from "./home.styles";

export default (): JSX.Element => {
  const { prismicHome, allPrismicGlobal } = Hooks.useHomePageQuery();
  const {
    articles: articlesList,
    body: clientList
  } = allPrismicGlobal.edges[0].node.data;

  return (
    <Styles.Container>
      <Styles.HeroWrapper>
        <RichText
          content={prismicHome.data.hero.raw}
          styles={{ heading1: GreatPrimer, heading2: BodyCopy }}
        />
      </Styles.HeroWrapper>

      <SectionWrapper title="Work" icon={`👨‍💻`}>
        <ClientList clients={clientList} />
      </SectionWrapper>

      <SectionWrapper title="Articles" icon={`📖`}>
        <ArticleList articles={articlesList} />
      </SectionWrapper>

      {/* TODO: typecheck the section arg  */}
      {prismicHome.data.body.map(section => (
        <SectionWrapper
          title={section.primary.content_section_header}
          icon={section.primary.icon}
          content={section.primary.content_section_body.raw}
          styles={Styles.CustomSectionWrapperStyles}
        />
      ))}
    </Styles.Container>
  );
};
