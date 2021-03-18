import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { container, image, form } from "../components/styles/contact.module.scss"
import "../components/styles/global.scss"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const Contact = () => {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    })
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        })
        if (ok) {
            form.reset()
        }
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        const form = e.target
        setServerState({ submitting: true })
        axios({
            method: "post",
            url: "https://getform.io/f/710c753b-0e22-4533-8d54-b9374b8077a9",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form)
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form)
            })
    }

    return (
        <Layout>
            <GoogleReCaptchaProvider reCaptchaKey="6LdX2IQaAAAAAJ22R0U8gRXzKlDHBBiH0lmPbF6O">
                <SEO title="Contact" />
                <div className={container}>

                    <div className={image}>
                        <StaticImage
                            src="../images/contact.png"
                            alt="Me again, Leo"
                            placeholder="blurred"
                            quality={80}
                        />
                    </div>
                    <section className={form}>

                        <h1>Let's make contact</h1>

                        <form onSubmit={handleOnSubmit} id="contact" form action="https://getform.io/f/710c753b-0e22-4533-8d54-b9374b8077a9" method="POST">
                            <label className={form}>
                                Name
                            <input type="text" name="name" id="name" />
                            </label>
                            <label className={form}>
                                Email
                            <input type="email" name="_replyto" id="email" />
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
            </GoogleReCaptchaProvider>
        </Layout>
    )
}

export default Contact