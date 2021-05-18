import React from "react"
import ProjectLayout from "../components/project-layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, LargeCol, SmallCol, CenterCol, FullCol } from "../components/grid.js"
import { GridLarge, One, Two, Three } from "../components/grid-large.js"
import { FlexInfo } from "../components/flex.js"
import { Image } from "../components/image.js"
import Title from "../components/title.js"

const Keeps = () => {
    return (
        <ProjectLayout>
            <SEO title="Keeps" />

            <Title>
                <h1>Keeps subscription tracking</h1>
                <h2>Bringing the live concert experience to music fans — in the comfort of their homes</h2>
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
                <div>
                    <h3>When was it?</h3>
                    <p>April - May 2021</p>
                    <h3>What did I do?</h3>
                    <p>Discovery, ideation, information architecture, wireframing, hi-fi mockups, prototyping, usability testing</p>
                    <h3>What did I use?</h3>
                    <p>Miro, Figma, Adobe Photoshop, Premiere</p>
                </div>
                <div>
                    <h2>Subscription tracking made easy</h2>
                    <p>
                        A startup had a product on the market called <i>Keeps</i>, which helped users keep track of all of their recurring subscription payments. Most of their users were over 30, middle class, and trying to be more budget conscious. Unlike its competitors, <i>Keeps</i> focused on subscriptions to products and services and didn’t include bills, utilities, or financial instruments. It provided basic information like a list of subscription names, billing cycles, and a calendar view of payment dates.
                    </p>
                    <h2>The challenge</h2>
                    <p>
                        At the time, the product was a web application that wasn't mobile-friendly. The company knew that half of their potential users were on mobile and wanted to increase their market reach. The goal was to develop an Android mobile app that addressed 3 business requirements:
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
                    <h2>Exploring the problem space</h2>

                    <h3>Discovery</h3>

                    <h4>[Blank] as a service</h4>

                    <p>
                        At the time of writing, May 2021, the Software as a Service (SaaS) business model was already a dominant force. The subscription-business industry had been growing at <a href="https://hbr.org/2017/12/subscription-businesses-are-booming-heres-how-to-value-them">200% annually since 2011</a>. This growth made sense; the recurring nature of subscriptions allowed SaaS to continually hone in on the customer experience, creating repeat customers who were loyal to the companies whose products they used.
                    </p>
                    <p>
                        However, there was a dark side to these recurring payments -- automatic renewals. According to a <a href="https://www.globenewswire.com/news-release/2016/03/21/1240985/0/en/Hiatus-Survey-62-of-Consumers-Waste-Money-on-Unwanted-Subscriptions-Because-They-Don-t-Cancel-Automatic-Renewals.html#:~:text=Key%20findings%20from%20the%20survey,was%20set%20for%20auto%2Drenewal.">survey of 100 consumers</a> by fintech startup Hiatus, almost 62% were paying unwanted subscriptions because they forget about auto-renewal. And, over 50% didn’t know how many subscriptions they currently had.
                    </p>

                    <h4>Interviewing subscribers</h4>

                    <p>
                        These findings helped shape the discovery process, especially when it came to user interviews. I interviewed 5 people, focusing on 3 areas: checking expenses, managing subscriptions, and a contextual inquiry using an existing subscription tracking service called TrackMySubs. I then mapped the results:
                    </p>
                    {/* pic of affinity map */}

                    <p>
                        The 3 most common frustrations that participants shared when managing subscriptions were:
                    </p>
                    <ul>
                        <li>Being able to unsubscribe from a subscription</li>
                        <li>Forgetting about which subscriptions they had because of automatic payments</li>
                        <li>Having subscriptions scattered among different bank accounts and credit cards</li>
                    </ul>

                    <p>
                        But there was more. Participants were especially emotional about lacking the time to decipher subscription charges within their expenses, especially parents. Others were tired of being bombarded by marketing emails from their subscriptions and missing important notifications.
                    </p>
                </CenterCol>
            </Grid>
        </ProjectLayout >
    )
}

export default Keeps