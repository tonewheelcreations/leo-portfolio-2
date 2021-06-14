import React from "react"
import ProjectLayout from "../components/project-layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, LeftCol, RightCol, CenterCol, FullCol } from "../components/grid.js"
import { GridLarge, One, Two, Three } from "../components/grid-large.js"
import { FlexInfo } from "../components/flex.js"
import { Image } from "../components/image.js"
import Title from "../components/title.js"
import PaperPrototype from "../assets/paper-prototype-web.mp4"
import AffinityMap from "../assets/affinity-map.mp4"
import Ideation1 from "../assets/Ideation-1.mp4"
import FinalPrototype from "../assets/onstage-final-prototype-v4.mp4"
import Styleguide from "../components/styleguide"
import Personas from "../components/personas"
import { Video, VideoFullBlack, VideoFullWhite } from "../components/video"
import Next from "../components/next-project"

const Onstage = () => {
    return (
        <ProjectLayout>
            <SEO title="Onstage" />

            <Title>
                <h1>Onstage music live-streaming</h1>
                <h2>Bringing the live concert experience to music fans — in the comfort of their homes</h2>
            </Title>

            <Grid>
                <Image>
                    <StaticImage
                        src="../images/c1/c1-cover.png"
                        alt="Onstage app login page"
                        placeholder='blurred'
                    />
                </Image>
            </Grid>

            <FlexInfo>
                <div>
                    <h3>When was it?</h3>
                    <p>October 2020 - January 2021</p>
                    <h3>What did I do?</h3>
                    <p>Discovery, ideation, visual design, prototyping, usability testing</p>
                    <h3>What did I use?</h3>
                    <p>Figma, Adobe Photoshop, Illustrator, Photoshop, Premiere, Logic Pro X (audio production), Marvel, Miro </p>
                </div>
                <div>
                    <h2>State of live-streaming</h2>
                    <p>
                        Live-streaming has taken over the way we consume media. Only 25 percent of the population in the U.S. had live-streamed online content back in 2017. At the time of writing this project, in 2020, that number approached 80 percent. This massive increase was due in part to the COVID-19 pandemic, which forced people to move many real-world experiences into the digital. One of these experiences was attending a live concert. I wanted to explore the music live-streaming space and see how concertgoers were faring during the pandemic.</p>
                    <h2>The challenge</h2>
                    <p>
                        Live music was on pause due to COVID-19 and concertgoers could no longer go out to get their concert fix. While live-streaming doubled between 2019 and 2020 due to COVID-19, fans of live music performances accounted for only a fraction of viewership.
                     </p>
                    <p>My high level goals were to:</p>
                    <ul>
                        <li>Identify experience gaps for music live-streaming services.</li>

                        <li>Find out what people wanted and needed from music live-streaming services.</li>

                        <li>Better define the audience characteristic and use cases for music live-streaming services.</li>
                    </ul>

                    <p>It goes without saying that COVID-19 affected this project in a big way. Nearly all interviews and usability testing happened remotely. This meant accepting the shortcomings of internet connections, web-based prototype bugs, and missing out on some of the helpful non-verbal cues that come up during in-person interviews.</p>
                </div>
            </FlexInfo>

            <Grid>
                <CenterCol>
                    <h2>Getting started</h2>

                    <h3>Discovery</h3>
                    <h4>A look at the industry</h4>

                    <p>To better understand what concertgoers were dealing with, I started researching the live-streaming space. How did music live-streaming fit in specifically? The numbers were astounding. According to a <a href="https://www.forbes.com/sites/paultassi/2020/05/16/report-livestream-viewership-grew-99-in-lockdown-microsofts-mixer-grew-02/?sh=33db6cf076cb" target="_blank" rel="noreferrer noopener">report by Forbes</a>, live-streaming increased by 99 percent between 2019 and 2020 — nearly doubling in one year! COVID-19 played a big part in this, accelerating the shift of real world content to digital which had already been happening. </p>

                    <p>But the numbers didn’t look so good for musical content. Live music performances ranked toward the bottom of the most popular live-streaming platforms. For instance, "Music and Performances" ranked #20 on Twitch at the time of research, with just 25,944 total viewers per channel.</p>
                </CenterCol>

                <CenterCol>
                    <StaticImage
                        src="../images/c1/c1-twitch-metrics.png"
                        alt="Music and Performances ranked #20 on Twitch"
                    />
                </CenterCol>
                <CenterCol>
                    <p>And while <a href="https://gobranded.com/branded-poll-millennials-driving-growth-in-live-music-industry/#:~:text=Roughly%2089%20percent%20of%20Millennials,Silent%20Generation%20(age%2070%2B)." target="_blank" rel="noreferrer noopener">studies</a> proved that millennials — Twitch's largest demographic — were also the largest group of concertgoers, there was still an entire range of people over 40 to account for. Only 20 percent of people over 40 even had a live-streaming subscription of some kind. Statistics like these suggested that there was a problem with engaging concertgoers through current live-streaming offerings.</p>
                </CenterCol>

                <LeftCol>

                    <h4>Getting to know concertgoers</h4>

                    <p>I sent out a survey to find out about general music preferences, live concert attendance, and experience with regular streaming and live-streaming. 38 fans of live music responded, ranging from people in their early 20s to those in their 70s. Their top genres were jazz, classical, pop, rock, and world music. People were surprisingly experienced — nearly 80 percent had live-streamed music before. A larger sample might’ve resulted in a different set of top genres and live-streaming know-how.</p>

                </LeftCol>

                <RightCol>
                    <StaticImage
                        src="../images/c1/c1-screener-data.png"
                        alt="Live-streaming growth from 2019 to 2020"
                        placeholder='blurred'
                    />
                </RightCol>

                <CenterCol>
                    <p>After going through the survey responses, I set up seven interviews with a wide age range and a variety of musical interests in mind. The interview topics went from the physical to the digital — from live concert habits, to regular, pre-recorded music streaming, to contextual inquiry with a current, dedicated music live-streaming app called Sessions. This would help get participants to think more about which aspects of the real concert experience they wanted to have in the digital.
                    </p>

                    <h4>Early insights</h4>

                    <p>Participants were passionate and outspoken. The responses to my interview questions were powerful. When asked what being at a live concert felt like, one person responded, "just being in the actual room with that sound surrounding your whole body is an other-worldly feeling."</p>
                </CenterCol>
                <FullCol>
                    <blockquote>
                        <em>"Just being in the actual room with that sound surrounding your whole body is an other-worldly feeling."</em>
                    </blockquote>
                </FullCol>
                <CenterCol>
                    <h4>With music live-streaming, people had a lot in common</h4>

                    <p>When asked specifically — what would you look for in a music live-streaming service — people pointed out similar things: something that would have good categories mapped out, a variety of music, and being able to customize music preferences.</p>

                    <p>I took these findings and began to distill them, first with an affinity map:</p>
                </CenterCol>

                <LeftCol>
                    <Video>
                        <source
                            src={AffinityMap}
                            type="video/mp4"
                        />
                    </Video>
                </LeftCol>
                <RightCol>
                    <p>This helped confirm what I noticed people pointing out during the interviews: they wanted something that felt <em>live</em>, felt personalized, was easy to navigate, and had a variety of content. I wanted to focus on these points and their accompanying desires and frustrations even more. Because these concertgoers were sharing so many common points, I created 4 personas to represent them.</p>
                </RightCol>


                <Image>
                    <Personas />
                </Image>

                <CenterCol>
                    <h4>Revisiting the problem</h4>

                    <p>So far, I knew that there was an entire range of people over 40 that wasn’t engaging with live-streaming offerings. On top of that, I learned that:</p>

                    <ul>
                        <li>People expected to see concert info when buying a ticket online</li>

                        <li>They prefered to watch live-streams on a large device</li>

                        <li>They were more likely to select concerts that were in a visually appealing presentation format, like a card with an image and text or hero image with accompanying copy</li>

                        <li>They prefered to organize their music by favorite artist and genre</li>
                    </ul>

                    <p>This helped shape the problem space: how might we engage concertgoers with more immersive live-streaming offerings?</p>

                    <h2>Letting the imagination run wild</h2>

                    <h3>Ideation</h3>

                    <h4>Turning interview insights into design features</h4>

                    <p>At this point, I had a lot of ideas so I pulled out a pen and paper and sketched out possible ideas, including:</p>

                    <ul>
                        <li>Concert programs</li>

                        <li>Visually engaging virtual tickets </li>

                        <li>Artist profiles with featured images </li>

                        <li>3D audio and video settings</li>
                    </ul>
                    <p>These were some of the many ways that concert live-streaming could resemble its real-life counterpart.</p>
                </CenterCol>

                <Image>

                    <Video>
                        <source
                            src={Ideation1}
                            type="video/mp4"
                        />
                    </Video>

                </Image>

                <CenterCol>
                    <h4>A map showing the way back to the users</h4>

                    <p>Exploring a bunch of ideas was inspiring but staying true to the interview insights and personas was still the primary goal. So, I set out to map only the features that users needed with a set of user stories.</p>
                </CenterCol>
                <Image>
                    <StaticImage
                        src="../images/c1/c1-user-stories.png"
                        alt="User stories showing basic features of the design"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>
                <CenterCol>
                    <p>This added focus but also helped break down the major needs into the individual features that they were made of. Now I had a rough design blueprint for a minimum viable product. The critical features were:</p>

                    <ul>
                        <li>Create a profile</li>

                        <li>Set music preferences</li>

                        <li>Search for concerts</li>

                        <li>Get concert info</li>

                        <li>Buy tickets</li>

                        <li>Watch a concert</li>
                    </ul>

                    <h4>Staying organized</h4>

                    <p>Before moving on to visual design, I had to ensure that all of these features flowed in a logical way. I grouped the critical features into 3 red routes: personalize account, buy a concert ticket, and watch a concert. I would later change the wording of these routes as I went back over the designs. For now, this was enough to create user flows for the upcoming design.</p>
                </CenterCol>
            </Grid>

            <GridLarge>
                <One>
                    <StaticImage
                        src="../images/c1/c1-user-flow-1.png"
                        alt="'Personalize account' user flow"
                        placeholder='blurred'
                    />
                    <p>
                        <i>Personalize account</i> addressed people’s needs to be able to create a profile and set music preferences
                    </p>
                </One>
                <Two>
                    <StaticImage
                        src="../images/c1/c1-user-flow-2.png"
                        alt="'Buy a concert ticket' user flow"
                        placeholder='blurred'
                    />
                    <p>
                        <i>Buy a concert ticket</i> included searching for concerts, getting concert info, and buying the tickets
                    </p>
                </Two>
                <Three>
                    <StaticImage
                        src="../images/c1/c1-user-flow-3.png"
                        alt="'Watch a concert' user flow"
                        placeholder='blurred'
                    />
                    <p>
                        <i>Watch a concert</i> allowed people to live-stream the concert in immersive audio and video
                    </p>
                </Three>

            </GridLarge>
            <Grid>
                <CenterCol>
                    <h2>Creating the music live-streaming experience</h2>

                    <h3>Design</h3>

                    <h4>Refining critical features into red routes</h4>

                    <p>I started by sketching out the three red routes based on the user flows: to sign up, find and purchase a concert, and watch a concert.</p>
                </CenterCol>


                <Image>
                    <h5>Sign Up</h5>
                    <StaticImage
                        src="../images/c1/c1-sketch-personalize-centered.png"
                        alt="Sign Up"
                        placeholder='blurred'
                    />

                    <h5>Find and purchase a concert</h5>
                    <StaticImage
                        src="../images/c1/c1-sketch-buy-centered.png"
                        alt="Find and purchase a concert"
                        placeholder='blurred'
                    />

                    <h5>Watch a concert</h5>
                    <StaticImage
                        src="../images/c1/c1-sketch-watch-centered.png"
                        alt="Watch a concert"
                        placeholder='blurred'
                    />
                </Image>

                <CenterCol>
                    <h4>A usability test is worth 1000 Figma auto-saves</h4>

                    <p>Before going any further, I wanted to test the usability of these initial routes. Marvel offered a great paper prototyping tool called POP, which I used to create an initial prototype. </p>
                </CenterCol>
            </Grid>
            <VideoFullWhite>
                <source
                    src={PaperPrototype}
                    type="video/mp4"
                />
            </VideoFullWhite>
            <Grid>

                <CenterCol>
                    <p>I got five unsuspecting  participants to take the prototype for a test-drive. I’m glad I was able to test this early in the visual design stage — the results revealed some serious flaws. First, the app seemed like it was for buying tickets to actual live concerts instead of live-streams. Second, it wasn’t clear how the search functionality would work. Finally, participants weren’t sure when the concerts were “going live.” This was a good time for improvement and there were still several opportunities ahead to hone the design.</p>

                    <h4>Wireframing the three red routes</h4>

                    <p>Using the findings from guerrilla testing, I moved on to wireframing the design.  </p>
                </CenterCol>

                <Image>
                    <h5>Sign Up</h5>

                    <StaticImage
                        src="../images/c1/c1-wireframe-1.png"
                        alt="Wireframe of &quot;Sign Up&quot;"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>

                <Image>
                    <h5>Find and purchase a concert</h5>

                    <StaticImage
                        src="../images/c1/c1-wireframe-2.png"
                        alt="Wireframe of &quot;Find and purchase a concert&quot;"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>

                <Image>
                    <h5>Watch a concert</h5>

                    <StaticImage
                        src="../images/c1/c1-wireframe-3.png"
                        alt="Wireframe of &quot;Watch a concert&quot;"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>

                <CenterCol>
                    <p>Some of the main features I added were:</p>

                    <ul>
                        <li>A search input to find favorite artists during onboarding instead of a massive list of artists which would overwhelm users</li>

                        <li>Date filter modals to address the edge case of scrolling through endless concert listings</li>

                        <li>A cart functionality to support people’s desire for a more realistic concert experience, like buying concert tickets in real life</li>

                        <li>Helper modals explaining video player functionality to first-time users</li>

                        <li>Audio and video settings for recreating a virtual concert environment, like room sound, 3D audio, and 3D video</li>
                    </ul>

                    <h4>Breathing life into the design through branding and a style guide</h4>

                    <p>Like previous parts of the project, having a foundation before making a big design decision was crucial. Even though I fixed the major usability issues for each red route and the logic checked out, the design still didn’t have an identity; it was still a concept and not a product. </p>

                    <p>I approached this by creating a branding and style guide. This was a large endeavor that included 8 unique parts: a brand platform, logo and logotype, color palette, typography, grid system, icons, components, and images. The idea was to bring the design to life and give it a vision that concertgoers could align with. The result was Onstage, an app which brought the live concert experience to users in their home. This connected full circle with the initial discovery of the problem space by extending live concert streaming offerings to a wider range of concertgoers, based on their preferences and needs.</p>

                    <p>The entire style guide was a hefty 33-page affair, but here are some of the critical parts:</p>
                </CenterCol>

                <Image>
                    <Styleguide />

                </Image>

                <CenterCol>
                    <h4>Leveling up to high fidelity</h4>

                    <p>Using the style guide, I created high fidelity screens for the red routes:</p>
                </CenterCol>

                <Image>
                    <h5>Sign Up</h5>

                    <StaticImage
                        src="../images/c1/c1-hi-fi-1.png"
                        alt="High fidelity screen of &quot;Sign Up&quot;"
                        placeholder='blurred'
                        quality={100}
                    />

                    <h5>Find and purchase a concert</h5>

                    <StaticImage
                        src="../images/c1/c1-hi-fi-2.png"
                        alt="High fidelity screen of &quot;Find and purchase a concert&quot;"
                        placeholder='blurred'
                        quality={100}
                    />

                    <h5>Watch a concert</h5>

                    <StaticImage
                        src="../images/c1/c1-hi-fi-3.png"
                        alt="High fidelity screen of &quot;Watch a concert&quot;"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>

                <CenterCol>
                    <p>Some of the main features I added here were:</p>

                    <ul>
                        <li>1, 2, 3a, 3b: the logo for login</li>

                        <li>the color scheme throughout the design</li>

                        <li>15, 28, 30b: Empty state to engage users and encourage exploration of the interface</li>

                        <li>13, 24: A swipe to delete functionality</li>

                        <li>27: Success state to empower actions such as purchasing concerts</li>

                        <li>19a, 20a: An interactive, scrollable calendar to filter by date on a separate page instead of a modal</li>
                    </ul>

                    <h4>Staying true to the fans with more usability testing</h4>

                    <p>I was getting close to the end of the project and all that was left was to test and iterate on the high fidelity design. I built another prototype, this time with animations and more complex interactions to add delight to all of the functionality. There were two usability tests with a total of 13 participants. The critical prioritized recommendations were: to make artist and genre preferences easier to find, redesign the search flow to make it clearer, and to make audio and video settings easier to access from the video player. I made these adjustments before delivering the final prototype.</p>
                </CenterCol>
            </Grid>
            <VideoFullBlack>
                <source src={FinalPrototype} type="video/mp4" />
            </VideoFullBlack>
            <Grid>
                <CenterCol>
                    <h2>The end of the story, for now</h2>

                    <h3>Outcome and lessons</h3>

                    <p>The project ended with a final prototype of the app, Onstage. You can give it a test-drive <a href="https://www.figma.com/proto/ZUhCngnY6FfXipmS059Ja6/Onstage-Development-File?page-id=367%3A11476&node-id=383%3A1651&viewport=981%2C749%2C0.08178168535232544&scaling=scale-down" target="_blank" rel="noreferrer noopener">here</a>. Its mission was to provide an immersive live concert experience to music fans, in the comfort of their home. The project was well-received and people hoped it would go into development so that they could view actual concerts.</p>

                    <p>There were also some important lessons to address: </p>

                    <ul>
                        <li>Modeling the concert venue: It’s challenging to model the concert venue, an essential part of the vibe of live concerts, in the digital space. “Watch” worked as a spot to house the purchased tickets and video player but not everybody imagined that to be the structure in the app for finally “attending” the concert virtually.</li>

                        <li>Handling the infinite scrolling edge case: It’s particularly hard to address this edge case in a design. While it’s possible to set an Instagram-as-of-2018 limit to the endless scroll, there still needs to be sufficient content to make the prototype convey that it offers extensive personalized musical content.</li>
                    </ul>

                    <h4>Next steps</h4>
                    <p>I would certainly like to develop a working product in the future and hope that the virtual concerts of tomorrow will support live music fans and artists alike. Let’s see what happens. </p>
                </CenterCol>
            </Grid>
            <Next
                name="Subscription tracking made easy"
                link={"/keeps/"}
            />
        </ProjectLayout >
    )
}

export default Onstage