import React from 'react'
import styled from 'styled-components'
import { XelectricKeyframe } from '../assets/animations/keyframes'
import backgroundTexture from '../assets/images/sandpaper.png'
import bgVideo from '../assets/videos/video-1.mp4'
import { videoKeyframe } from '../assets/animations/keyframes'

const StyledWelcome = styled.div`
  grid-column: 1 / span 8;
  grid-row: 2 / span 9;
  width: 100%;
  height: 100%;
  margin: 2rem 0 0 2rem;
  border-radius: 3px;
  background-image: url(${backgroundTexture});
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  -webkit-box-shadow: inset 3px 3px 2px 1px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: inset 3px 3px 2px 1px rgba(0, 0, 0, 0.6);
  box-shadow: inset 3px 3px 2px 1px rgba(0, 0, 0, 0.6);
  border-right: 1px solid #111;
  border-bottom: 1px solid #111;

  position: relative;
  display: grid;
  place-items: center;
`
const StyledVideoContainer = styled.div`
  position: absolute;

  height: 75%;
  width: 90%;
  overflow: hidden;
  background-color: #0b0b0b;
  border-left: 6px solid rgba(255, 255, 255, 0.01);
  border-top: 6px solid rgba(255, 255, 255, 0.01);
  border-right: 1px solid #111;
  border-bottom: 1px solid #111;
  transform: translateY(-24px);
`

const StyledVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation: ${videoKeyframe} 9s linear infinite;
`
const StyledText = styled.div`
  word-wrap: break-word;
  font-size: 1.8rem;
  font-weight: 100;
  text-shadow: 1px 1px #000;
  text-align: center;
  z-index: 1;
  width: 80%;
  max-width: 32rem;
  line-height: 1.5;
  letter-spacing: 1.3px;
`
const StyledLine = styled.div`
  box-shadow: inset 3px 3px 3px 1px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 2rem;
  left: 5%;
  width: 90%;
  height: 10px;
  /* background: linear-gradient(#0d0d0d, transparent); */

  border-top: 2px solid rgba(0, 0, 0, 0.5);
  border-left: 2px solid rgba(0, 0, 0, 0.4);
  border-right: 1px solid rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  overflow: hidden;

  &::before {
    content: '';
    background: linear-gradient(to right, transparent, #233f72);
    display: block;
    width: 160px;
    border-radius: 10px;
    height: 8.1px;
    animation-delay: 3s;
    animation: ${XelectricKeyframe} 9s linear infinite backwards;
  }
`

const Welcome = () => (
  <StyledWelcome>
    <StyledVideoContainer>
      <StyledVideo autoPlay muted loop id="myVideo">
        <source src={bgVideo} type="video/mp4" />
      </StyledVideo>
    </StyledVideoContainer>
    <StyledText>
      <p>I build fast, beautiful websites for inspired people.</p>
    </StyledText>
    <StyledLine />
  </StyledWelcome>
)

export default Welcome
