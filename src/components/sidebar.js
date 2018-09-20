import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { YelectricKeyframe } from '../assets/animations/keyframes'
import { StyledEmailBlock } from './email'
import backgroundTexture from '../assets/images/sandpaper.png'
import ruler from '../assets/images/ruler.png'

const StyledSidebar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  position: sticky;
  top: 0;

  height: 100vh;
  width: 16vw;
  background: url(${backgroundTexture});
  background-color: #111;
  -webkit-box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.6);
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.6);

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`
const StyledRuler = styled.div`
  background-image: url(${ruler});
  background-size: cover;
  background-repeat: no-repeat;

  grid-column: 1 / 2;
  grid-row: 1 / -1;
  opacity: 0.1;
`

const StyledLine = styled.div`
  grid-column: 6 / 6;
  grid-row: 1 / -1;
  width: 10px;
  height: 100vh;
  background: linear-gradient(to right, #0d0d0d, transparent);
  border-right: 1px solid #111;
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(transparent, #233f72);
    display: block;
    height: 160px;
    border-radius: 10px;
    width: 8.1px;
    animation: ${YelectricKeyframe} 9s linear infinite;
  }
`

const Sidebar = () => (
  <StyledSidebar>
    <StyledRuler />
    <StyledEmailBlock>
      <a href="mailto:contactisaacdpierce.com">contact@isaacdpierce.com</a>
    </StyledEmailBlock>
    <StyledLine />
  </StyledSidebar>
)

export default Sidebar
