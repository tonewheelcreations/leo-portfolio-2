
import React from "react"
import { footer } from "./styles/footer.module.scss"

const Footer = () => (
  <footer className={footer}>
    <p>Designed and coded by Leo Sherman © {new Date().getFullYear()}</p>
  </footer>
)

export default Footer