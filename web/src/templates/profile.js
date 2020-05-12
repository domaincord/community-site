import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layouts/'
import Wrapper from '../components/Wrapper'
import PortableText from '../components/portableText'

const Profile = ({ data }) => {
  const profile = data.profile
  console.log(profile)

  return (
    <Layout>
      <Wrapper>
        <h1>{profile.title}</h1>
        {profile._rawDescription ? <PortableText blocks={profile._rawDescription} /> : null}
        {profile._rawContent ? <PortableText blocks={profile._rawContent} /> : null}
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ProfileQuery($id: String!) {
    profile: sanityProfile(_id: { eq: $id }) {
      id
      title
      _rawDescription(resolveReferences: { maxDepth: 10 })
      _rawContent(resolveReferences: { maxDepth: 10 })
      socialLinks {
        icon
        url
        _key
      }
      slug {
        current
      }
      projects {
        _key
        altUrl
        _rawDescription(resolveReferences: { maxDepth: 10 })
        url
        title
        domain
      }
    }
  }
`

export default Profile
