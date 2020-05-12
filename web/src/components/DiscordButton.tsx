import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import discordLogo from '../images/Discord-Logo-White.svg'

interface DiscordButtonModel {
  style: object
}

const DiscordButton = ({style}: DiscordButtonModel) => {
  const [memberCount, setMemberCount] = useState(null)

  const doRequest = async () => {
    const response = await axios.get('/.netlify/functions/user-count')
    if (!response) return
    setMemberCount(response.data.memberCount)
  }

  useEffect(() => {
    doRequest()
  }, [])

  return (
    <Button href="/discord" style={style}>
      <img src={discordLogo} alt="discord logo" />
      <TextGroup>
        <strong style={{ fontSize: 14 }}>Join the Discord</strong>
        { memberCount ? <span style={{ fontSize: 12 }}>{memberCount} members</span> : null }
      </TextGroup>
    </Button>
  )
}

DiscordButton.defaultProps = {
  style: {}
} as Partial<DiscordButtonModel>

const Button = styled.a`
  background-color: #7289da;
  display: inline-block;
  text-decoration: none;
  border-radius: 8px;
  width: 170px;
  height: 50px;
  line-height: 50px;
  color: white;

  &:hover {
    background-color: #5162a0;
  }

  img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-right: 15px;
    vertical-align: middle;
  }
`

const TextGroup = styled.div`
  display: inline-block;
`

export default DiscordButton
