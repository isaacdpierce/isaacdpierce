import React from 'react'
import styled from 'styled-components'

const StyledFooterWrapper = styled.footer`
  grid-column: 2 / -1;
  grid-row: 4 / -1;
  border: 20px solid #2b2b2b;
  height: 50vh;
  width: 84vw;
  background: radial-gradient(#0a0a0a, #000);
  display: grid;
  place-items: center;
`
const StyledFooterLight = styled.footer`
  height: 100px;
  width: 100px;
  background: transparent;
  border: 1px solid #513d07;
  border-radius: 50%;
  box-shadow: 0px 0px 129px 3px rgba(81, 61, 7, 0.3), 0px 0px 99px 1px rgba(81, 61, 7, 0.3),
    0px 0px 99px 3px rgba(81, 61, 7, 0.3);

  display: grid;
  place-items: center;

  &:after {
    height: 10px;
    width: 10px;
    border: 1px solid #513d07;
    border-radius: 50%;
    box-shadow: 0px 0px 129px 3px rgba(81, 61, 7, 0.3), 0px 0px 99px 1px rgba(81, 61, 7, 0.3),
      0px 0px 99px 3px rgba(81, 61, 7, 0.3);
  }
`

const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooterLight />
  </StyledFooterWrapper>
)
export default Footer

// Create a black void with floating lights. based on downloaded image
// Lights will start as faded grey and begin to glow blue timed with
// other animations

// Create a fun mini article about Danner boots and have a picture of my boots from top down.
