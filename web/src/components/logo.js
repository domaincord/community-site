import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
`

const Logo = ({ siteTitle, showWordMark = false }) => (
  <StaticQuery
    query={graphql`
      {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 30) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <StyledLink to="/">
        <Img
          fadeIn={false}
          fixed={data.file.childImageSharp.fixed}
          style={{
            marginRight: 20
          }}
        />
        {showWordMark && siteTitle ? (
          <h1 style={{ marginRight: 15, color: 'white' }}>{siteTitle}</h1>
        ) : null}
      </StyledLink>
    )}
  />
)

export default Logo
