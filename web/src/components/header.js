import React from 'react'
import { Link } from 'gatsby'
import Icon from './icon'
import styled from 'styled-components'
import Logo from './logo'

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #161616;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 1170px;
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
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 15px 20px;

  &:hover {
    color: #778ad4;
  }
`

const Header = ({ onHideNav, onShowNav, showNav, siteTitle, menu }) => (
  <StyledHeader>
    <Wrapper>
      <BrandWrap>
        <Logo siteTitle={siteTitle} />
        <nav>
          {menu.map(link => (
            <NavLink key={link._key} to={link.path}>
              {link.title}
            </NavLink>
          ))}
        </nav>
      </BrandWrap>
      <button onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol="hamburger" />
      </button>
    </Wrapper>
  </StyledHeader>
)

export default Header
