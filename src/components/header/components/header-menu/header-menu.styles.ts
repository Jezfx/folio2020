import styled, { StyledComponent } from "styled-components";
import { BodyCopy } from "src/components/text";

export const Container = styled.nav``;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  li:last-child {
    margin-left: 20px;

    a {
      padding-right: 0;
    }
  }
`;

export const ListItem = styled.li`
  padding: 0 11px;
`;

export const Link: StyledComponent<any, any, any> = styled(BodyCopy)`
  padding: 0 20px;
  text-decoration: none;

  ${({ isLogo }: any): any =>
    isLogo &&
    `
    color: transparent !important;
    background-image: linear-gradient(90deg, #00ACF6 0%, #00CBEC 29%, #00FCD7 84%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  `}

  &:hover {
    color: #fff;
  }
`;
