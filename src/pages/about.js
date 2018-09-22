import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { PageGrid } from '../layouts/grids'
import {
  StyledBrickBox,
  StyledBrick,
  StyledLine,
  StyledLine2,
  BrickText,
  StyledScrollTag,
} from '../components/brick'

import AboutText from '../components/aboutText'

class AboutPage extends Component {
  componentDidMount() {
    // selects the StyledBrickBox
    const slider = document.getElementById('brick-box')
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
        <StyledBrickBox id="brick-box">
          <StyledBrick>
            <StyledScrollTag>Scroll >></StyledScrollTag>
            <BrickText />
          </StyledBrick>
          <StyledLine />
          <StyledLine2 />
        </StyledBrickBox>
        <AboutText />
      </PageGrid>
    )
  }
}

export default AboutPage
