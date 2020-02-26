import React from "react";

import Layout from "src/components/layout";
import Home from "src/containers/home";
import SEO from "src/components/seo";

import { colors } from "src/utils/theme/theme";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title={"Home"} />
    {/* <SEO title={title ? title : "People"} /> */}
    <Home />
  </Layout>
);

export default IndexPage;
