import React, { useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"
import { container, image, overlay, previous, next } from "./styles/carousel.module.scss"
import arrowLeft from "../svg/arrow-left.svg"
import arrowRight from "../svg/arrow-right.svg"

const Styleguide = () => {
  const [index, setIndex] = useState(0)
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {sourceInstanceName: {eq: "images"}, relativeDirectory: {eq: "c1/c1-styleguide"}}
        sort: {fields: name}
      ) {
          edges {
            node {
              base
              childImageSharp {
                gatsbyImageData (
                  placeholder: BLURRED
                  quality: 100
                )
              }
            }
          }
        }
      }      
    `)

  // event handlers 

  const { node } = data.allFile.edges[index]
  const length = data.allFile.edges.length - 1

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
  }

  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1)
  }

  return (
    <div className={container}>
      <GatsbyImage
        image={node.childImageSharp.gatsbyImageData}
        alt={node.base.split(".")} // only use section of the file extension with the filename
        className={image}
      />

      <div className={overlay}>
        <a href="#previous" id="saveChanges" tabindex="0" role="button" aria-pressed="false" onKeyDown={handlePrevious} onClick={handlePrevious}>
          <img alt="Left arrow" src={arrowLeft} className={previous} />
        </a>

        <a href="#next" id="saveChanges" tabindex="0" role="button" aria-pressed="false" onKeyDown={handleNext} onClick={handleNext}>
          <img alt="Right arrow" src={arrowRight} className={next} />
        </a>
      </div>
      <p>
        {index + 1} / {length + 1}
      </p>
    </div>
  )
}

export default Styleguide