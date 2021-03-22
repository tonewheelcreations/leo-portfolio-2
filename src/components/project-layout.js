import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header.js"
import Footer from "./footer.js"
import "./styles/global.scss"
import { scrollTop } from "./styles/scroll.module.scss"

const ProjectLayout = ({ children }) => {
  const data = useStaticQuery(graphql`  
    query siteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header id="top" siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>
          {children}
        </main>
        <div className={scrollTop}>
          <a href="#top">&#8679; Top</a>
        </div>
      </div>
      <Footer />
    </div >
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout