import { ReactNode } from "react";
import { Maybe, PrismicStructuredTextType, Scalars } from "src/graphql.types";

export type ElementTypeOption =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "paragraph"
  | "preformatted"
  | "strong"
  | "em";

export type ElementTypes = {
  [option in ElementTypeOption]: string;
};

// TODO: Fix this typing
//www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards

export interface RichTextProps {
  content: Maybe<Scalars["JSON"]>;
  styles: { [option in ElementTypeOption]: any };
}
