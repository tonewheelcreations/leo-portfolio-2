import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { container, image, form } from "../components/styles/contact.module.scss"
import "../components/styles/global.scss"

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <div className={container}>
                <div className={image}>
                    <StaticImage
                        src="../images/contact.png"
                        alt="Me again, Leo"
                        placeholder="blurred"
                    />
                </div>
                <section className={form}>
                    <h1>Let's make contact</h1>
                    <form method="POST" action="https://formspree.io/f/mnqoelew">
                        <label className={form}>
                            Name
                            <input type="text" name="name" id="name" />
                        </label>
                        <label className={form}>
                            Email
                            <input type="email" name="email" id="email" />
                        </label>
                        <label className={form}>
                            Subject
                            <input type="text" name="subject" id="subject" />
                        </label>
                        <label className={form}>
                            Message
                            <textarea name="message" id="message" rows="5" />
                        </label>
                        <div className={form}>
                            <button type="submit">Send</button>
                        </div>

                    </form>
                </section>

            </div>

        </Layout>
    )
}

export default Contact