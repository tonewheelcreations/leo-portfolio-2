import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { selected, header, container, contents, logo, svg, pageLink } from "./styles/header.module.scss"
import siteLogo from "../svg/logo.svg"


const NavLink = (props) => {
  return (
    <li>
      <Link activeClassName={selected} to={props.to}>{props.children}</Link>
    </li>
  )
}

const Header = () => (
  <header className={header}>
    <div className={container}>
      <div className={contents}>
        <Link className={logo} to="/">
          <img className={svg} src={siteLogo} alt="logo" />
          <span>Leo Sherman</span>
        </Link>
        <nav>
          <ul>
            <NavLink className={pageLink} to="/">Portfolio</NavLink>
            <NavLink className={pageLink} to="/about/">About</NavLink>
            <NavLink className={pageLink} to="/contact/">Contact</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
