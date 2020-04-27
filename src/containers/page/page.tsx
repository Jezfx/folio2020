import React from "react";

import RichText from "src/components/rich-text";
import Slicezone from "src/components/slicezone";
import { GreatPrimer, BodyCopy } from "src/components/text";

import SocialIcons from "src/components/social-icons";

import * as Types from "./page.types";
import * as Styles from "./page.styles";

export default ({ body, hero }: Types.PageProps): JSX.Element => (
  <Styles.Container>
    <Styles.HeroWrapper>
      <>
        <RichText
          content={hero.raw}
          styles={{ heading1: GreatPrimer, heading2: BodyCopy }}
        />
        <Styles.SocialIconsWrapper>
          <SocialIcons />
        </Styles.SocialIconsWrapper>
      </>
    </Styles.HeroWrapper>

    <Slicezone body={body} />
  </Styles.Container>
);
