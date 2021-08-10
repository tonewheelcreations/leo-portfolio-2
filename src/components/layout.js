/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header.js"
import Footer from "./footer.js"
import "./styles/global.scss"
// import { scrollTop, svg } from "./styles/scroll.module.scss"
// import up from "../svg/chevron-up.svg"
import ScrollToTop from "./scroll-top.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="page-container">
      <Header id="top" siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="main">
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </div >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
