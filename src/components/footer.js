import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledFooterWrapper = styled.footer`
  grid-column: 2 / -1;
  grid-row: 4 / -1;
  border: 20px solid #2b2b2b;
  height: 50vh;
  width: 84vw;
  background: radial-gradient(#0a0a0a, #000);
  display: grid;
  place-items: center;
  position: relative;
`

function randomValue(max) {
  return Math.floor(Math.random() * Math.floor(max))
}
export const randomMovement = keyframes`
  0% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  10% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  20% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  30% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  50% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  50% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  60% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  70% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  80% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
  100% {
    transform: translate(${randomValue(50)}px, ${randomValue(400)}px );
  }
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

  position: absolute;
  bottom: 40%;
  animation: ${randomMovement} 9s ease infinite;

  &:after {
    content: '';
    height: 30px;
    width: 30px;
    border: 1px solid #513d07;
    border-radius: 50%;
    box-shadow: 0px 0px 129px 3px rgba(81, 61, 7, 0.3), 0px 0px 99px 1px rgba(81, 61, 7, 0.3),
      0px 0px 99px 3px rgba(81, 61, 7, 0.3);
  }
  &:before {
    content: '';
    height: 10px;
    width: 10px;
    border: 1px solid #c49411;
    border-radius: 50%;
    box-shadow: 0px 0px 69px 9px rgba(196, 148, 17, 0.9), 0px 0px 99px 19px rgba(196, 148, 17, 0.6),
      0px 0px 99px 3px rgba(196, 148, 17, 0.6), inset 1px 1px 9px 9px rgba(196, 148, 17, 0.3);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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
