import React from "react"
import { figure } from "./styles/figure.module.scss"

const Figure = ({ children }) => (
    <figure className={figure}>
        {children}
    </figure>
)

export default Figure