import styled, { StyledComponent } from "styled-components";
import { Paragon, BodyCopy } from "src/components/text";

export const ClientList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ClientItem: StyledComponent<any, any, any> = styled.li``;

export const ClientLink: StyledComponent<any, any, any> = styled(Paragon)`
  text-decoration: none;
  margin-right: 10px !important;
`;

export const ClientYear: StyledComponent<any, any, any> = styled(BodyCopy)``;
