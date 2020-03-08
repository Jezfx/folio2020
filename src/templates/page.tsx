import React from "react";
import { graphql } from "gatsby";

import * as Types from "src/global.types";

import Layout from "src/components/layout";
import Page from "src/containers/page";
import SEO from "src/components/seo";

const PageTemplate = ({ data }: Types.PageTemplateProps): JSX.Element => {
  const { body, hero, page_title } = data.allPrismicPage.edges[0].node.data;

  return (
    <Layout>
      <SEO title={page_title ? page_title : ""} />
      <Page body={body} hero={hero} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    allPrismicPage(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            body {
              ... on PrismicPageBodyContentSection {
                id
                primary {
                  content_section_header
                  content_section_body {
                    raw
                  }
                }
                slice_type
              }
            }
            hero {
              raw
            }
            page_title
          }
        }
      }
    }
  }
`;

export default PageTemplate;
