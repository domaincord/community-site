import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/'
import PageSection from '../components/page-section'
import Hero from '../components/hero'
import Helmet from 'react-helmet'

const Page = ({ data }) => {
  const page = data.page
  console.log(page)

  const heroData = {
    title: page.heroTitle,
    description: page.heroSubtitle,
    media: page.heroMedia,
    mediaPosition: page.heroMediaPosition,
    cta: page.heroCta,
    background: page.heroBgImage ? `url(${page.heroBgImage.asset.url})` : '#7316a3'
  }

  return (
    <Layout>
      <Hero {...heroData} />
      {page.sections.map(section => (
        <PageSection key={section._key} data={section} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPage(_id: { eq: $id }) {
      _rawContent
      heroTitle
      heroSubtitle
      id
      path
      seo {
        seo_title
        meta_description
      }
      title
      sections {
        itemsPerRow
        fluidItems
        color
        _key
        fullWidth
        heading
        stickerPosition
        items {
          title {
            current
          }
          itemStyle
          docItem {
            ... on SanityPost {
              _id
            }
          }
        }
      }
    }
  }
`

export default Page
