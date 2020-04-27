import React, { ReactNode } from "react";

import theme from "src/utils/theme/theme";

import * as Types from "./home-client-list.types";
import * as Styles from "./home-client-list.styles";

// TODO: clean this up a bit
const ClientList: React.FunctionComponent<Types.ClientListProps> = ({
  clients,
}): JSX.Element => {
  return (
    <Styles.ClientList>
      {clients.map(
        (yearOfWork: Types.ClientList, index): JSX.Element => {
          const {
            primary: { clients_year },
            items,
          } = yearOfWork;

          const clients = items.map(
            (
              { clients_link, clients_name }: Types.ClientType,
              index: number
            ): ReactNode => {
              const lastItem = items.length === index + 1;
              return (
                <Styles.ClientLink
                  forwardedAs="a"
                  href={clients_link.url!}
                  key={clients_link.url}
                  lineHeight={theme.text.paragon.lineHeight}
                >
                  {clients_name}
                  {!lastItem && `,`}
                </Styles.ClientLink>
              );
            }
          );

          return (
            <Styles.ClientItem key={index}>
              <Styles.ClientYear
                color="cruise"
                forwardedAs="span"
                fontSize={["small", "small", "small"]}
              >
                {clients_year}
              </Styles.ClientYear>
              {clients}{" "}
            </Styles.ClientItem>
          );
        }
      )}
    </Styles.ClientList>
  );
};

export default ClientList;
