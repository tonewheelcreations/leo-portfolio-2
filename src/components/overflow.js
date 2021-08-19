import React from "react"
import { container } from "./styles/overflow.module.scss"

const Overflow = ({ children }) => (
    <div className={container}>
        {children}
    </div>
)

export default Overflow
