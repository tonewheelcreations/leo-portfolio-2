import React from "react"
import ProjectLayout from "../components/project-layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, CenterCol, FullCol } from "../components/grid.js"
import { GridLarge, One, Two, Three } from "../components/grid-large.js"
import { FlexInfo } from "../components/flex.js"
import { Image } from "../components/image.js"
import Title from "../components/title.js"
import { Video, VideoFullBlack } from "../components/video"
import Figure from "../components/figure"
import XpertvrEvanJourney from "../assets/xpertvr-evan-journey.mp4"
import XpertvrUsabilityTestWeb from "../assets/xpertvr-usability-test-web.mp4"
import { sliderImage } from "../components/styles/slider-image.module.scss"
import Blockquote from "../components/blockquote"
import Next from "../components/next-project"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { ReactCompareSlider } from 'react-compare-slider'
import Overflow from "../components/overflow"

const XpertVR = () => {
    return (
        <ProjectLayout>
            <SEO title="XpertVR" />

            <Title>
                <h1>XpertVR reboot</h1>
                <h2>Designing a customer-centered web experience for VR development</h2>
            </Title>


            <div className={sliderImage}>
                <ReactCompareSlider
                    itemOne={<StaticImage
                        src="../images/xpertvr/xpertvr-home-before.png"
                        alt="The XpertVR homepage before web redesign"
                        placeholder='blurred'
                        quality={100}
                    />}
                    itemTwo={<StaticImage
                        src="../images/xpertvr/xpertvr-home-after.png"
                        alt="The XpertVR homepage after web redesign"
                        placeholder='blurred'
                        quality={100}
                    />}
                />
                <p>before / after</p>
            </div>


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
                        Although XpertVR was receiving monthly enquiries for VR projects, they found that the majority of these came from referrals and Clutch reviews. When potential clients contacted the company through their website, their emails often expressed uncertainty about what XpertVR did. Clients didn’t know how the company could address their specific VR needs.
                    </p>

                    <p>
                        XpertVR hired Stradea Design Labs to redesign the website. Our goals were to identify customer frustrations while onboarding and to understand the individual customer journeys for researchers, trainers, and participants. In the end, we hoped to increase site traffic and engagement by 25-40%.
                    </p>

                    <p>
                        The redesigned website had a hard launch date of August 14th. This left us with a tight two-month timeline for the entire development cycle. I had to complete all user research, site mapping, and wireframing by July 1st.
                    </p>
                </div>
            </FlexInfo>

            <Grid>
                <CenterCol>
                   
                <h3>Discovery</h3>
                    <h2>The Kickoff Workshop</h2>

                    <p>
                        The first UX meeting with the XpertVR team was essentially a discovery workshop. The goal was to understand the specific problems the company was trying to solve and to align everyone behind a common plan for the web design. Evan and Drew, the company founders, felt that researchers, trainers, and participants were lost when they first came to the site. Email enquiries would often read, “We’re starting to work on a VR project at our school and would like to learn more about your company.”
                    </p>
                </CenterCol>

                <FullCol>
                    <Blockquote>
                        <em>We’re starting to work on a VR project at our school and would like to learn more about your company.</em>
                    </Blockquote>
                </FullCol>

                <CenterCol>
                    <p>
                        I asked the team if they could describe the current customer journeys for their three user types. This helped give some initial direction to the problem space and to the user research that would follow. By the end of the meeting, we had a clear goal: to redesign the site so that it would provide a clear path for each user through their respective journey.
                    </p>
                </CenterCol>

                <Image>
                    <Figure>
                        <Video>
                            <source
                                src={XpertvrEvanJourney}
                                type="video/mp4"
                            />
                        </Video>
                        <figcaption>
                            Discussing XpertVR’s customer journeys during the discovery kickoff
                        </figcaption>
                    </Figure>
                </Image>

                <CenterCol>
                <h3>Research</h3>
                    <h2>A study of the site</h2>

                    <h4>Planning</h4>

                    <p>
                        With this added focus, I put together a research plan. I wanted to observe the individual customer journeys in action and find out what the users’ frustrations were while onboarding on the site. Some of the core questions included:
                    </p>

                    <ul>
                        <li>How do customers perceive XpertVR when they first use the site?</li>

                        <li>What specific goals do customers have when first using the site? Are there mental models that customers have for the steps they expect to take?</li>

                        <li>When going through the site and getting info, do users understand the quality and complexity of the user stories that are being told? Is it coming through clearly in the site or does it only come through user experiences when already working with XpertVR?
                        </li>
                    </ul>

                    <h4>Web Analysis</h4>

                    <p>
                        Stradea set up Google Analytics on the XpertVR site two months prior to project start, in April 2021. Before jumping into user research, we met with the team to discuss metrics affecting site traffic and user engagement.
                    </p>
                    <p>
                        Some of the metrics we looked at for user engagement included loading times for desktop and mobile and overall site accessibility. Loading times were quite fast: 0.56 seconds for desktop and 2.74 seconds for mobile. But, AODA compliance was limited, including WCAG contrast issues and missing meta descriptions for some pages. Usability testing would help show these metrics in a more human-centered way.
                    </p>

                </CenterCol>

                <Image>
                    <Figure>
                        <Zoom>
                            <StaticImage
                                src="../images/xpertvr/xpertvr-analytics-1.jpg"
                                alt="Google Analytics for the initial XpertVR site"
                                placeholder='blurred'
                                quality={100}
                            />
                        </Zoom>
                        <figcaption>
                            Google Analytics showing site traffic, SEO, and load times for the initial XpertVR site
                        </figcaption>
                    </Figure>
                </Image>

                <CenterCol>
                    <p>
                        As for traffic, the website audience was 1276 people in April. Of these, only 417 were return users. We looked at this discrepancy through the lenses of on-page SEO, SERP ranking (placement in search engine results pages), and the overall domain authority score. The SEO was low, 50/100, and there were no SERP rankings. This was definitely impeding site traffic and causing the domain authority score to be lower, although a score of 22 was still decent for a fairly new B2B site.
                    </p>

                    <h4>Who learns with VR?</h4>

                    <p>
                        To begin user research, I sent out a screener survey to several Facebook VR enthusiast groups to find participants for the user interviews. The goal was to find people who had some experience learning with VR products and services. This would help the findings more closely reflect the experience of a potential client interacting with the XpertVR site. The responses below revealed important trends in the prospective participants.
                    </p>
                </CenterCol>

                <CenterCol>
                    <Figure>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-experience-level.jpg"
                            alt="Pie chart showing people's experience level with VR"
                            placeholder='blurred'
                            quality={100}
                        />
                        <figcaption>
                            Screener results showed most people were beginners with VR
                        </figcaption>
                    </Figure>

                </CenterCol>

                <CenterCol>
                    <p>
                        First, the majority were beginners who only tried a couple of VR products or services. I made sure to address this in the user interviews to ensure that the content and site architecture weren’t creating too much cognitive load for users.
                    </p>
                </CenterCol>

                <CenterCol>
                    <Figure>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-go-learn.jpg"
                            alt="Pie chart showing most people to websites and social media to learn about VR"
                            placeholder='blurred'
                            quality={100}
                        />
                        <figcaption>
                            Screener results showed most people learned about VR through social media or product/service websites
                        </figcaption>
                    </Figure>
                </CenterCol>

                <CenterCol>
                    <p>
                        Second, the most common entry points for learning about VR were product or service websites and social media. This helped reinforce the customer journey for the research participants, who mostly came to XpertVR from posts on Reddit, the company Facebook page, and Facebook ads.
                    </p>
                </CenterCol>

                <CenterCol>
                    <h4>Interviewing in the VR space</h4>

                    <p>
                        Structuring the user interviews was one of the most challenging parts of the research process. One concern was to make sure that the XpertVR site was accessible to beginners, especially based on the screener findings. At the same time, there were three distinct user types and their corresponding customer journeys that had to be engaging.
                    </p>
                    <p>
                        With this in mind, I structured the interview into three broad sections:
                    </p>
                    <ul>

                        <li>Background questions exploring a participant’s experiences, goals, and frustrations while learning with VR</li>

                        <li>A contextual inquiry testing the XpertVR site for each of the three user types — researchers, trainers, and participants — in order to see how they interact with the website touchpoint of their customer journey</li>

                        <li>Competitor analysis testing overall usability with two sites the XpertVR team identified as direct competitors — <a href="https://www.talespin.com/" target="_blank" rel="noreferrer noopener">Talespin</a> and <a href="https://pixovr.com/" target="_blank" rel="noreferrer noopener">PixoVR</a></li>
                    </ul>

                    <p>
                        I tested six participants, with each interview lasting about an hour. You can see a snippet from a usability test below.
                    </p>
                </CenterCol>
            </Grid>

            <VideoFullBlack>
                <source
                    src={XpertvrUsabilityTestWeb}
                    type="video/mp4"
                />
            </VideoFullBlack>

            <Grid>
                <CenterCol>
                    <p>
                        In hindsight, I would’ve opted for a larger testing group — 15 participants. For one, usability testing would be more focused for each user type, providing more substantial results. Also, the tests could be shorter, around 30 minutes, alleviating some of the exhaustion participants experienced toward the end of the hour.
                    </p>

                    <h3>Synthesis</h3>
                    <h2>Understanding XpertVR users</h2>

                    <p>
                        The user interviews provided important insights about overall usability. Comparing the XpertVR site to its competitors, users felt frustrated by large amounts of white space separating sections of content. None of the users scrolled below 50 percent of the homepage content. They also felt overwhelmed by large sections of copy without clear CTA’s to guide them toward the information I asked them to find.
                    </p>
                    <p>
                        Interestingly, the majority of users were looking for data to validate their decision to do business with XpertVR. They were uncertain about XpertVR’s value when first landing on the homepage and wanted some sort of video or media to explain exactly what the company creates. It was also important for them to see case studies showing XpertVR’s work as well as businesses they’ve partnered with. This showed that it was important to take preventive messaging into account when rewriting some of the website content.
                    </p>
                </CenterCol>
                <Image>
                    <Figure>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-messaging.png"
                            alt="A web chart showing the qualities of prevention and promotional messaging"
                            placeholder='blurred'
                            quality={100}
                        />
                        <figcaption>
                            Preventive messaging played a large role in developing the customer experience for the new XpertVR site (image courtesy of Stradea Design Labs)
                        </figcaption>
                    </Figure>
                </Image>
                <CenterCol>
                    <h4>Customer journeys</h4>

                    <p>
                        I used all of these findings to create complete customer journey maps, showing the entire path the users took from discovering XpertVR to conversion. For researchers and trainers, there were opportunities to simplify landing page content and reduce cognitive load. For participants, the main opportunity was to give control of the system back to the user in the research portal. All users would benefit from clear value propositions in the copy and prominent CTA’s leading to the services for their particular journey.
                    </p>
                </CenterCol>

                <Image>
                    <Figure>
                        <Zoom>
                            <StaticImage
                                src="../images/xpertvr/xpertvr-journey-research.jpg"
                                alt="A customer journey map"
                                placeholder='blurred'
                                quality={100}
                            />
                        </Zoom>
                        <figcaption>
                            A customer journey map for Michael, a researcher using VR in a study
                        </figcaption>
                    </Figure>
                </Image>

                <CenterCol>
                <h3>Information architecture</h3>
                    <h2>Creating the website structure</h2>

                    <p>
                        With the customer journeys defined, I started working on a sitemap that would easily fit the users’ mental models. This was a balancing act with the marketing and branding research that was happening simultaneously. The sitemap had to include branding content for four behavioral profiles — cautious competence, optimistic belonging, cautious engagement, and cautious autonomy — while remaining concise and easy to navigate.
                    </p>
                </CenterCol>

                <Image>
                    <Figure>
                        <Zoom>
                            <StaticImage
                                src="../images/xpertvr/xpertvr-sitemap.png"
                                alt="The XpertVR sitemap"
                                placeholder='blurred'
                                quality={100}
                            />
                        </Zoom>
                        <figcaption>
                            The XpertVR sitemap, with branding and customer journeys incorporated
                        </figcaption>
                    </Figure>
                </Image>

                <CenterCol>
                    <p>
                        Since users would view the site from left to right, I made the <em>Homepage</em>, <em>Our Story</em>, <em>Meet the Team</em>, and <em>What We Do</em> tabs the first four items, in that order. The homepage had to be a sort of navigation itself, providing clear entry points for the three customer journeys and their corresponding information and services. For the most critical section at the top, above the fold, I started with the branding tagline followed by <em>our story</em>. This would provide “why” messaging early on, inspiring trust in XpertVR.
                    </p>

                    <h4>Visualizing through wireframes</h4>

                    <p>
                        Now that the site map was in place, I could begin to visually arrange all of the content in the customer journeys. I started with the three most important pages which would validate XpertVR for their customers:
                    </p>

                    <ul>

                        <li>The homepage</li>

                        <li>Our story</li>

                        <li>A services subpage — VR Training & eLearning</li>

                    </ul>
                </CenterCol>
            </Grid>
            <GridLarge>
                <One>
                    <Overflow>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-homepage.jpg"
                            alt="A wireframe of the XpertVR homepage"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Overflow>
                    <p>
                        The homepage was the most substantial. I started with the branding tagline and hero image along with a clear CTA to help researchers, trainers, and participants learn what XpertVR did and why. I then created an <em>Our Story</em> section with a clear “learn more” CTA to make it easier to validate XpertVR. These sections were above the hold and would engage users <a href="https://www.hostingmanual.net/3-seconds-how-website-speed-impacts-visitors-sales/" target="_blank" rel="noreferrer noopener">within three seconds</a> of viewing to ensure a lower bounce rate.
                    </p>
                </One>

                <Two>
                    <Overflow>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-our-story.jpg"
                            alt="A wireframe for the XpertVR 'Our Story' page"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Overflow>
                    <p>
                        The <em>Our Story</em> page followed. It was second in the top nav and a crucial part of the <em>why</em>-based messaging to inspire trust in XpertVR. Like nearly every page on the site, <em>Our Story</em> ended with a contact form to simplify engagement with the XpertVR team and to personalize the experience based on the page content.
                    </p>
                </Two>

                <Three>
                    <Overflow>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-training-elearning.jpg"
                            alt="A wireframe for the XpertVR 'Training & eLearning' service subpage"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Overflow>

                    <p>
                        The final static page I wireframed was the <em>VR Training & eLearning </em>subpage. This essentially provided a template for the other service pages and ensured that the service was clear, there was validation through selected case studies, and it was easy to get in touch with a team efficiently through a service-specific contact form.
                    </p>
                </Three>
            </GridLarge>

            <Grid>
                <CenterCol>
                    <p>
                        Since dynamic content was a large part of XpertVR’s SEO strategy and overall growth, I finished by making templates for case studies and team members. The company would easily be able to access these in the Wordpress CMS and quickly create modular content.
                    </p>

                    {/* <h2>Building the XpertVR site</h2>

                    <h3>Development</h3>

                    <p>
                        Scope creep is a common culprit in any project and it definitely came up toward the end. The initial XpertVR site had six main pages and eight subpages; the new one would have 11 main pages and 10 subpages. This didn’t include blog posts or case studies. The Stradea team needed an extra hand in web design.
                    </p>
                </CenterCol>

                <LeftCol>
                    <Zoom>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-blog-1.jpg"
                            alt="The final web design for an article blog post template"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </LeftCol>

                <RightCol>
                    <Zoom>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-blog-2.jpg"
                            alt="The final web design for a book listing blog post template"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </RightCol>

                <LeftCol>
                    <Zoom>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-blog-3.jpg"
                            alt="The final web design for an article blog post template"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </LeftCol>

                <RightCol>
                    <Zoom>
                        <StaticImage
                            src="../images/xpertvr/xpertvr-blog-4.jpg"
                            alt="The final web design for a product review blog post template"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </RightCol>

                <CenterCol>
                    <p>
                        Using Elementor, I created the web designs for the bulk of the blog posts. There were ultimately four blog post templates: two article formats, a product review, and a book listing. You can see a bit of this visual environment below. Overall, Elementor is a powerful tool that greatly speeds up the development workflow. It’s based on basic HTML, CSS, and JavaScript principles, making it fairly easy and intuitive to use.
                    </p> */}

<h3>Outcomes and lessons</h3>
                    <h2>Ready to launch</h2>

                    <p>
                        At the time of writing this case study, the site was in the final stages of QA. You’ll be able to see the <a href="https://xpertvr.ca/" target="_blank" rel="noreferrer noopener">new XpertVR site here</a>. While it would take several months to see the impact of the redesign, we reached XpertVR’s goals in a deeply user-centered way. For one, we uncovered serious usability issues through contextual and competitor analysis. Now, the layout of content and customer journeys are more efficient. Most importantly, we made sure that the three user types could easily complete the flow to get the information and services they needed. The site matched these users’ mental models more closely than before.
                    </p>

                    <h4>Lessons learned</h4>

                    <p>
                        This is all a big win for the users and the XpertVR team, but it was certainly a challenging process. There were some important lessons learned.
                    </p>

                    <h5>Managing user research scope</h5>

                    <p>
                        As I mentioned earlier, conducting a three-part user interview with background questions, contextual analysis, and competitor usability testing created excessive cognitive load. Participants were exhausted by the end of the hour-long interviews. This might have affected the accuracy of the findings. It would’ve been better to have a larger sample size and explore each user type and their journey with a separate group of 3-5 participants.
                    </p>

                    <h5>Balancing user-centered design with content-centered design</h5>

                    <p>
                        A web experience should not only be efficient and accessible but should accommodate the visual and written content within it. It seems straightforward, but it’s challenging when branding and behavioral activations are involved. I had to think quite a bit about copy and its balance with interactive and static UI elements like buttons and images, respectively. Business wouldn’t happen if users didn’t trust the content.
                    </p>

                    <h5>Adapting to and accepting the limitations of visual builders</h5>

                    <p>
                        Visual website builders like Elementor greatly improve workflow but also come with limitations. For instance, it’s not possible to perfectly follow atomic design and assemble composite components that can be globally edited from a main instance. For the blog posts I built, I had to reverse-engineer circular image masking for over 20 images because of a change in design preferences. For next time, it would be best to finalize all high fidelity decisions before any development.
                    </p>

                    <h4>Next Steps</h4>

                    <p>
                        After the site launches, we’ll conduct usability testing to look at general site usability and clarity of the specific customer journeys again. In about three months, we’ll crack open Google Analytics to look at site traffic, SERP, and SEO. I’m excited to see how the improved customer journeys improve understanding of what XpertVR does and lead to more engagement through the site.
                    </p>

                </CenterCol>
            </Grid >

            <Next
                name="Onstage music live-streaming"
                link={"/onstage/"}
                medium="Product design"
            />
        </ProjectLayout >
    )
}

export default XpertVR