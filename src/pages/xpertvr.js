import React from "react"
import ProjectLayout from "../components/project-layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, LeftCol, RightCol, CenterCol, FullCol } from "../components/grid.js"
import { GridLarge, One, Two, Three } from "../components/grid-large.js"
import { FlexInfo } from "../components/flex.js"
import { Image } from "../components/image.js"
import Title from "../components/title.js"
import Blockquote from "../components/blockquote"
import Next from "../components/next-project"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ReactCompareSlider } from 'react-compare-slider'

const XpertVR = () => {
    return (
        <ProjectLayout>
            <SEO title="XpertVR" />

            <Title>
                <h1>Title</h1>
                <h2>Subtitle</h2>
            </Title>

            <Grid>
                <Image>
                    <ReactCompareSlider
                        itemOne={<StaticImage
                            src="../images/xpertvr/xpertvr-home-after-2.png"
                            alt="The XpertVR homepage after web redesign"
                            placeholder='blurred'
                            quality={100}
                        />}
                        itemTwo={<StaticImage
                            src="../images/xpertvr/xpertvr-home-before-2.png"
                            alt="The XpertVR homepage before web redesign"
                            placeholder='blurred'
                            quality={100}
                        />}
                    />
                </Image>
            </Grid>

            <FlexInfo>
                <div
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease-out"
                >
                    <h3>When was it?</h3>
                    <p>June 2021 - July 2021</p>
                    <h3>What did I do?</h3>
                    <p>I was the UX designer on a hybrid marketing, design, and development team at Stradea Design Labs. My responsibilities included: discovery, research synthesis, information architecture, wireframing, and web design</p>
                    <h3>What did I use?</h3>
                    <p>Adobe XD, Photoshop, Premiere, Miro, Wordpress, Elementor </p>
                </div>
                <div
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease-out"
                >
                    <h2>Leading VR development</h2>
                    <p>
                        XpertVR is one of Canada’s leading Virtual Reality (VR) development companies. In fact, they won Clutch’s Top B2B Company award two years in a row — in 2020 and 2021. The company provides a range of services geared toward research and training. These include VR simulation development, data collection, VR hardware sourcing, consulting, and tech support. At project start, XpertVR had three types of users: academic researchers, trainers, and research participants.
                    </p>
                    <h2>The challenge</h2>
                    <p>
                        Although XpertVR was receiving monthly enquiries for VR projects, they found that the majority of these came from referrals and Clutch reviews. And when potential clients contacted the company through their website, the emails often expressed about what XpertVR did. Clients were unsure of how XpertVR could address their specific VR needs.
                    </p>
                    <p>
                        Our goals at Stradea were to identify customer frustrations while onboarding on the XpertVR site and to understand the individual customer journeys for researchers, trainers, and participants. By mapping the site more closely to these customer journeys, we would be able to increase overall site traffic and engagement by 25-40%.
                    </p>
                    <p>
                        The redesigned website had a hard launch date of August 14th. This left us with a tight two-month timeline for the entire development cycle. I had to complete all of the user research, site mapping, and wireframing by the end of June so that we would stay on schedule for visual design and development.
                    </p>
                </div>
            </FlexInfo>

            <Next
                name="Subscription tracking made easy"
                link={"/keeps/"}
            />
        </ProjectLayout >
    )
}

export default XpertVR