import React from "react";
import kebabcase from "lodash.kebabcase";

import * as Hooks from "./header-menu.hooks";
import * as Styles from "./header-menu.styles";

const Link = (href: string, text: string, isLast = false): JSX.Element => (
  <Styles.ListItem key={kebabcase(text)}>
    <Styles.Link
      href={href}
      forwardedAs="a"
      isLogo={isLast}
      fontSize={[14, 14, 14]}
    >
      {text}
    </Styles.Link>
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
        {Link(email_address, email_address, true)}
      </Styles.List>
    </Styles.Container>
  );
};

export default Menu;
