import React from 'react'
import styled, { keyframes } from 'styled-components'
import { randomMovement } from '../assets/animations/keyframes'
import { RandomArbValue, randomIntValue } from '../assets/helpers/math'

const StyledFooterWrapper = styled.footer`
  grid-column: 2 / -1;
  grid-row: 4 / -1;
  border: 20px solid #0d0d0d;
  height: 50vh;
  width: 84vw;
  background: radial-gradient(#0a0a0a, #000);
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: inset 9px 0px 9px 9px rgba(0, 0, 0, 0.5);
`
// transform: translate(${randomIntValue(0, 60)});

const randomMovementB = x => keyframes`

  0% {
    transform: translate(${x}px, -50px) 
    scale(${RandomArbValue(0.5, 1.5)});
    opacity: ${RandomArbValue(0.3, 1)};
  }
  50% {
    transform: translate(${x + randomIntValue(-600, 600)}px, ${x + randomIntValue(-60, 60)}) 
    scale(${RandomArbValue(0.5, 1.5)});
    opacity: ${RandomArbValue(0.3, 1)};
  }
  100% {
    transform: 
    translate(${randomIntValue(-510, x)}px, ${randomIntValue(-200, x)}px)
    scale(${RandomArbValue(0.3, 1)});
    opacity:${RandomArbValue(0.3, 1)};
  } 
`

// props.number.x
// props.number.y

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
  bottom: ${randomIntValue(0, 60)}px;
  right: ${randomIntValue(0, 600)}px;
  animation: ${props => randomMovementB(props.x)} 5s ease infinite alternate both;

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

  &:nth-child(1) {
    background: radial-gradient(blue, green);
  }

  &:nth-child(3) {
    background: radial-gradient(yellow, green);
  }
`

const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooterLight x={300} />
    <StyledFooterLight x={-150} />
    <StyledFooterLight x={10} />
    {/* <StyledFooterLight />
    <StyledFooterLight />
    <StyledFooterLight />
    <StyledFooterLight />
    <StyledFooterLight />
    <StyledFooterLight /> */}
  </StyledFooterWrapper>
)
export default Footer

// Create a black void with floating lights. based on downloaded image
// Lights will start as faded grey and begin to glow blue timed with
// other animations

// Create a fun mini article about Danner boots and have a picture of my boots from top down.
