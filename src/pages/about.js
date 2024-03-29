import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import IFrame from "../components/iframe.js"
import { containerBio, textBio, containerMusic, textAlbum, h2, album, video, profile, containerVideo } from "../components/styles/about.module.scss"
import "../components/styles/global.scss"

const About = () => {
    return (
        <Layout>
            <SEO title="About" />
            <section id="design" className={containerBio}>
                <div className={profile} data-sal="slide-left"
                    data-sal-duration="300"
                    data-sal-easing="ease-out-sine">
                    <StaticImage
                        src="../images/about-2.png"
                        alt="Me, Leo Sherman"
                        placeholder="blurred"
                        quality={80}
                        layout="fullWidth"
                        // aspectRatio={3/4}
                    />
                </div>
                <div className={textBio} data-sal="slide-right"
                    data-sal-duration="300"
                    data-sal-easing="ease-out-sine">
                    <h1>I’m a UX Designer who believes in the power of a story.</h1>
                    <p> As a musician turned designer, I believe that connecting people to a story leads to the most meaningful experiences — it creates community.
                        I’ve always wanted to be a storyteller throughout my childhood. This led me to become a jazz musician. For nearly 12 years, I wrote my own story in New York City. There, I learned how to connect emotionally with diverse groups of people, in many a smoky jazz club (minus the smoke).</p>

                    <p>In addition to music, I’ve worked as a videographer and sound designer, helping artists and organizations increase their social media metrics by over 200% and gain nearly 10,000 unique viewers. My audiovisual work has been featured by audio industry giants like Moog Synthesizers and popular events platforms like Fever.
                        Other than that, I enjoy traveling, mushroom foraging, and photography — all fueled by coffee.</p>
                </div>
            </section>

            <section id="music">
                <div className={containerMusic}>
                    <div className={textAlbum} data-sal="slide-left"
                        data-sal-duration="300"
                        data-sal-easing="ease-out-sine">
                        <h2 className={h2}>I like to compose jazz</h2>
                        <p> In 2019, I released my debut album, <i>Tonewheel</i>. After years of writing music, I decided it was time to bring it to life. <i>Tonewheel</i> is a collection of observations and experiences of immigrating to and growing up in the U.S. Each song is based on a story, ranging from escaping the Soviet Union to witnessing the challenges of growing up in an urban neighborhood. </p>

                        <p>The idea for the name came from <a href="https://en.wikiversity.org/wiki/Motivation_and_emotion/Book/2014/Plutchik%27s_wheel_of_emotions" target="_blank" rel="noreferrer noopener">Plutchik’s Wheel of Emotions</a>. But, a tonewheel can be a mechanical gear or even a color wheel. As far as the album goes, it symbolizes the detailed plot and emotional journey of each story.</p>

                        <p>I’m proud to say that the album has received wide acclaim, with over 1 million listeners as of 2020. You can check it out by following the album cover link, if you’d like.</p>
                    </div>
                    <div className={album} data-sal="slide-right"
                        data-sal-duration="300"
                        data-sal-easing="ease-out-sine">
                        <a href="https://tonewheel.bandcamp.com/album/tonewheel" target="_blank" rel="noreferrer noopener">
                            <StaticImage
                                src="../images/tonewheel.jpg"
                                alt="Tonewheel album cover"
                                placeholder="blurred"
                            />
                        </a>
                    </div>

                </div>
            </section>

            <section id="video" className={containerVideo} data-sal="slide-up"
                data-sal-duration="300"
                data-sal-easing="ease-out-sine">
                <h2 className={h2}>and create videos.</h2>
                <div className={video}>
                    <IFrame
                        srcURL="https://www.youtube.com/embed/ISUlEB8_nXI"
                        title="Parker 51 | Snap Saxophone Quartet"
                    />
                </div>
            </section>
        </Layout>
    )
}

export default About