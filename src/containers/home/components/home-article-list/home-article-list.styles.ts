import styled, { StyledComponent } from "styled-components";
import { Paragon } from "src/components/text";

export const ArticlesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ArticleItem: StyledComponent<any, any, any> = styled.li``;

export const ArticleLink: StyledComponent<any, any, any> = styled(Paragon)`
  text-decoration: none;
`;
