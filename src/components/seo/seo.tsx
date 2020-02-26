/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

import { PATHS } from "src/global.constants";

// TODO: add colours
// import { colors } from "src/utils/theme/theme";

// TODO: add typescript and remove the prop types at the bottom
function SEO({ description, lang, meta, title }: any): JSX.Element {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: `${PATHS.root}/`
        },
        {
          property: `og:image`,
          content: `${PATHS.root}${site.siteMetadata.image}`
        },
        {
          property: `og:image:secure_url`,
          content: `${PATHS.root}${site.siteMetadata.image}`
        },
        {
          property: `twitter:card`,
          content: `summary_large_image`
        },
        {
          property: `twitter:url`,
          content: `${PATHS.root}/`
        },
        {
          property: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          property: `twitter:title`,
          content: title
        },
        {
          property: `twitter:description`,
          content: metaDescription
        },
        {
          property: `twitter:image`,
          content: `${PATHS.root}${site.siteMetadata.image}`
        },
        {
          property: `msapplication-TileColor`
          // TODO: add colour
          // content: colors.brandSecondaryDarkest
        },
        {
          property: `theme-color`
          // TODO: add colour
          // content: colors.brandSecondaryDarkest
        }
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  image: ``
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
};

export default SEO;
