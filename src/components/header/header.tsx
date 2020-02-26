import React, { useState } from "react";

import Menu from "./components/header-menu";

import * as Styles from "./header.styles";
import Logo from "./assets/logo.inline.svg";

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.LogoWrapper>
        <Logo />
      </Styles.LogoWrapper>
      <Menu />
    </Styles.Container>
  );
};

export default Header;
