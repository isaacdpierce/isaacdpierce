import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import backgroundTexture from '../assets/images/sandpaper.png'

const StyledSection = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  min-height: 100vh;
`

const StyledWelcome = styled.div`
  grid-column: 2 / span 6;
  grid-row: 3 / span 5;
  border-radius: 3px;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  -webkit-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);

  padding: 2rem;
  display: grid;
  place-items: center;
  align-content: center;

  &::before {
    position: absolute;
    content: '';
    background: url(${backgroundTexture});
    opacity: 0.1;
    height: 100%;
    width: 100%;
  }
`

const ContentWrapper = styled.div``

const IndexPage = () => (
  <StyledSection>
    <StyledWelcome>
      <p>I build blazingly fast, beautiful websites for bold people.</p>
      <p>Let's build something great.</p>
    </StyledWelcome>
  </StyledSection>
)

export default IndexPage
