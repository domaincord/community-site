import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

interface LogoModel {
  siteTitle: string
  showWordMark: boolean
}

const Logo = ({ siteTitle, showWordMark = false }: LogoModel) => (
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
          <span style={{ marginRight: 15, color: 'white', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: `'Lovelo', sans-serif`, textTransform: 'uppercase', transform: `translateY(3px)` }}>{siteTitle}</span>
        ) : null}
      </StyledLink>
    )}
  />
)

Logo.defaultProps = {} as Partial<LogoModel>

const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
`

export default Logo
