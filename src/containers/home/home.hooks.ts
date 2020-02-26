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
              raw {
                type
                text
              }
            }
            body {
              primary {
                content_section_header
                content_section_body {
                  html
                }
              }
            }
          }
        }

        allPrismicGlobal {
          edges {
            node {
              data {
                body {
                  primary {
                    clients_year
                  }
                  items {
                    clients_name
                    clients_link {
                      url
                      link_type
                      raw {
                        url
                        link_type
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
