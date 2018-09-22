import React from 'react'
import styled from 'styled-components'
import { randomMovementB } from '../assets/animations/keyframes'

const StyledFooterWrapper = styled.footer`
  grid-column: 2 / -1;
  grid-row: 4 / -1;
  border: 20px solid #0d0d0d;
  height: 50vh;
  width: 84vw;
  background-color: #000;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: inset 9px 0px 9px 9px rgba(0, 0, 0, 0.5);
`

const StyledFooterLight = styled.footer`
  height: 100px;
  width: 100px;
  border: 1px solid #513d07;
  border-radius: 50%;
  box-shadow: 0px 0px 129px 3px rgba(81, 61, 7, 0.3), 0px 0px 99px 1px rgba(81, 61, 7, 0.3),
    0px 0px 99px 3px rgba(81, 61, 7, 0.3);

  display: grid;
  place-items: center;
  position: absolute;
  bottom: 50%;
  right: 50%;

  animation: ${props => randomMovementB(props.x)} 180s ease-in-out infinite alternate both;

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
      0px 0px 99px 3px rgba(196, 148, 17, 0.6), inset 1px 1px 9px 9px rgba(196, 148, 17, 0.5);

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Footer = () => (
  <StyledFooterWrapper>
    <StyledFooterLight x={500} />
    <StyledFooterLight x={500} />
    <StyledFooterLight x={400} />
    <StyledFooterLight x={400} />
    <StyledFooterLight x={300} />
    <StyledFooterLight x={300} />
    <StyledFooterLight x={200} />
    <StyledFooterLight x={200} />
    <StyledFooterLight x={100} />
    <StyledFooterLight x={100} />
    <StyledFooterLight x={50} />
    <StyledFooterLight x={50} />
    <StyledFooterLight x={20} />
    <StyledFooterLight x={20} />
    <StyledFooterLight x={10} />
    <StyledFooterLight x={10} />
    <StyledFooterLight x={-10} />
    <StyledFooterLight x={-10} />
    <StyledFooterLight x={-20} />
    <StyledFooterLight x={-20} />
    <StyledFooterLight x={-50} />
    <StyledFooterLight x={-50} />
    <StyledFooterLight x={-100} />
    <StyledFooterLight x={-100} />
    <StyledFooterLight x={-200} />
    <StyledFooterLight x={-200} />
    <StyledFooterLight x={-300} />
    <StyledFooterLight x={-300} />
    <StyledFooterLight x={-400} />
    <StyledFooterLight x={-400} />
    <StyledFooterLight x={-500} />
    <StyledFooterLight x={-500} />
    <StyledFooterLight x={-600} />
  </StyledFooterWrapper>
)
export default Footer

// Create a black void with floating lights. based on downloaded image
// Lights will start as faded grey and begin to glow blue timed with
// other animations

// Create a fun mini article about Danner boots and have a picture of my boots from top down.
