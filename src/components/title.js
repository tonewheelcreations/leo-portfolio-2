import React from "react"
import { title, headings } from "./styles/title.module.scss"

const Title = ({ children }) => (
    <section className={title}>
        <div className={headings}>
            {children}
        </div>
    </section>
)

export default Title
