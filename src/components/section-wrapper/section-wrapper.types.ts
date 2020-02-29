import { Maybe, Scalars } from "src/graphql.types";
import { css, CSSProp } from "styled-components";

export interface SectionWrapperProps {
  title: string;
  icon?: string;
  styles?: CSSProp;
  children?: React.ReactChild;
  content?: Maybe<Scalars["JSON"]>;
}
