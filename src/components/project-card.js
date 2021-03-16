import React from "react"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import { article, container, overlay, hoverTitle, projectInfo } from "../components/styles/home.module.scss"

export default function Project(props) {
  return (
    <article className={article}>
      <Link to={props.link}>
        <div className={container}>
          {props.children}
          <div className={overlay}>
            <div className={hoverTitle}>
              <h2 >{props.title}</h2>
              <p>{props.description}</p>
            </div>
          </div>
        </div>
        <div className={projectInfo}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </Link>
    </article>
  )
}