import styled, { StyledComponent } from "styled-components";
import { Box } from "rebass";
import { space } from "styled-system";

import { widths, breakpoints } from "src/utils/theme/theme";

// TODO: try and remove those important tags

export const MaxWidthContainer: StyledComponent<any, any, any> = styled(Box)`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto !important;
  margin-right: auto !important;
  max-width: ${(props: any): any => props.maxWidth || `${widths.container}`};

  @media only screen and (min-width: calc(${widths.container} + 40px)) {
    padding-left: 0;
    padding-right: 0;
  }

  ${space}
`;
