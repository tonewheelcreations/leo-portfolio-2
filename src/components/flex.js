import React from "react"
import { flex, flexReverse, flexInfo } from "./styles/flex.module.scss"

export const Flex = ({ children }) => (
    <div className={flex}>
        {children}
    </div>
)

export const FlexReverse = ({ children }) => (
    <div className={flexReverse}>
        {children}
    </div>
)

export const FlexInfo = ({ children }) => (
    <div className={flexInfo}>
        {children}
    </div>
)