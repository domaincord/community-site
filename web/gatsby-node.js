const { isFuture } = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const createPostPages = async (graphql, actions) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const { id, slug = {} } = edge.node
      const path = `/blog/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/post.js'),
        context: { id }
      })
    })
}

const createSanityPages  = async (graphql, actions) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage {
        edges {
          node {
            path
            _id
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []

  pageEdges
    .forEach((edge) => {
      const { _id: id, path } = edge.node

      createPage({
        path,
        component: require.resolve('./src/templates/page.js'),
        context: { id }
      })
    })
}

const createProfilePages = async (graphql, actions) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityProfile {
        edges {
          node {
            _id
            profileType
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const profileEdges = (result.data.allSanityProfile || {}).edges || []

  profileEdges
    .forEach((edge) => {
      const { _id: id, slug, profileType } = edge.node

      createPage({
        path: `/${profileType}/${slug.current ? slug.current : id}`,
        component: require.resolve('./src/templates/profile.js'),
        context: { id }
      })
    })
}

exports.createPages = async ({ graphql, actions }) => {
  await createPostPages(graphql, actions)
  await createSanityPages(graphql, actions)
  await createProfilePages(graphql, actions)
}
