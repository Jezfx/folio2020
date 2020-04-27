const path = require("path");

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createPages(graphql, createPage);

  /**
   * Pages
   */
  async function createPages(graphql, createPage) {
    const pages = await graphql(`
      {
        allPrismicPage {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `);

    pages.data.allPrismicPage.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.uid}`,
        component: path.resolve("src/templates/page.tsx"),
        context: {
          uid: edge.node.uid,
        },
      });
    });
  }
};
