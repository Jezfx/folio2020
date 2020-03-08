import styled, { StyledComponent } from "styled-components";

export const Container = styled.nav`
  margin-top: 40px;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const ListItem = styled.li``;

export const Link: StyledComponent<any, any, any> = styled.a`
  text-decoration: none;
`;

export const Image: StyledComponent<any, any, any> = styled.img`
  width: 22px;
  margin-right: 27px;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;
