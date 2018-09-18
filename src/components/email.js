import React from 'react'
import styled, { keyframes } from 'styled-components'
import backgroundTexture from '../assets/images/sandpaper.png'
import { electricEmailKeyframe } from '../assets/animations/keyframes'

export const StyledEmailBlock = styled.div`
  grid-column: 2 / -1;
  grid-row: 3 / -1;
  align-self: end;
  transform: translateX(-10%);

  background: url(${backgroundTexture});
  background-color: #1b1b1b;
  width: 200px;
  padding: 5px 10px 5px 10px;
  border-radius: 2px;

  color: #666;
  margin-bottom: 2rem;
  -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);

  z-index: 99;
  cursor: pointer;

  &:hover {
    color: #233f72;

    font-weight: 100;
  }

  a {
    animation: ${electricEmailKeyframe} 6s linear infinite;
    font-size: 0.7rem;
  }
`
