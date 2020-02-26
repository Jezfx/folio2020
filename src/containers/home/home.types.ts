import {
  PrismicGlobalBodyClientsPrimary,
  Maybe,
  PrismicGlobalBodyClientsItems
} from "../../graphql.types";

export interface ServiceType {
  image: string;
  header: string;
  link: string;
  copy: string;
}

export interface ClientList {
  __typename?: "PrismicGlobalBodyClients";
  items?: Maybe<Array<Maybe<PrismicGlobalBodyClientsItems>>>;
  primary?: Maybe<PrismicGlobalBodyClientsPrimary>;
}

export type ClientItemType = PrismicGlobalBodyClientsItems;
