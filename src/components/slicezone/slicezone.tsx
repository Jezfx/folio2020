import React from "react";

import ContentSection from "./components/slicezone-content-section";

import * as Types from "./slicezone.types";

export default ({ body }: Types.SlicezoneProps): JSX.Element => {
  if (!!body) {
    const slice = body.map(
      (slice): JSX.Element => {
        switch (slice.slice_type) {
          case "content_section":
            return (
              <ContentSection key={slice.id} id={slice.id} input={slice} />
            );
          default:
            return null;
        }
      }
    );
    return <div>{slice}</div>;
  } else {
    return null;
  }
};
