import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../assets/images/logo.png'

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

const LogoLong = ({ siteTitle }) => (
  <LogoWrapper>
    <StyledLogoImage src={logo} alt="Isaac Pierce Logo" />
    <StyledLogoLink to="/">{siteTitle}</StyledLogoLink>
  </LogoWrapper>
)

export default LogoLong
