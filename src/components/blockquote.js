import React from 'react'

const StyledQuote = styled.span`
  font-size: 3rem;
  display: block;
  position: absolute;
  top: 10rem;
  left: 10px;
`
const StyledBlockQuote = styled.span`
  font-size: 1.5rem;
  width: 10vw;
  display: block;
  position: absolute;
  top: 0rem;
  left: 0px;
`

export const BlockQuote = () => (
  <StyledBlockQuote>
    <StyledQuote>"</StyledQuote> You’ll never plough a field by turning it over in your mind."
  </StyledBlockQuote>
)
