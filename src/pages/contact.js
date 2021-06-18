import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { container, image, form } from "../components/styles/contact.module.scss"
import "../components/styles/global.scss"
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from "react-google-recaptcha-v3"

const Contact = () => {
    const [token, setToken] = useState()

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
        const data = new FormData(form)
        data.append("g-recaptcha-response", token)

        console.log(data, "data")

        axios({
            method: "post",
            url: "https://getform.io/f/710c753b-0e22-4533-8d54-b9374b8077a9",
            data
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

            <SEO title="Contact" />
            <div className={container}>

                <div className={image} data-sal="slide-left"
                    data-sal-duration="300"
                    data-sal-easing="ease-out-sine">
                    <StaticImage
                        src="../images/contact.png"
                        alt="Me again, Leo"
                        placeholder="blurred"
                        quality={80}
                    />
                </div>
                <section className={form} data-sal="slide-right"
                    data-sal-duration="300"
                    data-sal-easing="ease-out-sine">

                    <h1>Let's make contact</h1>
                    <GoogleReCaptchaProvider reCaptchaKey="6LdX2IQaAAAAAJ22R0U8gRXzKlDHBBiH0lmPbF6O">
                        <form onSubmit={handleOnSubmit}>
                            <label className={form}>
                                Name
                                <input type="text" name="name" required />
                            </label>
                            <label className={form}>
                                Email
                                <input type="email" name="email" required />
                            </label>
                            <label className={form}>
                                Subject
                                <input type="text" name="subject" required />
                            </label>
                            <label className={form}>
                                Message
                                <textarea name="message" rows="5" required />
                            </label>
                            <div className={form}>
                                <button type="submit" disabled={serverState.submitting}>Send
                                </button>
                                {serverState.status && (
                                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                        {serverState.status.msg}
                                    </p>
                                )}
                            </div>
                            <GoogleReCaptcha
                                onVerify={token => {
                                    setToken(token)
                                }}
                            />
                        </form>
                    </GoogleReCaptchaProvider>
                </section>
            </div>
        </Layout>
    )
}

export default Contact