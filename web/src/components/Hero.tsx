import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import DiscordButton from './DiscordButton'
import BackgroundImage, { IFluidObject } from 'gatsby-background-image'

interface HeroModel {
  extraClasses?: Array<String>
  media?: object
  mediaPosition?: string
  title: string
  description: string
  cta: object
  backgroundImage: IFluidObject
  backgroundColor: string
}

const Hero = ({title, description, media, mediaPosition, cta, backgroundImage, backgroundColor, extraClasses}: HeroModel) => (
  <StyledHero id="hero"
    Tag="section"
    className={extraClasses.join(' ')}
    fluid={backgroundImage}
    backgroundColor={backgroundColor}
  >
    <Wrapper>
      <p
        style={{
          fontFamily: `sans-serif`,
          fontSize: 36,
          color: 'white',
          fontWeight: 'bold',
          margin: 0
        }}
      >
        {title}
      </p>
      <p style={{marginTop: 0, marginBottom: 25, color: 'white'}}>
        {description}
      </p>
      <DiscordButton {...cta} />
    </Wrapper>
    <Overlay />
  </StyledHero>
)

Hero.defaultProps = {
  extraClasses: [],
} as Partial<HeroModel>

const StyledHero = styled(BackgroundImage)`
  display: flex;
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;
  position: relative;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`

export default Hero
