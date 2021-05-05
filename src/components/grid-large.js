import React from "react"
import { gridLarge, one, two, three } from "./styles/grid-large.module.scss"

export const GridLarge = ({ children }) => (
    <div className={gridLarge}>
        {children}
    </div>
)

// export const Left = ({ children }) => (
//     <div className={left}>
//         {children}
//     </div>
// )

// export const Right = ({ children }) => (
//     <div className={right}>
//         {children}
//     </div>
// )

export const One = ({ children }) => (
    <div className={one}>
        {children}
    </div>
)

export const Two = ({ children }) => (
    <div className={two}>
        {children}
    </div>
)

export const Three = ({ children }) => (
    <div className={three}>
        {children}
    </div>
)

