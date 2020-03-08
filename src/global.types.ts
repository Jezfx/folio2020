import {
  PageBySlugQuery,
  Maybe,
  PrismicPageBodyContentSection
} from "./graphql.types";

export interface PageTemplateProps {
  data: PageBySlugQuery;
}

export type PageBodyType = Maybe<
  Array<
    Maybe<
      Pick<PrismicPageBodyContentSection, "id" | "slice_type" | "slice_label">
    >
  >
>;
