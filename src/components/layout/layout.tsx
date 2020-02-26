import React from "react";

import Header from "src/components/header";
import Footer from "src/components/footer";

import * as Types from "./layout.types";
import * as Styles from "./layout.styles";

const Layout: React.FunctionComponent<Types.LayoutProps> = ({
  children
}: Types.LayoutProps): JSX.Element => {
  return (
    <Styles.Container>
      <Header />
      {children}
      <Footer />
    </Styles.Container>
  );
};

export default Layout;
