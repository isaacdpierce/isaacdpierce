import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { PageGrid } from '../layouts/grids'

const StyledServices = styled.article`
  grid-column: 2 / 9;
  grid-row: 2 / -2;
`
const DevskillsPage = () => (
  <PageGrid>
    <StyledServices>
      <h3>Thank you</h3>
      <p>I really appreciate your time spent here. Let me get right to it.</p>
      <h3>Comfort zone</h3>
      <p>
        These are the hard skills I feel comfortable with, really enjoy working with and love
        learning more about:
      </p>
      <ul>
        <li>HTML5</li>
        <li>CSS / SCSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Gatsby</li>
        <li>GraphQl</li>
        <li>Git</li>
        <li>Terminal</li>
        <li>BEM</li>
        <li>NPM</li>
        <li>Research - I know how to find out what I don't know</li>
      </ul>

      <p>
        These are the hard skills I have spent time with but either learned them years ago or I am
        presently studying and do not yet have a solid understanding:
      </p>

      <ul>
        <li>Ruby</li>
        <li>Rails</li>
        <li>Node.js</li>
        <li>Apollo</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>API's</li>
        <li>Apollo</li>
        <li>Git</li>
        <li>Terminal</li>
        <li>BEM</li>
        <li>Research - I know how to find out what I don't know</li>
      </ul>
    </StyledServices>
  </PageGrid>
)

export default DevskillsPage
