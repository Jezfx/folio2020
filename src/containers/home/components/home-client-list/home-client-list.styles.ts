import styled, { StyledComponent } from "styled-components";
import { Paragon, BodyCopy } from "src/components/text";

import { breakpoints } from "src/utils/theme/theme";

export const ClientList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ClientItem: StyledComponent<any, any, any> = styled.li`
  margin-bottom: 20px;

  @media (min-width: ${breakpoints.medium}) {
    display: flex;
    align-items: baseline;
    margin-bottom: 0;
  }
`;

export const ClientLink: StyledComponent<any, any, any> = styled(Paragon)`
  text-decoration: none;
  margin-right: 10px !important;

  @media (min-width: ${breakpoints.medium}) {
    line-height: inherit;
  }
`;

export const ClientYear: StyledComponent<any, any, any> = styled(BodyCopy)`
  display: block;

  @media (min-width: ${breakpoints.medium}) {
    order: 1;
  }
`;
