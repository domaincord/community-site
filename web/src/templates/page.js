import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/'
import PageSection from '../components/PageSection'
import Hero from '../components/Hero'
import PortableText from '../components/portableText'
import Wrapper from '../components/Wrapper'

const Page = ({data}) => {
  const page = data.page
  const sections = data.page.sections
  console.log(page)

  const heroData = {
    title: page.heroTitle,
    description: page.heroSubtitle,
    media: page.heroMedia,
    mediaPosition: page.heroMediaPosition,
    cta: page.heroCta,
    background: page.heroBgImage ? {
      backgroundImage: `url(${page.heroBgImage.asset.fluid.src})`
    } : {
      backgroundColor: '#7316a3'
    }
  }

  return (
    <Layout>
      <Hero {...heroData} />
      <Wrapper>
        <h1 style={{alignSelf: 'center', fontWeight: 'bold', fontSize: '2.5rem'}}>{data.page.heading}</h1>
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
              src
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
      _rawContent(resolveReferences: {maxDepth: 10})
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
            ... on SanityFeature {
              title
              _id
              _rawDescription
            }
          }
        }
      }
      _rawContent(resolveReferences:{maxDepth: 10})
      heading
    }
  }
`

export default Page
