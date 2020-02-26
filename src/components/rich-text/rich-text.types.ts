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
