import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// assets //
import './index.css'
import stoneTexture from '../assets/images/white-wall.png'

// components //
import Header from '../components/header'
import Sidebar from '../components/sidebar'

const StyledSiteWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(200px, 20vw) 1fr;
  grid-template-rows: 42px 1fr 60px;
  min-height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
  color: #f9f9f9;
`

const StyledBackground = styled.img`
  min-height: 100vh;
  width: 100vw;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  opacity: 0.7;
  margin-bottom: 0;
  z-index: -1;
`
const StyledPageWrapper = styled.div`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
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
      <StyledBackground src={stoneTexture} alt="" />
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
