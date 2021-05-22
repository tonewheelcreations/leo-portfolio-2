import React from "react"
import { grid, leftCol, rightCol, centerCol, fullCol } from "./styles/grid.module.scss"

export const Grid = ({ children }) => (
    <div className={grid}>
        {children}
    </div>
)

export const LeftCol = ({ children }) => (
    <div className={leftCol}>
        {children}
    </div>
)

export const RightCol = ({ children }) => (
    <div className={rightCol}>
        {children}
    </div>
)

export const CenterCol = ({ children }) => (
    <div className={centerCol}>
        {children}
    </div>
)

export const FullCol = ({ children }) => (
    <div className={fullCol}>
        {children}
    </div>
)


