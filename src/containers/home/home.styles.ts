import styled, { css } from "styled-components";

import { space } from "src/utils/theme/theme";

export const Container = styled.div``;

export const HeroWrapper = styled.div`
  max-width: 680px;
  margin-bottom: ${space[7]}px;

  h1 {
    margin-bottom: ${space[4]}px;
  }
`;

export const CustomSectionWrapperStyles = css`
  max-width: 480px;
`;
