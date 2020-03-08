const path = require("path");
const website = require("./config/website");
// const prismicHtmlSerializer = require("./src/gatsby/htmlSerializer");
const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix;

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    image: website.image,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./src/graphql.types.ts`,
        codegenDelay: 100000
      }
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "mynewportfolio",
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          page: require("./src/schemas/page.json"),
          home: require("./src/schemas/home.json"),
          global: require("./src/schemas/global.json")
        }
        // htmlSerializer: () => prismicHtmlSerializer
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "./src")
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
