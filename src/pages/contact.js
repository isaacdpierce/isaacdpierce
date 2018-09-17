import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const ContactPage = () => (
  <div>
    <p>Hello from the contact page</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <div>
      <h1>I'd love to talk! Email me at the address below</h1>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  </div>
)

export default ContactPage
