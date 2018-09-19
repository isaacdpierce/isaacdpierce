import styled from 'styled-components'
import { sphereKeyframe } from '../assets/animations/keyframes'

export const StyledSphere = styled.section`
  grid-column: span 2 / 12;
  grid-row: 3 / span 2;
  transform: translateY(-1rem);
  height: 13vw;
  width: 13vw;
  background: rgba(255, 255, 255, 0.05);

  border-left: 1px solid rgba(255, 255, 255, 0.05);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  border-right: 1px solid rgba(0, 0, 0, 0.7);

  -webkit-box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 0, 0.4);

  display: grid;
  place-items: center;
`

export const StyledCircle = styled.button`
  font-family: Fira Sans, Droid Sans, Roboto, Oxygen, Helvetica Neue, sans-serif;
  font-size: 1.5rem;
  outline: none;
  padding: 0;
 
  display: inline-block;
  color:  rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  height: 11vw;
  width: 11vw;
  margin: 0;
  border: 1px solid #111;
  background: radial-gradient(circle at 30% 30%, #2062b2, #000);
  position: relative;
  transition: all .5s ease-in-out;

  -webkit-box-shadow: 3px 6px 17px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 3px 6px 17px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 3px 6px 17px 2px rgba(0, 0, 0, 0.3);

 }

  &:after {
    
    content: '';
    display: flex;

   justify-content: center;
   align-items: center;
    border-radius: inherit;
    margin: 0 auto;
    height: 10.6vw;
    width: 10.6vw;
    background: radial-gradient(circle at 30% 30%, #2980e8, #000);
    animation: ${sphereKeyframe} 9s linear infinite;
    transition: filter .2s ease-in-out;
    
 
  }
  &:hover {
    filter: brightness(120%);
  }
   &:active {
    transform: scale(.99);
    filter: brightness(96%);
   }
  }
`
