import React from "react";

import RichText from "src/components/rich-text";
import Slicezone from "src/components/slicezone";
import SocialIcons from "src/components/social-icons";
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
    body: clientList,
  } = allPrismicGlobal.edges[0].node.data;

  return (
    <Styles.Container>
      <Styles.HeroWrapper>
        <>
          <RichText
            content={prismicHome.data.hero.raw}
            styles={{ heading2: BodyCopy }}
          />
          <Styles.SocialIconsWrapper>
            <SocialIcons />
          </Styles.SocialIconsWrapper>
        </>
      </Styles.HeroWrapper>

      <SectionWrapper title="Work" icon={`👨‍💻`}>
        <ClientList clients={clientList} />
      </SectionWrapper>

      <SectionWrapper title="Articles" icon={`📖`}>
        <ArticleList articles={articlesList} />
      </SectionWrapper>

      <Slicezone body={prismicHome.data.body} />
    </Styles.Container>
  );
};
