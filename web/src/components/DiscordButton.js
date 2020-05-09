import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import discordLogo from '../images/Discord-Logo-White.svg'

const Button = styled.a`
  background-color: #7289da;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  border-radius: 8px;
  padding: 10px 15px;
  color: white;
  margin-top: 25px;

  &:hover {
    background-color: #5162a0;
  }

  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const DiscordButton = () => {
  const [memberCount, setMemberCount] = useState(0)

  useEffect(async () => {
    const response = await axios.get('https://domaincord.com/.netlify/functions/member-count')
    if (!response) return
    ;(() => setMemberCount(response.data.memberCount))()
  }, [])

  return (
    <Button href="/discord">
      <img src={discordLogo} alt="discord logo" />
      <TextGroup>
        <strong style={{ fontSize: 14 }}>Join the Discord</strong>
        <span style={{ fontSize: 12 }}>{memberCount} members</span>
      </TextGroup>
    </Button>
  )
}

export default DiscordButton
