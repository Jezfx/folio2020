import { useStaticQuery, graphql } from "gatsby";
import { HomePageQueryQuery } from "src/graphql.types";

// TODO: check to see if you can split these up into 2 hooks

export const useHomePageQuery = (): HomePageQueryQuery => {
  const useHomePageQuery = useStaticQuery<HomePageQueryQuery>(
    graphql`
      query HomePageQuery {
        prismicHome {
          data {
            hero {
              html
              text
              raw
            }
            body {
              ... on PrismicHomeBodyContentSection {
                primary {
                  icon
                  content_section_header
                  content_section_body {
                    raw
                  }
                }
              }
            }
          }
        }

        allPrismicGlobal {
          edges {
            node {
              data {
                articles {
                  title
                  link {
                    raw
                  }
                }
                body {
                  ... on PrismicGlobalBodyClients {
                    primary {
                      clients_year
                    }
                    items {
                      clients_name
                      clients_link {
                        url
                        link_type
                        raw
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return useHomePageQuery;
};
