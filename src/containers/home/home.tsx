import React, { ReactNode } from "react";
// import { RichText, Elements } from "prismic-reactjs";
// import { htmlSerializer } from "src/gatsby/htmlSerializer";

import RichText from "src/components/rich-text";
import SectionWrapper from "src/components/section-wrapper";
import { Paragon, GreatPrimer, BodyCopy, Minion } from "src/components/text";

import * as Hooks from "./home.hooks";
import * as Types from "./home.types";
import * as Styles from "./home.styles";

const renderClientsList = (clientList: Types.ClientList[]): JSX.Element => (
  <ul>
    {clientList.map(
      (yearOfWork: Types.ClientList): ReactNode => {
        const {
          primary: { clients_year },
          items
        } = yearOfWork;

        const clients = items.map(
          (client: Types.ClientItemType): ReactNode => (
            <a href={client.clients_link.url!}>{client.clients_name}</a>
          )
        );

        return (
          <li>
            {clients} <span>{clients_year}</span>
          </li>
        );
      }
    )}
  </ul>
);

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
        {renderClientsList(clientList)}
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
