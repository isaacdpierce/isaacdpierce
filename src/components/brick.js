import React from 'react'
import styled, { keyframes } from 'styled-components'

import backgroundTexture from '../assets/images/sandpaper.png'
import { XelectricKeyframeNeg, electricPullKeyframe } from '../assets/animations/keyframes'

export const StyledBrickBox = styled.div`
  grid-column: span 7 / 13;
  grid-row: 2 / 3;
  height: 42vh;

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

  &:active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }
`

export const StyledBrick = styled.div`
  width: 100%;
  transform: translateX(80%);
  height: 97%;
  padding: 2rem;

  border-left: 1px solid #2c2c2c;
  border-top: 1px solid #2c2c2c;
  border-bottom: 1px solid #000;
  box-shadow: -1px 2px 2px 2px rgba(0, 0, 0, 0.4);

  z-index: 199;
  background: url(${backgroundTexture});
  background-color: #111;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:before {
    content: '';
    height: 15vh;
    width: 3vw;
    background: radial-gradient(circle at 50% 30%, #164c8c, #0a1e38);
    box-shadow: inset 0px 2px 1px 1px rgba(0, 0, 0, 0.6);
    border: 1px solid #0d0d0d;
    border-radius: 3px;
    display: flex;
    justify-self: flex-start;
    z-index: 99;
    opacity: 1;
    animation: ${electricPullKeyframe} 9s linear infinite backwards;
    position: absolute;
    left: 1.7rem;
  }
  &:after {
    content: 'PULL';
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.3);
    height: 2.6vw;
    width: 14.5vh;
    background: radial-gradient(circle at 50% 30%, #3c86e0, #132944);
    box-shadow: inset 0px -2px 1px 1px rgba(0, 0, 0, 0.5);
    border: 1 px solid #000;
    border-radius: 3px;

    display: flex;
    justify-self: flex-start;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);
    position: absolute;
    left: 0;
    z-index: 0;
  }
`

export const StyledLine = styled.div`
  box-shadow: inset 3px 3px 3px 3px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 2rem;
  left: 0;
  width: 80%;
  height: 10px;
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(to right, #233f72, transparent);
    display: block;
    width: 160px;
    border-radius: 10px;
    height: 8.1px;
    animation: ${XelectricKeyframeNeg} 9s linear infinite backwards;
  }
`

export const StyledLine2 = styled.div`
  box-shadow: inset 3px 3px 3px 1px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 2rem;
  left: 0;
  width: 80%;
  height: 10px;

  border-top: 2px solid rgba(0, 0, 0, 0.5);
  border-left: 2px solid rgba(0, 0, 0, 0.4);
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(to right, #233f72, transparent);
    display: block;
    width: 160px;
    border-radius: 10px;
    height: 8.1px;
    animation: ${XelectricKeyframeNeg} 9s linear infinite backwards;
  }
`

export const StyledScrollTag = styled.aside`
  font-size: 1rem;
  font-family: 'Allerta Stencil', sans-serif;
  color: rgba(255, 255, 255, 0.1);
  position: absolute;
  top: 0;
  left: 25%;
  margin-top: 4px;
`

const StyledBrickText = styled.div`
  padding: 15% 5% 0 5%;
  display: flex;
  max-width: 50vw;
  height: 30vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: scroll;
  font-size: 2.9rem;
  margin-left: 7.5vw;
`

export const BrickText = () => (
  <StyledBrickText>
    An Irish Pub Joke... An Irish man shows up in a pub one day and orders three pints of Guinness.
    He takes sips from each glass until they are empty and calls the bartender for three more. The
    bartender says, 'Sure it's up to yourself, but wouldn't you rather I was bringing them one at a
    time? Then they'll be fresh and cold.' 'Nah...' your man says, ' I'm preferrin' that ye bring
    'em three at a time. You see, me and me two brothers would meet at a pub and drink and have good
    times. Now one is in Australia, the other in Canada and I'm here. We agreed before we split up
    that we'd drink to each other's honour this way.' 'Well,' says the bartender, 'that's a grand
    thing to do, all right. I'll bring the pints as you ask.' Well, time goes on and your man's
    peculiar habit is known and accepted by all the pub regulars. One day though, he comes in and
    orders only two pints. A hush falls over the pub. Naturally, everyone figures something happened
    to one of the brothers. A group of the regulars corner the bartender and finally persuade him to
    find out what happened. With a heavy heart, the bartender brings the two pints and says, 'Here's
    your pints... and let me offer my sincerest condolences. What happened?' The Irish man looks
    extremely puzzled for a moment, and then starts laughing. 'Oh, no, no, no! 'Tis nothing like
    that. You see, I've given up drinking for Lent...'
  </StyledBrickText>
)
