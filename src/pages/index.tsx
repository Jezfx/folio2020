import React from "react";

import Layout from "src/components/layout";
import Home from "src/containers/home";
import SEO from "src/components/seo";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO title={"Home"} />
    <Home />
  </Layout>
);

export default IndexPage;
