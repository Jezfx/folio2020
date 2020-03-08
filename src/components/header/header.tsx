import React, { useState } from "react";

import { Link } from "gatsby";

import Menu from "./components/header-menu";

import * as Styles from "./header.styles";
import Logo from "./assets/logo.inline.svg";

const Header: React.FunctionComponent = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.LogoWrapper>
        <Link to="/">
          <Logo />
        </Link>
      </Styles.LogoWrapper>
      <Menu />
    </Styles.Container>
  );
};

export default Header;
