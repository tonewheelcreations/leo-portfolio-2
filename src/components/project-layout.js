import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header.js"
import Footer from "./footer.js"
import "./styles/global.scss"
import { footerProjects } from "./styles/footer.module.scss"
import ScrollToTop from "./scroll-top.js"


// import "animate.css/animate.min.css"
// import { scrollTop, svg } from "./styles/scroll.module.scss"
// import up from "../svg/chevron-up.svg"


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
        <main className="main-projects">
          {children}
          <ScrollToTop />
        </main>
      </div>
      <div className={footerProjects}>
        <Footer />
      </div>
    </div >
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout