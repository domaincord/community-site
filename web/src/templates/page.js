import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/'
import PageSection from '../components/PageSection.tsx'
import Hero from '../components/Hero.tsx'
import PortableText from '../components/portableText'
import Wrapper from '../components/Wrapper.tsx'
import SEO from '../components/seo'

const Page = ({ data }) => {
  const page = data.page
  const sections = data.page.sections
  console.log(page)

  const heroData = {
    title: page.heroTitle,
    description: page.heroSubtitle,
    media: page.heroMedia,
    mediaPosition: page.heroMediaPosition,
    cta: page.heroCta,
    backgroundImage: page.heroBgImage.asset.fluid,
    backgroundColor: '#7316a3'
  }

  return (
    <Layout>
      <Hero {...heroData} />
      <SEO title={page.seo.seo_title} description={page.seo.meta_description} />
      <Wrapper>
        <h1 style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: '2.5rem' }}>
          {data.page.heading}
        </h1>
        <PortableText blocks={data.page._rawContent} />
      </Wrapper>
      {sections.map(section => (
        <PageSection key={section._key} {...section} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String!) {
    page: sanityPage(_id: { eq: $id }) {
      heroTitle
      heroSubtitle
      heroCta {
        path
        title
      }
      heroBgImage {
        asset {
          fluid(maxWidth: 2560) {
            ...GatsbySanityImageFluid
          }
        }
      }
      heroMedia {
        ... on SanityMainImage {
          _key
          _type
        }
        ... on SanityVideo {
          id
        }
      }
      heroMediaPosition
      id
      path
      _rawContent(resolveReferences: { maxDepth: 10 })
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
          _key
          title {
            current
          }
          itemStyle
          docItem {
            ... on SanityFeature {
              title
              _id
              _rawDescription
            }
          }
        }
      }
      _rawContent(resolveReferences: { maxDepth: 10 })
      heading
    }
  }
`

export default Page
