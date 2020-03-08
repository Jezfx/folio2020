import { PrismicStructuredTextType } from "src/graphql.types";

import { PageBodyType } from "src/global.types";

export interface PageProps {
  body: PageBodyType;
  hero: PrismicStructuredTextType;
}
