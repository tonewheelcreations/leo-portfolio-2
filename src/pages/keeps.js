import React from "react"
import ProjectLayout from "../components/project-layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, LeftCol, RightCol, CenterCol, FullCol } from "../components/grid.js"
import { GridLarge, One, Two, Three } from "../components/grid-large.js"
import { FlexInfo } from "../components/flex.js"
import { Image } from "../components/image.js"
import Title from "../components/title.js"
import Lofi from "../assets/c2-lofi-test.mp4"
import Hifi from "../assets/c2-hifi-test.mp4"
import Final from "../assets/c2-final-prototype.mp4"
import { VideoFullBlack } from "../components/video"
import Blockquote from "../components/blockquote"
import Next from "../components/next-project"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Keeps = () => {
    return (
        <ProjectLayout>
            <SEO title="Keeps" />

            <Title>
                <h1>Subscription tracking made easy</h1>
                <h2>Creating a single source of truth with the Keeps mobile app</h2>
            </Title>

            <Grid>
                <Image>
                    <StaticImage
                        src="../images/c2/c2-cover.png"
                        alt="Keeps app screens in an angled masonry image collection"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>
            </Grid>

            <FlexInfo>
                <div data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease-out"
                >
                    <h3>When was it?</h3>
                    <p>April - May 2021</p>
                    <h3>What did I do?</h3>
                    <p>Discovery, ideation, information architecture, wireframing, hi-fi mockups, prototyping, usability testing</p>
                    <h3>What did I use?</h3>
                    <p>Miro, Figma, Photoshop, Premiere</p>
                </div>
                <div data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-easing="ease-out"
                >
                    <h2>All about Keeps</h2>
                    <p>
                        A startup had a product on the market called Keeps, which helped users keep track of all of their recurring subscription payments. Most of their users were over 30, middle class, and trying to be more budget conscious. Unlike its competitors, Keeps focused on subscriptions to products and services and didn’t include bills, utilities, or financial instruments. It provided basic information like a list of subscription names, billing cycles, and a calendar view of payment dates.
                    </p>
                    <h2>The challenge</h2>
                    <p>
                        At the time, the product was a web application that wasn't mobile-friendly. The company knew that half of their potential users were on mobile and wanted to increase their market reach. The goal was to develop an Android mobile app that addressed three business requirements:
                    </p>

                    <ul>
                        <li>to see all subscriptions in one place with a comprehensive view of spending</li>

                        <li>to directly unsubscribe from a subscription</li>

                        <li>to get notified when subscriptions were about to auto-renew</li>
                    </ul>

                    <p>
                        The project had a tight 90-hour timeline. It followed an Agile 4-week sprint format and required weekly deliverables that showed progress toward the final hi-fi app prototype. However, the exact deliverables weren’t specified, adding the additional challenge of reigning in the arc of the project with a clear plan of action.
                    </p>
                </div>

            </FlexInfo>
            <Grid>
                <CenterCol>
                    <h2>Planning ahead</h2>
                    <h3>Project planning</h3>

                    <p>
                        In order to stick to the 90-hour timeline, I started with a project plan. This outlined the phases, deliverables, and design rationale throughout the project. After I completed each phase, I presented the deliverables at stakeholder meetings to show progress toward the final prototype. A lot of time was spent in the discovery phase. It was important to understand the industry and its consumers in order to translate Keeps's business requirements to mobile in the most simple and effective way.
                    </p>
                </CenterCol>
                <Image>
                    <Zoom>
                        <StaticImage
                            src="../images/c2/c2-project-plan.png"
                            alt="Project plan"
                            placeholder='blurred'
                        />
                    </Zoom>
                </Image>

                <CenterCol>
                    <h2>Exploring the problem space</h2>
                    <h3>Discovery</h3>

                    <h4>[Blank] as a service</h4>

                    <p>
                        At the time of writing, May 2021, the Software as a Service (SaaS) business model was already a dominant force. The subscription-business industry had been growing at <a href="https://hbr.org/2017/12/subscription-businesses-are-booming-heres-how-to-value-them" target="_blank" rel="noreferrer noopener">200 percent annually since 2011</a>. This growth made sense; the recurring nature of subscriptions allowed SaaS to continually hone in on the customer experience, creating repeat customers who were loyal to the companies whose products they used.
                    </p>
                    <p>
                        However, there was a dark side to these recurring payments — automatic renewals. According to a <a href="https://www.globenewswire.com/news-release/2016/03/21/1240985/0/en/Hiatus-Survey-62-of-Consumers-Waste-Money-on-Unwanted-Subscriptions-Because-They-Don-t-Cancel-Automatic-Renewals.html#:~:text=Key%20findings%20from%20the%20survey,was%20set%20for%20auto%2Drenewal." target="_blank" rel="noreferrer noopener">survey of 100 consumers</a> by fintech startup <i>Hiatus</i>, almost 62 percent were paying unwanted subscriptions because they forget about auto-renewal. And, over 50 percent didn’t know how many subscriptions they currently had.
                    </p>

                    <h4>Interviewing subscribers</h4>

                    <p>
                        These findings helped shape the discovery process, especially when it came to user interviews. I interviewed five people with at least five subscriptions. We discussed tracking expenses and managing subscriptions and did a contextual inquiry using an existing subscription tracking service called TrackMySubs. I then mapped the results:
                    </p>
                </CenterCol>
                <Image>
                    <Zoom>
                        <StaticImage
                            src="../images/c2/c2-affinity-map.jpg"
                            alt="Affinity map of user interview notes"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>
                <CenterCol>
                    <p>
                        The most common frustrations that participants shared when managing subscriptions were:
                    </p>
                    <ul>
                        <li>Not being able to easily cancel a subscription</li>
                        <li>Forgetting about which subscriptions they had because of automatic payments</li>
                        <li>Having subscriptions scattered among different bank accounts and credit cards</li>
                    </ul>

                    <p>
                        But there was more. Participants were especially frustrated from being bombarded by marketing emails from their subscriptions and missing important notifications. Others lacked the time to decipher subscription charges within their expenses.
                    </p>
                </CenterCol>
                <FullCol>
                    <Blockquote>
                        <em>It’s hard to have the energy to do things right away when you’re busy.
                        </em>
                    </Blockquote>
                </FullCol>
                <CenterCol>
                    <p>
                        There were two types of users emerging: busy multitaskers lacking time to manage even a few subscriptions and an automator-type looking to simplify managing lots of subscriptions and reduce unnecessary communication. I created primary and secondary personas to reflect this.
                    </p>
                    <p>Meet Jorge, the primary persona:</p>
                </CenterCol>
                <Image>
                    <StaticImage
                        src="../images/c2/c2-persona-1.png"
                        alt="Our primary persona: Jorge, the Automator"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>
                <CenterCol>
                    <p>
                        Jorge closely represented <i>Keeps’s</i> target user and aligned with all of the business requirements. I was now solving a user-centered problem: how might we help Jorge see all his subscriptions in one place with a comprehensive view of spending, directly unsubscribe from a subscription, and only get notified when a subscription was about to auto-renew.
                    </p>

                    <p>
                        I created user stories to model the red route flows that Jorge would take to accomplish his goals. I started with four user epics but decided to combine viewing all subscriptions and getting a comprehensive look at spending into a single flow, since they were related and it would ensure the desired simplicity of the interface.
                    </p>

                </CenterCol>
                <Image>
                    <StaticImage
                        src="../images/c2/c2-user-stories.png"
                        alt="User stories for the mobile MVP"
                        placeholder='blurred'
                        quality={100}
                    />
                </Image>
                <CenterCol>

                    <h2>Creating a blueprint</h2>
                    <h3>Information architecture</h3>

                    <p>
                        Now, I had to develop an architecture that would help Jorge accomplish his goals. After consolidating the user epics and determining the user stories needed to accomplish each of Jorge’s tasks, I created three user flows to model his paths through the interface:
                    </p>
                </CenterCol>
            </Grid>

            <GridLarge>
                <One>
                    <Zoom>
                        <StaticImage
                            src="../images/c2/c2-flow-1.png"
                            alt="'View susbcriptions and spending' user flow"
                            placeholder='blurred'
                        />
                    </Zoom>
                    <p>
                        <i>View subscriptions and spending</i> allowed users to see their subscriptions and spending in one place
                    </p>
                </One>

                <Two>
                    <Zoom>
                        <StaticImage
                            src="../images/c2/c2-flow-2.png"
                            alt="'Get notified' user flow"
                            placeholder='blurred'
                        />
                    </Zoom>
                    <p>
                        <i>Get notified</i> included setting and receiving reminders about upcoming subscription renewals
                    </p>
                </Two>

                <Three>
                    <Zoom>
                        <StaticImage
                            src="../images/c2/c2-flow-3.png"
                            alt="'Cancel subscription' user flow"
                            placeholder='blurred'
                        />
                    </Zoom>
                    <p>
                        <i>Cancel subscription</i> allowed users to definitively cancel a subscription and no longer get charged
                    </p>
                </Three>
            </GridLarge>

            <Grid>
                <CenterCol>
                    <p>
                        The last step in putting together the architecture was to arrange the flows into simplified interface outline. The idea was to use <i>Keeps’s</i> core account-linking functionality as a hub-and-spoke structure that would allow users to easily import subscriptions from their payment sources and manage them in one place within the app. The account-linking also meant being able to directly cancel a subscription in-app.
                    </p>
                    <p>
                        I started with rough sketches and quickly moved into lo-fi wireframes. This helped move the project along within the short timeline and also provided an easier transition into the upcoming hi-fi designs. Since this was going to be an Android mobile app, I used an Android <a href="https://www.figma.com/community/file/900479694578549256" target="_blank" rel="noreferrer noopener">wireframe kit</a> in Figma to expedite the building process.
                    </p>
                </CenterCol>


                <Image>
                    <h5>View all subscriptions and spending</h5>
                    <Zoom>
                        <StaticImage
                            src="../images/c2/c2-wireframe-1.png"
                            alt="Wireframe of &quot;View all subscriptions and spending&quot;"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>

                <Image>
                    <h5>Get notified about a subscription auto-renewing</h5>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-wireframe-2.png"
                            alt="Wireframe of &quot;Get notified about a subscription auto-renewing&quot;"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>

                <Image>
                    <h5>Cancel a subscription</h5>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-wireframe-3.png"
                            alt="Wireframe of &quot;Cancel a subscription&quot;"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>
                <CenterCol>
                    <h2>Validating the initial structure</h2>
                    <h3>Low-fidelity testing</h3>

                    <p>
                        Using the wireframes, I created a lo-fi prototype to test the initial structure and flows. I then conducted guerrilla testing with five participants. The context was that the participant was already a Keeps desktop web app user, Jorge in this case, and was trying out the mobile version for the first time. He already had an account and subscriptions linked to a credit card within the app. The tasks were:
                    </p>

                    <ol>
                        <li>View all existing subscriptions</li>
                        <li>Get a comprehensive view of spending</li>
                        <li>Add new subscriptions to dashboard</li>
                        <li>Resolve alert about subscription auto-renewing</li>
                        <li>Set new alert for auto-renewal</li>
                        <li>Cancel a subscription that’s over budget</li>
                    </ol>
                </CenterCol>
            </Grid>
            <VideoFullBlack>
                <source src={Lofi} type="video/mp4" />
            </VideoFullBlack>

            <Grid>
                <CenterCol>
                    <p>
                        It was great to do usability testing this early in the project because there were several critical issues that emerged.
                    </p>

                    <p>
                        Perhaps the most existential of these was that it was not clear where to add new subscriptions to track or where existing ones came from on the Overview page. The core mechanism for viewing subscriptions appeared not to be user friendly. Part of this confusion might’ve resulted from the wording of the task, asking to import subscriptions from a new account when the goal was essentially just to link the new account to the app. Still, this issue, along with the others, prevented Jorge from completing his goals. This meant Keeps was not meeting its business requirements.
                    </p>
                </CenterCol>

                <CenterCol>
                    <StaticImage
                        src="../images/c2/c2-prioritized-recs.png"
                        alt="Wireframe of &quot;Cancel a subscription&quot;"
                        placeholder='blurred'
                        quality={100}
                    />

                </CenterCol>

                <CenterCol>
                    <h2>Foundations for a prototype</h2>
                    <h3>High-fidelity design</h3>

                    <p>
                        In addition to addressing the prioritized recommendations for the low-fidelity testing, I had to move forward and create a light-weight style guide for the mobile design. This included a baseline color theme, typography, and core UI components. Keeps already had a brand platform, which I extended with logo design. I felt the castle imparted a sense of trustworthiness and care. To ensure that the design followed <a href="https://material.io/design/guidelines-overview" target="_blank" rel="noreferrer noopener">Material Guidelines</a>, I used the official <a href="https://www.figma.com/community/file/778763161265841481/Material-Baseline-Design-Kit" target="_blank" rel="noreferrer noopener">Material Baseline Design Kit</a> in Figma.
                    </p>
                </CenterCol>
                <LeftCol>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-brand.png"
                            alt="Keeps brand platform"
                            placeholder="blurred"
                            quality={100}
                        />
                    </Zoom>

                </LeftCol>

                <RightCol>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-colors.png"
                            alt="Keeps color theme"
                            placeholder="blurred"
                            quality={100}
                        />
                    </Zoom>

                </RightCol>

                <LeftCol>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-fonts.png"
                            alt="Keeps typography"
                            placeholder="blurred"
                            quality={100}
                        />
                    </Zoom>

                </LeftCol>

                <RightCol>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-components.png"
                            alt="Keeps UI components"
                            placeholder="blurred"
                            quality={100}
                        />
                    </Zoom>
                </RightCol>

                <CenterCol>
                    <p>
                        I understood that the wireframes were just a structural outline and that there was a lot of useful feedback to incorporate into the next round of designs. I focused in particular on the first of the critical issues, making sure that the dashboard screen — the heart of the prototype — had clear affordances indicating how to manage and view subscriptions.
                    </p>

                    <p>I created hi-fi mockups for each red route with all of the feedback in mind:</p>
                </CenterCol>

                <Image>
                    <h5>View all subscriptions and spending</h5>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-hifi-1.png"
                            alt="Hi-fi mockup of &quot;View all subscriptions and spending&quot;"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>

                <Image>
                    <h5>Get notified about a subscription auto-renewing</h5>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-hifi-2.png"
                            alt="Hi-fi mockup of &quot;Get notified about a subscription auto-renewing&quot;"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>

                <Image>
                    <h5>Cancel a subscription</h5>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-hifi-3.png"
                            alt="Hi-fi mockup of &quot;Cancel a subscription&quot;"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>

                <CenterCol>
                    <h2>The prototype: a draft</h2>
                    <h3>Prototype testing</h3>

                    <p>
                        It was important to do another round of usability testing after revising the four critical issues. I wanted to validate the placement of the floating action button (FAB) on the Overview page and ensure that the modal bottom sheet it opened simplified the interface for Jorge. I also wanted to address the new icon for opening the comprehensive spending page, the copy for a canceled subscription, and the ease of setting a reminder. I followed essentially the same testing script since the scope of the business requirements hadn’t changed and only added one task — to set price change notifications.
                    </p>
                </CenterCol>
            </Grid>

            <VideoFullBlack>
                <source src={Hifi} type="video/mp4" />
            </VideoFullBlack>

            <Grid>
                <CenterCol>
                    <p>
                        There were two critical issues this time around: it was not clear where to access notifications nor was it clear where to set reminders. Participants didn’t expect to go to Settings to change their notification preferences. They felt it would be easier if notifications and reminders were grouped together, since reminders were a type of notification. The same applied to setting the reminders themselves. Participants expected to find reminders on the Calendar page since reminders since both were time-related.
                    </p>

                    <h2>The prototype: revised</h2>
                    <h3>Final designs</h3>

                    <p>
                        I time-boxed the remainder of the project for revisions of the hi-fi prototype. Using the findings from the second usability test, I iterated on 9 of the screens:
                    </p>
                </CenterCol>

                <Image>
                    <Zoom >
                        <StaticImage
                            src="../images/c2/c2-hifi-revised.png"
                            alt="Revised screens from the first round of hi-fi mockups"
                            placeholder='blurred'
                            quality={100}
                        />
                    </Zoom>
                </Image>

                <CenterCol>
                    <p>I made the following revisions:</p>

                    <ul>
                        <li>3: I added an account label for each subscription to indicate that it was imported from and tied to that payment source. I also added a “monthly” label under the grand total for clarity.</li>

                        <li>5, 6: I changed the FAB’s expanding modal bottom sheet to include setting a reminder, removing the “organize spending” option. This made sense from an interaction design standpoint in relation to the “add” icon on the FAB and also made setting reminders much more prominent in the UI.</li>

                        <li>17: I made the Calendar top nav more uniform with the rest of the pages and reduced cognitive load by just having one trailing icon for setting reminders.</li>

                        <li>26, 27: I moved reminders out of the Profile page and combined them with Notifications under Settings to reduce cognitive load.</li>
                    </ul>

                    <h2>Project Completion</h2>
                    <h3>Outcomes and lessons</h3>

                    <p>
                        After making all of the revisions from the two usability tests, I wired together the final prototype, below. You can try it out yourself <a href="https://www.figma.com/proto/GSs8ri8C4hw3U7QbQ4PNR2/Material-Baseline-Design-Kit-Keeps?page-id=54%3A5829&amp;node-id=54%3A13775&amp;viewport=1258%2C618%2C0.08787628263235092&amp;scaling=scale-down" target="_blank" rel="noreferrer noopener">here</a>. People enjoyed using the prototype and, above all, praised it for its simplicity. While this mobile version of the Keeps app met all of the company’s business requirements, there were still some challenges to address going forward.
                    </p>
                </CenterCol>
            </Grid>

            <VideoFullBlack>
                <source src={Final} type="video/mp4" />
            </VideoFullBlack>

            <Grid>
                <CenterCol>
                    <h4>Lessons learned</h4>

                    <p>Aside from operating within a tight timeframe, there were two important lessons learned:</p>

                    <ul>
                        <li>Adhering to Material Guidelines: An extensive design system is a double-edged sword, on one side taking a lot of guesswork out of UI component specs but on the other side requiring granular perfection from the entire UI. Despite using Material’s design kit, it was still challenging to QA all of the designs with time limitations. It was nonetheless a great learning experience, strengthening one’s understanding of design patterns, interactions, animations and, well, the list goes on.</li>

                        <li>User scenario and context: In order to avoid scope creep and stick to the project deadline, I chose to design for a return user. This made sense since Keeps already had an established user base. However, this created issues of clarity when inevitably testing with new users. There was no onboarding flow, so I frequently had to explain parts of the UI and reword usability test questions. Parts of the design, like linking a new account, understandably felt disconnected.</li>
                    </ul>

                    <h4>Next Steps</h4>

                    <p>
                        I would start by creating an onboarding flow. This would help orient new users and avoid confusion while testing. I would also expand on the “setting a reminder” use case since time constraints left this functionality to be pretty limited in the final prototype. I would do the same with UI on the Calendar page.
                    </p>

                </CenterCol>
            </Grid >
            <Next
                name="Beating decision anxiety on a budget"
                link={"/house2home/"}
            />
        </ProjectLayout >
    )
}

export default Keeps