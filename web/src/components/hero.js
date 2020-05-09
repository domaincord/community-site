import React from 'react'
import styled from 'styled-components'
import DiscordButton from './DiscordButton'
import bgImage from '../images/hal-gatewood-OgvqXGL7XO4-unsplash.jpg'

const HeroBanner = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 0;
  position: relative;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 2;
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

const Hero = ({title, description, media, mediaPosition, cta, background}) => {
  return (
    <HeroBanner>
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
        <p style={{ margin: 0, color: 'white' }}>
          {description}
        </p>
        <DiscordButton />
      </Wrapper>
      <Overlay />
    </HeroBanner>
  )
}

export default Hero
