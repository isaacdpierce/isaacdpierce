import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Title = styled.p`
  color: #750000;
  font-size: 2.6rem;
`

const AboutSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
`
const StyledBioText = styled.div`
  grid-column: 2 / span 6;
  grid-row: 2 / span 19;

  display grid:
  place-items: center;
`
const StyledCrack = styled.div``

const AboutPage = () => (
  <AboutSectionWrapper>
    <StyledCrack />
    <StyledBioText>
      <Title>A wee bit about me.</Title>
      <br />
      <h3>I love being of service.</h3>
      <p>
        When I was 15 I was gifted a hair clipper for Christmas. Shortly after I began cutting a few
        of my friends hair in my parents basement. The local barber charged $12 at the time. I
        charged $5. My clientele built fast. Whenever my friends needed a haircut they got 12 bucks
        from their parents to go to the barber and instead came to give me $5. We all had some extra
        beer money throughout highschool.
      </p>
      <p>
        I've been in customer service, management and sales ever since. I always intended on going
        to university but travelling and exciting jobs always ended up taking front seat. At 17 I
        was assistant manager at a small diner. At 20 was managing a large commission-based
        furniture store. 22 I was working in Insurance sales. And At 24 I decided I wanted to own my
        own hair salon. By 28 I did.
      </p>
      <p>
        I spent the next 15 years working within one of the strongest marketting teams in the world,
        Estee Lauder. I learned the value of stellar customer service, education-based marketting
        and the power of story telling.
      </p>
      <p>
        As a natural entrepreneur I am self taught in many valuable skills. I've read an indecent
        amount of books, mostly on business, communication, philosophy, computer science and health.
        I provide High level creative customer service. I have great written and spoken
        communication skills. I have many skills related to brand design, product development,
        Copywriting, sales and marketing, web development.
      </p>
      <p>
        The most important part of me I can offer is my passionate desire to be helpful to others. I
        am a relentlessly creative and hard working person. I love pushing myself to master new
        skills. I love working with a great team doing great things. I love writing (especially
        code), I love my laptop and I love anything that keeps me working and learning online.
      </p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </StyledBioText>
  </AboutSectionWrapper>
)

export default AboutPage
