import React from 'react'
import styled from 'styled-components'
import PortableText from './portableText'
import { graphql, StaticQuery } from 'gatsby'

interface FeatureModel {}

const Feature = ({data}) => {
  return (
    <StyledFeature>
        <StaticQuery 
            query={graphql`
                {
                    allSanityFeature(filter: {featType: {eq: "features"}}) {
                    edges {
                        node {
                            _key
                            _rawDescription
                            color
                            title
                            icon
                        }
                    }
                }
                }
            `}
            render={data => (
                data.allSanityFeature.edges.map(edge => <PortableText blocks={edge.node._rawDescription} />)
            )}
        />
    </StyledFeature>
  )
}

Feature.defaultProps = {} as Partial<FeatureModel>

const StyledFeature = styled.div`

`

export default Feature
