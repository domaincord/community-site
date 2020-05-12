import React from 'react'
import styled from 'styled-components'
import PortableText from './portableText'
import Wrapper from './Wrapper'

// interface SectionModel {
//   data: Object
// }

const PageSection = props => {
    const { fullWidth, heading, items, itemsPerRow} = props

    const StyledSection = styled.section`
      width: 100%;
      margin: 0 auto;
      max-width: ${fullWidth ? '100%' : '1170px'};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    `

    const Card = styled.div`
      padding: 10px;
      background-color: white;
    `

    const CardGroup = styled.div`
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
    `

    const ContentBlock = styled.div`
      width: calc((100%) / ${itemsPerRow});
      max-width: 568px;
      height: 250px;

      @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    `

    return (
      <StyledSection>
            { heading ? <h2 style={{alignSelf: 'center', fontWeight: 'bold', fontSize: '2rem'}}>{heading}</h2> : null }
            <CardGroup>
            { items.length > 0 
              ? items.map(item => (
                <ContentBlock key={item._key}>
                  <Card>
                    <h4 style={{fontFamily: `'Lato', sans-serif`, fontSize: '1.25rem', margin: 0}}>{item.docItem[0].title}</h4>
                    <PortableText style={{maxWidth: 960}} blocks={item.docItem[0]._rawDescription}></PortableText>
                  </Card>
                </ContentBlock>
              ))
              : null
            }
            </CardGroup>
      </StyledSection>
    )
}

//PageSection.defaultProps = {} as Partial<SectionModel>

export default PageSection
