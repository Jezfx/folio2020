import styled, { StyledComponent } from "styled-components";
import { Box } from "rebass";

import { Minion } from "src/components/text/";

export const Container: StyledComponent<any, any, any> = styled(Box)``;

export const Header: StyledComponent<any, any, any> = styled(Minion)`
  border-bottom: solid 1px;
`;
