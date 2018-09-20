import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { PageGrid } from '../layouts/grids'

const Title = styled.p`
  color: #750000;
  font-size: 1.9rem;
`

const StyledBioText = styled.div`
  grid-column: 2 / span 7;
  grid-row: 2 / span 9;

  display: grid;
`
const StyledList = styled.ul`
  list-style: circle;
`
const StyledBrick = styled.div`
  grid-column: 4 / -1;
  grid-row: 2 / 4;
  background-color: #333;
  z-index: 99;
`

const AboutPage = () => (
  <PageGrid>
    <StyledBrick draggable="true" />
    <StyledBioText>
      <br />
      <Title>A wee bit about me.</Title>
      <StyledList>
        <li>My mother says I'm handsome.</li>
        <li>My doctor says I'm healthy.</li>
        <li>My girlfriend says I'm smart.</li>
        <li>Who am I to argue?</li>
      </StyledList>
      <Title>What can I offer?</Title>
      <p>
        The most important part of me I can offer is my passionate desire to be helpful to others. I
        love working with great people and doing great things. I'm a great listener. I'm
        relentlessly creative and hard working. I love pushing myself to master new skills. I love
        writing (especially code) and anything that keeps me creating and learning online.
      </p>

      <Title>How can I help?</Title>
      <StyledList>
        <li>10 years ago I started learning front end web development (Wordpress, HTML, CSS)</li>
        <li>
          5 years ago started studying more programming (Ruby, Rails, Javascript, SASS, Git, Command
          Line, DOM api, etc ).
        </li>
        <li>
          2 years ago I started taking it serious (React, Functional Javascript, MongoDB, Node.js)
        </li>

        <li>
          I spent 15 years working within one of the strongest marketing teams in the world, Estee
          Lauder.
        </li>
        <li>
          I learned the value of stellar customer service, education-based marketting and the power
          of story telling.
        </li>
        <li>
          For 9 years I ran my own hair salon. During that time I also started and sold a second
          location 300kms away.
        </li>

        <li>
          I've read an indecent amount of books, mostly on business, communication, philosophy,
          computer science and health.
        </li>
      </StyledList>
      <Title>also...</Title>
      <StyledList>
        <li>I'm addicted to learning.</li>
        <li>I've travelled to 9 countries and lived in 9 different cities.</li>
        <li>
          I love my laptop, my text editor, Affinity Photo, Udemy,{' '}
          <a
            href="https://www.biggerbolderbaking.com/sour-gummy-bears/"
            target="_blank"
            rel="noopener noreferrer"
          >
            sour gummy bears,{' '}
          </a>
          <a
            href="https://www.youtube.com/watch?v=gw9fKuymA0I"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shigeru Umbayeshi,{' '}
          </a>
          <a
            href="https://www.youtube.com/watch?v=-FlxM_0S2lA&t=515s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lo-Fi instrumental hip-hop,{' '}
          </a>
          <a
            href="https://www.spin.com/2018/03/nordic-noir-guide-best-scandinavian-crime-shows/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nordic Noir TV series{' '}
          </a>
          and{' '}
          <a
            href="https://steam250.com/tag/puzzle-platformer"
            target="_blank"
            rel="noopener noreferrer"
          >
            puzzle-platform video games.
          </a>
        </li>
      </StyledList>
    </StyledBioText>
  </PageGrid>
)

export default AboutPage
