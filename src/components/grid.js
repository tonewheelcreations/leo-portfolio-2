import React from "react"
import { grid, leftCol, rightCol, centerCol, fullCol } from "./styles/grid.module.scss"

export const Grid = ({ children }) => (
    <div className={grid}>
        {children}
    </div>
)

export const LeftCol = ({ children }) => (
    <div className={leftCol} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        {children}
    </div>
)

export const RightCol = ({ children }) => (
    <div className={rightCol} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        {children}
    </div>
)

export const CenterCol = ({ children }) => (
    <div className={centerCol} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        {children}
    </div>
)

export const FullCol = ({ children }) => (
    <div className={fullCol} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        {children}
    </div>
)


