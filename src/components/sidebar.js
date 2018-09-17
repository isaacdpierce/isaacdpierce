import React from 'react'
import styled from 'styled-components'
import backgroundTexture from '../assets/images/sandpaper.png'
import ruler from '../assets/images/ruler.png'

const StyledSidebar = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / -1;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: #0f0f0f;

  /* background-color: ; */
  -webkit-box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.2);

  &::before {
    position: absolute;
    content: '';
    background: url(${backgroundTexture});
    opacity: 0.1;
    height: 100%;
    width: 100%;
  }
`
const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;

  overflow: hidden;
`
const StyledRuler = styled.img`
  grid-column: 1 / span 1;
  grid-row: 1 / -1;
  height: 100%;
  width: 100%;
  opacity: 0.1;
`

const StyledEmail = styled.a`
  grid-column: 1 / -1;
  grid-row: 3 / -1;
  align-self: end;
  justify-self: center;
  padding-bottom: 2rem;
`

const Sidebar = () => (
  <StyledSidebar>
    <StyledContent>
      <StyledRuler src={ruler} />
      <StyledEmail>
        <a>hello@isaacdpierce.com</a>
      </StyledEmail>
    </StyledContent>
  </StyledSidebar>
)

export default Sidebar
