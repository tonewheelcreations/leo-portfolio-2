import React, { useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from "gatsby"
import { container, image, overlay, previous, next, svg } from "./styles/carousel.module.scss"
import left from "../svg/arrow-left.svg"
import right from "../svg/arrow-right.svg"

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

  // go forward 1 image in array

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
  }

  // go back 1 image in array

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
        <button className={previous} type="button" onKeyDown={handlePrevious} onClick={handlePrevious}>
          <img className={svg} alt="Left arrow" src={left} />
        </button>

        <button className={next} type="button" onKeyDown={handleNext} onClick={handleNext}>
          <img className={svg} alt="Right arrow" src={right} />
        </button>
      </div>
    </div>
  )
}

export default Styleguide