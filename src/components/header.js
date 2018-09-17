import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Menu from './menu'
import logo from '../assets/images/logo.png'
import stoneTexture from '../assets/images/tx-concrete-slice.png'

const StyledHeader = styled.nav`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 21px 0 21px;
  align-items: center;
  height: 42px;
  background: url(${stoneTexture}), #0a0a0a;
  -webkit-box-shadow: 0px 7px 11px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 11px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 11px -4px rgba(0, 0, 0, 0.75);
  z-index: 99;
  position: sticky;
  top: 0;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledLogoLink = styled(Link)`
  font-family: 'Cormorant Garamond', serif;
  font-weight: 100;
  font-size: 1.2rem;
  color: #999;
  padding: 0 15px;
`
const StyledLogoImage = styled.img`
  height: 33px;
  margin: 0 0 0 1rem;
  -webkit-box-shadow: 0px 0px 1px 1px rgba(252, 252, 252, 0.7);
  -moz-box-shadow: 0px 0px 1px 1px rgba(252, 252, 252, 0.7);
  box-shadow: 0px 0px 1px 1px rgba(252, 252, 252, 0.7);
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <LogoWrapper>
      <StyledLogoImage src={logo} alt="Isaac Pierce Logo" />
      <StyledLogoLink to="/">{siteTitle}</StyledLogoLink>
    </LogoWrapper>
    <Menu />
  </StyledHeader>
)

export default Header
