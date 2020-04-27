import styled, { StyledComponent } from "styled-components";

import { GreatPrimer } from "src/components/text";
import { breakpoints } from "src/utils/theme/theme";

export { List as ArticlesList } from "../../home.styles";

export const ArticleItem: StyledComponent<any, any, any> = styled.li`
  margin-bottom: 25px;

  @media (min-width: ${breakpoints.medium}) {
    margin-bottom: 0;
  }
`;

export const ArticleLink: StyledComponent<any, any, any> = styled(GreatPrimer)`
  text-decoration: none;
`;
