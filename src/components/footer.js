
import React from "react"
import { footer, svg, svgContainer, footerContainer } from "./styles/footer.module.scss"
import linkedIn from "../svg/linkedin.svg"
import behance from "../svg/behance.svg"

const Footer = () => (
  <footer className={footer}>
    <div className={footerContainer}>
      <div className={svgContainer}>
        <a href="https://www.linkedin.com/in/leonid-sherman/" target="_blank" rel="noreferrer noopener">
          <img className={svg} src={linkedIn} alt="LinkedIn profile" />
        </a>
        <a href="https://www.behance.net/leosherman1" target="_blank" rel="noreferrer noopener">
          <img className={svg} src={behance} alt="Behance profile" />
        </a>
      </div>
      <p>Designed and coded by Leo Sherman © {new Date().getFullYear()}</p>
    </div>
  </footer>
)

export default Footer