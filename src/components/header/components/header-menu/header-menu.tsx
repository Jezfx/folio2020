import React from "react";
import kebabcase from "lodash.kebabcase";

import * as Hooks from "./header-menu.hooks";
import * as Styles from "./header-menu.styles";

const Link = (href: string, text: string): JSX.Element => (
  <Styles.ListItem key={kebabcase(text)}>
    <a href={href}>{text}</a>
  </Styles.ListItem>
);

const Menu: React.FunctionComponent = (): JSX.Element => {
  const mainMenuLinks = Hooks.useMainMenuLinks();
  const {
    email_address,
    social_media_links
  } = mainMenuLinks.allPrismicGlobal.edges[0].node.data!;

  return (
    <Styles.Container aria-label="Primary Navigation">
      <Styles.List>
        {social_media_links.map(({ link_href, link_text }) =>
          Link(link_href, link_text)
        )}
        {Link(email_address, email_address)}
      </Styles.List>
    </Styles.Container>
  );
};

export default Menu;
