import { useStaticQuery, graphql } from "gatsby";
import { MainMenuLinksQuery } from "src/graphql.types";

export const useMainMenuLinks = (): MainMenuLinksQuery => {
  const allPrismicGlobal = useStaticQuery<MainMenuLinksQuery>(
    graphql`
      query MainMenuLinks {
        allPrismicGlobal {
          edges {
            node {
              data {
                social_media_links {
                  link_text
                  link_href
                }
                email_address
              }
            }
          }
        }
      }
    `
  );
  return allPrismicGlobal;
};
