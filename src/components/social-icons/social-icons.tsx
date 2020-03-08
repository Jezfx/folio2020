import React from "react";
import kebabcase from "lodash.kebabcase";

import * as Hooks from "./social-icons.hooks";
import * as Styles from "./social-icons.styles";

const Menu: React.FunctionComponent = (): JSX.Element => {
  const mainMenuLinks = Hooks.useMainMenuLinks();

  const {
    social_media_links
  } = mainMenuLinks.allPrismicGlobal.edges[0].node.data!;

  return (
    <Styles.Container aria-label="Primary Navigation">
      <Styles.List>
        {social_media_links.map(({ link_href, link_text, link_icon }) => (
          <Styles.ListItem key={kebabcase(link_text)}>
            <Styles.Link href={link_href}>
              <Styles.Image src={link_icon.url} />
            </Styles.Link>
          </Styles.ListItem>
        ))}
      </Styles.List>
    </Styles.Container>
  );
};

export default Menu;
