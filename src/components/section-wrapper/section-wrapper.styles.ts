import styled, { StyledComponent } from "styled-components";
import Color from "color";
import { Box } from "rebass";

import { Minion } from "src/components/text/";

import { fontSizes, colors } from "src/utils/theme/theme";

export const Container: StyledComponent<any, any, any> = styled(Box)`
  margin-bottom: 60px;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header: StyledComponent<any, any, any> = styled(Minion)`
  padding-bottom: 8px;
  margin-bottom: 20px !important;
  border-bottom: solid 1px
    ${Color(colors.clearDay)
      .alpha(0.5)
      .string()};
`;

export const Icon: StyledComponent<any, any, any> = styled.span`
  margin-right: 5px;
  font-size: ${fontSizes.base}px;
`;

export const ContentWrapper: StyledComponent<any, any, any> = styled(Box)`
  padding-top: 20px;
  max-width: 680px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 30px;
  }
`;
