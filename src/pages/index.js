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
        <h1>Hi, I’m Leo</h1>
        <h2>I’m a <Link to="/about/">UX Designer</Link> with roots in <Link to="/about/#music">jazz composition</Link> and <Link to="/about/#video">video production</Link>.</h2>
      </div>

      <div className={projects}>
        <Project
          link={"/xpertvr/"}
          title={"XpertVR reboot"}
          description={"Web design, CX design"}
        >
          <StaticImage
            src="../images/xpertvr/xpertvr-cover.jpg"
            alt="Man with activated VR headset and Teslasuit on and misty XpertVR text in the background"
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
            alt="Onstage music live-streaming app login screen on an iPhone 10 with abstract geometric stage curtains in the background"
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
            alt="A blue castle with green roof and door on a light beige background"
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
            alt="A landing page for a home decor E-commerce site on a radiant purple background"
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

