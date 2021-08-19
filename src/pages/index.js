import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { topModule, projects, image } from "../components/styles/home.module.scss"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image";
import Project from "../components/project-card"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className={topModule}>
        <h1>Hi, I'm Leo</h1>
        <h2>I'm a <Link to="/about/">UX Designer</Link> with roots in <Link to="/about/#music">jazz composition</Link> and <Link to="/about/#video">video production</Link>.</h2>
      </div>

      <div className={projects}>
        <Project
          link={"/xpertvr/"}
          title={"XpertVR reboot"}
          description={"Web design, branding"}
        >
          <StaticImage
            src="../images/xpertvr/xpertvr-cover.jpg"
            alt="XpertVR website redesign case study"
            className={image}
            style={{ display: "block" }}
            placeholder="blurred"
          />
        </Project>

        <Project
          link={"/onstage/"}
          title={"Onstage music live-streaming"}
          description={"Product design"}
        >
          <StaticImage
            src="../images/c1/c1-cover.png"
            alt="Onstage Case Study"
            className={image}
            style={{ display: "block" }}
            placeholder="blurred"
          />
        </Project>

        <Project
          link={"/keeps/"}
          title={"Subscription tracking made easy"}
          description={"Android design"}
        >
          <StaticImage
            src="../images/c2/c2-home.png"
            alt="Keeps Case Study"
            className={image}
            style={{ display: "block" }}
            placeholder="blurred"
          />
        </Project>

        <Project
          link={"/house2home/"}
          title={"Beating decision anxiety on a budget"}
          description={"Design sprint"}
        >
          <StaticImage
            src="../images/design-sprint/ds-cover.jpg"
            alt="House2Home Case Study"
            className={image}
            style={{ display: "block" }}
            placeholder="blurred"
          />
        </Project>
      </div >


    </Layout >
  );
}

export default IndexPage

