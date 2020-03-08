import styled, { css } from "styled-components";

import { space, breakpoints } from "src/utils/theme/theme";

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

export const SocialIconsWrapper = styled.div`
  @media (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;
