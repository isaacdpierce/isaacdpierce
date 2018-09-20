import styled from 'styled-components'
import backgroundTexture from '../assets/images/sandpaper.png'
import { electricEmailKeyframe } from '../assets/animations/keyframes'

export const StyledEmailBlock = styled.div`
  grid-column: 1 / -1;
  grid-row: 6 / -1;
  align-self: center;

  overflow: hidden;
  background: url(${backgroundTexture});
  background-color: #1b1b1b;
  width: 16.5vw;
  height: 2rem;
  padding: 5px 10px 5px 10px;
  border-radius: 2px;
  color: #666;
  -webkit-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 11px 0px rgba(0, 0, 0, 0.75);

  display: flex;
  justify-content: center;
  z-index: 99;
  cursor: pointer;

  a {
    animation: ${electricEmailKeyframe} 9s linear infinite;
    font-size: 0.8rem;
    transition: all 0.5s ease-in-out;
    &:hover {
      filter: brightness(150%);
    }
  }
`
