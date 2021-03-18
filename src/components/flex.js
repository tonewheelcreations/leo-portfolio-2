import React from "react"
import { flexInfo } from "./styles/flex.module.scss"

export const FlexInfo = ({ children }) => (
    <div className={flexInfo}>
        {children}
    </div>
)