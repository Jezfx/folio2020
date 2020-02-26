import styled from "styled-components";

export const Container = styled.nav``;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  li:last-child {
    margin-left: 20px;
  }
`;

export const ListItem = styled.li`
  padding: 0 11px;
`;
