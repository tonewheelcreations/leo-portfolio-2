import React from "react"
import { flexInfo } from "./styles/flex.module.scss"

export const FlexInfo = ({ children }) => (
    <div className={flexInfo} data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease-out">
        {children}
    </div>
)