import React, { ReactNode } from "react";

import * as Types from "./home-article-list.types";
import * as Styles from "./home-article-list.styles";

// TODO: type this

const ArticleList: React.FunctionComponent<Types.ArticleListProps> = ({
  articles
}): JSX.Element => (
  <Styles.ArticlesList>
    {articles.map(({ title, link }) => (
      <Styles.ArticleItem key={link.raw.url}>
        <Styles.ArticleLink forwardedAs="a" href={link.raw.url!}>
          {title}
        </Styles.ArticleLink>
      </Styles.ArticleItem>
    ))}
  </Styles.ArticlesList>
);

export default ArticleList;
