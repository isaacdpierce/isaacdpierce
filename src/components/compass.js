import React from 'react'
import styled from 'styled-components'
import compass from '../assets/images/compass.png'

const StyledCompass = styled.div`
  grid-column: 6 / 12;
  grid-row: 5 / 12;
  transform: translate(42%, 6%);
  background-image: url(${compass});
  background-size: contain;
  height: 50vw;
  width: 50vw;
  opacity: 0.03;
  z-index: 99;
  transition: filter, opacity 0.5s ease-in-out;
  &:hover {
    filter: brightness(150%);
    opacity: 0.06;
  }
`
export default StyledCompass
