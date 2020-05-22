import React from 'react'
import { graphql } from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import { toPlainText } from '../lib/helpers'
import Layout from '../layouts'
import Wrapper from '../components/Wrapper'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      _rawDescription
      categories {
        _key
        title
        _rawDescription
      }
      title
      image {
        asset {
          fluid(maxWidth: 1170) {
            ...GatsbySanityImageFluid
          }
        }
      }
      tags
      video {
        title
        url
      }
      slug {
        current
      }
      _rawContent(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        avatar {
          alt
          asset {
            fixed(width: 100) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && (
        <SEO
          title={post.title || 'Untitled'}
          description={toPlainText(post._rawDescription)}
          image={post.image}
        />
      )}

      {errors && (
        <Wrapper>
          <GraphQLErrorList errors={errors} />
        </Wrapper>
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate
