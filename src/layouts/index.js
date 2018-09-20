import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// assets //
import './index.css'
import backgroundTexture from '../assets/images/sandpaper.png'

// components //
import Header from '../components/header'
import Sidebar from '../components/sidebar'

const StyledSiteWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 42px 1fr;
  background: rgba(0, 0, 0, 0.98);
`

const StyledBackground = styled.div`
  background-image: url(${backgroundTexture});
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`

const StyledPageWrapper = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
  overflow: hidden;
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Isaac D. Pierce portfolio, blog and contact' },
        {
          name: 'keywords',
          content: 'web developer, react, gatsby, graphql, functional programming, entrepreneur',
        },
      ]}
    />
    <StyledSiteWrapper>
      <StyledBackground />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Sidebar />
      <StyledPageWrapper>{children()}</StyledPageWrapper>
    </StyledSiteWrapper>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
