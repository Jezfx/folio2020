import React from "react";
import { Text, TextProps } from "rebass";

const Paragon = (props: TextProps): JSX.Element => (
  <Text
    as="h1"
    color="white"
    variant="paragon"
    className={props.className}
    {...props}
  />
);
const GreatPrimer = (props: TextProps): JSX.Element => (
  <Text
    as="h2"
    color="white"
    variant="greatPrimer"
    className={props.className}
    {...props}
  />
);
const BodyCopy = (props: TextProps): JSX.Element => (
  <Text
    as="p"
    color="nobel"
    variant="bodyCopy"
    className={props.className}
    {...props}
  />
);
const Minion = (props: TextProps): JSX.Element => (
  <Text
    as="p"
    color="cruise"
    variant="minion"
    className={props.className}
    {...props}
  />
);

export { Paragon, GreatPrimer, BodyCopy, Minion };
