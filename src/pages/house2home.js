import React from "react"
import ProjectLayout from "../components/project-layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, LeftCol, RightCol, CenterCol, FullCol } from "../components/grid.js"
import { FlexInfo } from "../components/flex.js"
import { Image, ImageFull } from "../components/image.js"
import Title from "../components/title.js"
import Usability from "../assets/ds-usability-test.mp4"
import Prototype from "../assets/ds-final-prototype.mp4"
import { VideoFullBlack } from "../components/video"
import Next from "../components/next-project"

const House2Home = () => {
   return (
      <ProjectLayout>
         <SEO title="House2Home" />
         
         <Title>
            <h1>Beating decision anxiety on a budget</h1>
            <h2>Simplifying home decor with House2Home starter kits</h2>
         </Title>
         <Grid>
         <Image>
               <StaticImage
               src="../images/design-sprint/ds-header-image2.png"
               alt="home decor landing page on laptop"
               placeholder="blurred"
               quality={100} />       
         </Image>
         </Grid>
       <FlexInfo>
          <div>
               <h3>When was it?</h3>
               <p>February 2021</p>
               <h3>What did I do?</h3>
               <p>User research, storyboarding, visual design, prototyping, usability testing</p>
               <h3>What did I use?</h3>
               <p>Figma, Miro, Adobe Photoshop, Premiere</p>
            </div>
              <div>
               <h2>What is House2Home?</h2>
               <p>
                  House2Home is an e-commerce site that sells small home decor and accessories. Most of the items fall in the $10-50 range, which is perfect for their younger customer base of college graduates. Many of their customers were moving to new apartments but were struggling to find the look they wanted — on a small budget — after moving.</p>
                  
               <h2>The challenge</h2>
               <p>
                  Customers knew the look they wanted but felt overwhelmed by the shopping process. House2Home saw an opportunity to
                  make the shopping process easier with pre-built starter kits of items. How might we help customers overcome their
                  anxiety and easily find that perfect look they desired while meeting House2Home’s requirements of selling starter
                  kits on their desktop platform?
            </p>
            </div>
       </FlexInfo>
         <Grid>
            <CenterCol>
               <h2>Understanding the problem</h2>
               <h3>Synthesizing research</h3>
               <p>
                  The first day of the sprint was all about understanding the problem. I started by looking at existing customers. The
                  research team at House2Home provided initial marketing data and interview insights about customers’ experiences
                  shopping for home decor.
            </p>
            </CenterCol>
         
            <CenterCol>
               <StaticImage
                  src="../images/design-sprint/ds-user-deena.png"
                  alt="Deena, a House2Home customer"
                  quality={100}
                  placeholder="blurred"
               />
               <StaticImage
                  src="../images/design-sprint/ds-user-lauren.png"
                  alt="Lauren, a House2Home customer"
                  quality={100}
                  placeholder="blurred"
               />
               <StaticImage
                  src="../images/design-sprint/ds-user-ron.png"
                  alt="Ron, a House2Home customer"
                  quality={100}
                  placeholder="blurred"
               />
            </CenterCol>
            <CenterCol>
               <p>Customers like Deena, Lauren, and Ron shared common frustrations:</p>
               <ul>

                  <li>They knew the “look” they wanted, just not how to pull it off</li>

                  <li>It was hard to stay within a small budget</li>

                  <li>Searching for items felt exhausting</li>

               </ul>
            </CenterCol>
      
            <CenterCol>
            <h4>Empathizing with the common shopper</h4>
               <p>
                  There was a common shopper among all of these customers and that person had a clear goal — to find all of the home
                  decor items that fit their desired look and fell within a tight budget, without the accompanying decision anxiety.
               </p>
               <p>
                  I created an empathy map to visualize this shopper and get closer to their needs. <a href="https://boagworld.com/usability/adapting-empathy-maps-for-ux-design" target="_blank" rel="noreferrer noopener"> Paul Boag’s</a> model was helpful
                  here because it provided a more focused look at the user experience. By adding tasks and influences, there was more
                  real-world context for what the shopper wanted to accomplish and who or what was influencing them. The overall goal
                  would ensure that I stayed aligned with the shopper’s mission.
               </p>
            </CenterCol>       

         <Image>
            <StaticImage
               src="../images/design-sprint/ds-empathy-map.png"
               alt="Empathy map showing the persona's tasks, influences, feelings, pain points, and overall goal"
               placeholder="blurred"
            />
         </Image>
      
            <CenterCol>

               <h4>Defining a persona</h4>

               <p>
                  This was a good foundation, but these were basic characteristics that didn’t address the shopper’s entire identity.
                  I added a story to the name and based it on the common House2Home customer profile of a first-time apartment renter
                  who just finished college.
               </p>
               <p>
                  Meet Ally:
               </p>
            </CenterCol>
         

         <Image>
            <StaticImage
               src="../images/design-sprint/ds-persona-ally.png"
               alt="Ally, the customer persona"
               quality={100}
               placeholder="blurred"
            />
         </Image>
       
            <CenterCol>
               <p>
                  She was eager to decorate her new place but uncertain about how to get her dream look on a small budget remaining
                  after moving. I added House2Home’s requirement of starter kits with multiple decor items and focused the problem
                  statement:
               </p>
               <p>
                  How might we help Ally overcome her decision anxiety and find a personalized and affordable starter kit of home
                  decor items?
               </p>
               <h4>A map led Ally to her goal</h4>
               <p>
                  The next step was to explore possible solutions that would make it easy for Ally to find an affordable starter kit
                  of items she desired. I created 3 user experience maps to break down the steps Ally would take to accomplish her
                  goal.
               </p>
               <p>
                  There was a common denominator to each solution idea — an augmented reality (AR) simulation of a customer’s empty
                  room with starter kit items populated in it. This idea was bold but got to the core of Ally’s decision anxiety by
                  letting her see multiple items, matched with her tastes, inside her actual apartment. I chose the second map
                  because it felt the least burdensome for determining style, making it even easier for Ally.
               </p>
            </CenterCol>
         </Grid>
           <ImageFull>
            <StaticImage
               src="../images/design-sprint/ds-ux-map-2.jpg"
               alt="Ally's user experience map"
               placeholder="blurred"
               layout="fullWidth"
               quality={100}
            />
         </ImageFull> 
       

         <Grid>
            <CenterCol>

               <h2>Idea to image</h2>

               <h3>Exploring and sketching</h3>
               <p>
                  On Day Two of the sprint, I sketched the core of the design. I started by looking at a bunch of House2Home’s
                  competitors to see how they handled helping customers choose multiple home decor items. There were four examples that felt like they
                  would make it easiest for Ally to find the items she wanted:
               </p>
            </CenterCol>
        
            <LeftCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-pinterest.png"
                     alt="Pinterest UI"
                     placeholder="blurred"
                  />
                  <p>
                     With Pinterest, you can see an entire interior decoration and the item-by-item breakdown. Ally was used to this
                     layout and it would be a great way to present a starter kit of items all at once.
                  </p>
               </div>
            </LeftCol>

            <RightCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-living-spaces.png"
                     alt="Living Spaces UI"
                     placeholder="blurred"
                  />

                  <p>
                     Living Spaces has a step-by-step 3D room builder that gives you an immersive look at what room styles look like.
                     This provided inspiration for what an empty room with AR-populated items could look like.
                  </p>
               </div>
            </RightCol>

            <LeftCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-modsy.png"
                     alt="Modsy UI"
                     placeholder="blurred"
                  />

                  <p>
                     Modsy uses a visually engaging style quiz to help decorate your home. It’s simple because it’s so heavily
                     image-based, a great way to ensure that Ally doesn’t get overwhelmed when selecting her style.
                  </p>
               </div>
            </LeftCol>

            <RightCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-mailchimp.png"
                     alt="Mailchimp UI"
                     placeholder="blurred"
                  />

                  <p>
                     Mailchimp was the outlier but I was inspired by the clarity of the progress bar during onboarding. This was another
                     way to make the style selection process easy for the shopper.
                  </p>
                  </div>
            </RightCol>
        
           
            <LeftCol>
               <h4>Crazy 8’s</h4>
               <p>
                  Using these four examples for inspiration, I sketched 8 versions of the most critical step in Ally’s user experience:
                  browsing through the AR-populated starter kits. This was the point at which the shoppers felt they got their
                  personalized assortment of items; it had to be clear and immersive or else they wouldn’t buy the items.</p>
               <p>
                  The second sketch seemed best, giving Ally a simple carousel of starter kits that she could see in action in her
                  apartment. I then created a 3-panel board with that screen, adding a photo upload screen to show how the AR would
                  work and a checkout screen indicating that Ally was happy with the items provided to her.
               </p>
                </LeftCol>
                <RightCol>
               <StaticImage
                  src="../images/design-sprint/ds-crazy-8s.png"
                  alt="8 sketches of the most critical screen of Ally's user experience"
                  placeholder="blurred"
               />
               </RightCol>
            <CenterCol>
               <h2>Image to story</h2>
               <h3>Deciding and storyboarding</h3>
               <p>
                  On Day Three, I turned Ally’s user experience into a visual story. I created a storyboard that narrated the path she
                  would take to complete her goal. This was essentially a light-weight wireframe for the upcoming prototype.
               </p>
               <p>
                  I started by laying out the plot of Ally’s user experience to complete her goal. Then I turned the written plot into a storyboard, below. This was easier because the plot was clear before sketching.
               </p>
               </CenterCol>
            <CenterCol> 
               <StaticImage
                  src="../images/design-sprint/ds-storyboard-steps2.png"
                  alt="Post-it notes providing the written plot of Ally's user experience"
                  placeholder="blurred"
               />
            </CenterCol>
        
         <Image>
            <StaticImage
               src="../images/design-sprint/ds-storyboard.png"
               alt="A 13-panel storyboard showing Ally's user experience"
               placeholder="blurred"
            />
         </Image>
 
            <CenterCol>

               <p>
                  I added additional steps to the initial experience map since it included several actions that needed to be
                  broken down:
               </p>
               <ul>
                  <li>Ally initially deciding to go to House2Home’s site to shop for items for her new place
                  </li>
                  <li>The call to action screen showing Ally the new feature to find home decor items
                  </li>
                  <li>A “style results” screen giving Ally a short description of her taste in home decor and that recommended items
                  would be based on this
                  </li>
                  <li>Screens showing the process of selecting photos from her computer and uploading them to the site
                   </li>
               </ul>
               <h2>Bringing the story to life</h2>
               <h3>Prototyping</h3>
               <p>
                  It was Day Four, and with a storyboard of Ally completing her goal, I brought her journey of finding home decor to life
                  with a prototype. Below are some of the main screens; the full prototype is available at the end of the case study.
               </p>
            </CenterCol>
       
            <LeftCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-prototype-room.png"
                     alt="Choose a room to decorate"
                     placeholder="blurred"
                  />
                  <p>
                     I started with room selection, using a simple dropdown over a clean background image.
                  </p>
               </div>
            </LeftCol>

            <RightCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-prototype-style.png"
                     alt="Choose three images of styles you like"
                  />
                     <p>
                        Then I moved on to a set of images Ally would choose from to visually determine her style.
                  </p>
               </div>
            </RightCol>
            <LeftCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-prototype-photos.png"
                     alt="Upload photos of your empty rooms"
                     placeholder="blurred"
                  />
                 
                     <p>
                        Ally would upload images of the room she wanted to decorate from her computer to activate the AR functionality.
               
                  </p>
               </div>
            </LeftCol>

            <RightCol>
               <div>
                  <StaticImage
                     src="../images/design-sprint/ds-prototype-results-2.png"
                     alt="Empty rooms populated with decor items using AR"
                     placeholder="blurred"
                  />
                     <p>
                        Finally, the AR decoration algorithm would kick in and populate the room with suggested items based on the user’s
                        style. The user would get to choose a “look” with multiple items — essentially a starter kit — and see it in the
                        very room they uploaded.
            
                  </p>
               </div>
            </RightCol>
         
            <CenterCol>

               <h2>Getting feedback</h2>
               <h3>Testing</h3>
               <p>
                  On the last day of the sprint, I was ready to test the prototype. I conducted five usability tests, about 15 minutes
                  each. The snipet below shows feedback about the dropdown menu to select which room to decorate, at the beginning of the prototype.
               </p>
            </CenterCol>
         </Grid>
            <VideoFullBlack>
                <source src={Usability} type="video/mp4" />
            </VideoFullBlack>
         <Grid>
            <CenterCol>

               <p>
                  There were two recommendations that were critical to helping Ally get through the decorating process easily: having
                  distinct images of room styles when choosing her favorite look and having clear descriptions for each step, not just
                  a title.
               </p>

               <h2>Delivering the solution</h2>
               <h3>Outcomes and lessons</h3>
               <p>
                  I revised the prototype, making the critical issues a priority. Overall, I made the design more image-heavy so that
                  Ally and all of the House2Home customers would have a more concrete and simplified set of choices to make.
                  Descriptions were a definite point of confusion for the previous participants.
               </p>
               <p>
                  Here’s the final prototype in action:
               </p>
            </CenterCol>
         </Grid>
         
         <VideoFullBlack>
                <source src={Prototype} type="video/mp4" />
            </VideoFullBlack>

         <Grid>
            <CenterCol>

               <p>
                  People who viewed the second iteration responded positively, saying that the AR-populated images felt convincing. You can try it out for yourself <a href="https://www.figma.com/proto/mbTK2kr6ruGYEm5z0W3U2E/House2Home?page-id=185%3A8&node-id=185%3A9&viewport=564%2C368%2C0.21305200457572937&scaling=min-zoom" target="_blank" rel="noreferrer noopener">here</a>.
               </p>
               </CenterCol>
               
               <FullCol>
                    <blockquote>
                        <em>“These items look like they belong inside of the photo of my apartment living room!”</em>
                    </blockquote>
                </FullCol>
                  
                <CenterCol>
               <h4>Next steps</h4>

               <p>
                  Simulating AR is intensive visual design — something to take into account when exploring such designs in a
                  time-sensitive work environment. I would refine the AR simulation if I could, making it more prominent and appearing
                  at the beginning of the design flow. This would delight customers earlier in their user experience and likely lead to even more starter kit conversions for House2Home.
               </p>
            </CenterCol>
         </Grid>
         <Next
                name="Onstage music live-streaming"
                link={"/onstage/"}
            />
      </ProjectLayout>
   )
}

export default House2Home