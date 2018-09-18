import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Logo from './logo'
import Menu from './menu'
import backgroundTexture from '../assets/images/tx-concrete-slice.png'

const StyledHeader = styled.nav`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  padding: 0 21px 0 21px;
  align-items: center;
  height: 42px;
  background: url(${backgroundTexture}), #0a0a0a;
  -webkit-box-shadow: 0px 7px 11px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 7px 11px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 7px 11px -4px rgba(0, 0, 0, 0.75);
  z-index: 99;
  position: sticky;
  top: 0;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Logo siteTitle={siteTitle} />
    <Menu />
  </StyledHeader>
)

export default Header
