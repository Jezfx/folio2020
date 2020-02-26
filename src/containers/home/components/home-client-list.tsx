import React, { ReactNode } from "react";

import * as Types from "./home-client-list.types";

const ClientList: React.FunctionComponent<Types.ClientListProps> = ({
  clients
}): JSX.Element => {
  return (
    <ul>
      {clients.map(
        (yearOfWork: Types.ClientList): JSX.Element => {
          const {
            primary: { clients_year },
            items
          } = yearOfWork;

          const clients = items.map(
            (client: Types.ClientType): ReactNode => (
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
};

export default ClientList;
