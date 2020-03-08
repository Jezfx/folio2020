import styled, { StyledComponent } from "styled-components";
import { Paragon } from "src/components/text";

import { breakpoints } from "src/utils/theme/theme";

export const ArticlesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ArticleItem: StyledComponent<any, any, any> = styled.li`
  margin-bottom: 25px;

  @media (min-width: ${breakpoints.medium}) {
    margin-bottom: 0;
  }
`;

export const ArticleLink: StyledComponent<any, any, any> = styled(Paragon)`
  text-decoration: none;
`;
