import {
  PrismicGlobalBodyClientsPrimaryType,
  PrismicGlobalBodyClientsItemType,
  Maybe
} from "src/graphql.types";

export interface ClientListProps {
  clients: ClientList[];
}

export interface ClientList {
  __typename?: "PrismicGlobalBodyClients";
  items?: Maybe<Array<Maybe<PrismicGlobalBodyClientsItemType>>>;
  primary?: Maybe<PrismicGlobalBodyClientsPrimaryType>;
}

export type ClientType = PrismicGlobalBodyClientsItemType;
