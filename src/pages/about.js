import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { PageGrid } from '../layouts/grids'

const Title = styled.p`
  color: #750000;
  font-size: 1.9rem;
`

const StyledBioText = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / -1;
`
const StyledList = styled.ul`
  list-style: circle;
`

const StyledBrickBox = styled.div`
  grid-column: span 7 / 10;
  grid-row: 3 / span 2;
  height: 300px;
  width: 900px;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  background: transparent;
  font-size: 0;
  perspective: 500px;
`

const StyledBrick = styled.div`
  width: 100%;
  margin-left: 90%;
  height: 96%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  border-left: 1px solid #333;
  border-top: 1px solid #333;
  border-bottom: 1px solid #000;
  box-shadow: 5px 5px 2px 2px rgba(0, 0, 0, 0.4);
  background: #1b1b1b;
  z-index: 199;
`

class AboutPage extends Component {
  componentDidMount() {
    const slider = document.querySelector('.about__StyledBrickBox-o6jj2h-3')
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mousedown', e => {
      isDown = true
      slider.classList.add('active')
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })

    slider.addEventListener('mouseleave', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mouseup', () => {
      isDown = false
      slider.classList.remove('active')
    })

    slider.addEventListener('mousemove', e => {
      if (!isDown) return // stop the fn from running
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const drag = x - startX
      slider.scrollLeft = scrollLeft - drag
    })
  }

  render() {
    return (
      <PageGrid>
        <StyledBrickBox>
          <StyledBrick />
        </StyledBrickBox>
        {/* <StyledBioText>
          <br />
          <Title>A wee bit about me.</Title>
          <StyledList>
            <li>My mother says I'm handsome.</li>
            <li>My doctor says I'm healthy.</li>
            <li>My girlfriend says I'm smart.</li>
            <li>Who am I to argue?</li>
          </StyledList>
          <Title>What can I offer?</Title>
        </StyledBioText> */}
      </PageGrid>
    )
  }
}

export default AboutPage

// <p>
// The most important part of me I can offer is my passionate desire to be helpful to others. I
// love working with great people and doing great things. I'm a great listener. I'm
// relentlessly creative and hard working. I love pushing myself to master new skills. I love
// writing (especially code) and anything that keeps me creating and learning online.
// </p>

// <Title>How can I help?</Title>
// <StyledList>
// <li>10 years ago I started learning front end web development (Wordpress, HTML, CSS)</li>
// <li>
//   5 years ago started studying more programming (Ruby, Rails, Javascript, SASS, Git, Command
//   Line, DOM api, etc ).
// </li>
// <li>
//   2 years ago I started taking it serious (React, Functional Javascript, MongoDB, Node.js)
// </li>

// <li>
//   I spent 15 years working within one of the strongest marketing teams in the world, Estee
//   Lauder.
// </li>
// <li>
//   I learned the value of stellar customer service, education-based marketting and the power
//   of story telling.
// </li>
// <li>
//   For 9 years I ran my own hair salon. During that time I also started and sold a second
//   location 300kms away.
// </li>

// <li>
//   I've read an indecent amount of books, mostly on business, communication, philosophy,
//   computer science and health.
// </li>
// </StyledList>
// <Title>also...</Title>
// <StyledList>
// <li>I'm addicted to learning.</li>
// <li>I've travelled to 9 countries and lived in 9 different cities.</li>
// <li>
//   I love my laptop, my text editor, Affinity Photo, Udemy,{' '}
//   <a
//     href="https://www.biggerbolderbaking.com/sour-gummy-bears/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     sour gummy bears,{' '}
//   </a>
//   <a
//     href="https://www.youtube.com/watch?v=gw9fKuymA0I"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Shigeru Umbayeshi,{' '}
//   </a>
//   <a
//     href="https://www.youtube.com/watch?v=-FlxM_0S2lA&t=515s"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Lo-Fi instrumental hip-hop,{' '}
//   </a>
//   <a
//     href="https://www.spin.com/2018/03/nordic-noir-guide-best-scandinavian-crime-shows/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Nordic Noir TV series{' '}
//   </a>
//   and{' '}
//   <a
//     href="https://steam250.com/tag/puzzle-platformer"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     puzzle-platform video games.
//   </a>
// </li>
// </StyledList>
