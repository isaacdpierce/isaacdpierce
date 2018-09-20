import React from 'react'
import styled from 'styled-components'

import backgroundTexture from '../assets/images/sandpaper.png'

export const StyledBrickBox = styled.div`
  grid-column: span 7 / 11;
  grid-row: 2 / 3;
  height: 300px;
  width: 900px;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  background: transparent;
  font-size: 0;
  perspective: 500px;
`

export const StyledBrick = styled.div`
  width: 100%;
  transform: translateX(80%);
  height: 96%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  border-left: 1px solid #2c2c2c;
  border-top: 1px solid #2c2c2c;
  border-bottom: 1px solid #000;
  box-shadow: -2px 3px 2px 2px rgba(0, 0, 0, 0.3);

  z-index: 199;
  background: url(${backgroundTexture});
  background-color: #111;
`
