import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledServices = styled.article`
  background-color: rgba(255, 255, 255, 0.1);
  height: 100vh;
  width: 100vh;
`

const WorkPage = () => (
  <div>
    <p>Hello from the WORK page</p>
    <StyledServices>
      <h1>This is the stuff I do</h1>
      <p>These Are my services</p>
      <Link to="/portfolio">My Portfolio</Link>
    </StyledServices>
  </div>
)

export default WorkPage
