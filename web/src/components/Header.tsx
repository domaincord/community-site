import React from 'react'
import { Link } from 'gatsby'
import Icon from './icon'
import styled from 'styled-components'
import Logo from './Logo'
import Wrapper from './Wrapper'
import DiscordButton from './DiscordButton'

interface MenuModel {
  _key: string
  path: string
  title: string
  isInternal: boolean
}

interface HeaderModel {
  hideDrawer: () => void
  showDrawer: () => void
  isDrawerOpen: () => boolean
  siteTitle: string
  menu: Array<MenuModel>
}

const Header = ({ showDrawer, hideDrawer, isDrawerOpen, siteTitle, menu }: HeaderModel) => {

  const buttonClicked = () => {
    if (!isDrawerOpen) {
      showDrawer()
    } else {
      hideDrawer()
    }
  }

  const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding: ${ !isDrawerOpen ? '15px 20px' : '12px'};
    ${ isDrawerOpen ? {width: '100%'} : null }

    &:hover {
      color: #778ad4;
    }
  `

  return (
    <>
    <StyledHeader>
      <Wrapper>
        <NavWrap>
          <BrandWrap>
            <Logo siteTitle={siteTitle} />
            { !isDrawerOpen ? <nav>
              { menu.map(link => (
                link.isInternal
                  ? (
                    <NavLink key={link._key} to={link.path}>
                  {link.title}
                </NavLink>
                  )
                  : (<a key={link._key} href={link.path}>
                  {link.title}
                </a>)
              )) }
            </nav> : null }
          </BrandWrap>
          <ButtonGroup>
            <DiscordButton style={{ display: isDrawerOpen ? 'none' : 'block' }} />
            <Button onClick={buttonClicked}>
              <Icon symbol="hamburger" />
            </Button>
          </ButtonGroup>
        </NavWrap>
      </Wrapper>
    </StyledHeader>
    { isDrawerOpen ? (
        <Drawer>
            <CloseButton onClick={buttonClicked}>Close Menu</CloseButton>
            <nav>
            {menu.map(link => (
                <NavLink key={link._key} to={link.path}>
                  {link.title}
                </NavLink>
              ))}
              <DiscordButton style={{marginTop: 25}} />
            </nav>
        </Drawer>
      ) : null }
    </>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #161616;
  position: relative;
`

const NavWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BrandWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  nav { display: block; }

  @media only screen and (max-width: 768px) {
    nav { display: none; }
  }
`

const Button = styled.button`
  display: none;
  width: 70px;
  height: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 48px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: #7289DA;
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`

const Drawer = styled.div`
  background-color: #1e1e1e;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  nav {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const CloseButton = styled.button`
  width: 100%;
  height: 50px;
  background: black;
  border: none;
  color: white;
  font-size: 14px;

  &:focus {
    outline: none;
  }

  &:hover {
    backgroundColor: #7289DA;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export default Header
