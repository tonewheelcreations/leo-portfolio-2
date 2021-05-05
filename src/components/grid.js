import React from "react"
import { grid, largeCol, smallCol, centerCol, fullCol } from "./styles/grid.module.scss"

export const Grid = ({ children }) => (
    <div className={grid}>
        {children}
    </div>
)

export const LargeCol = ({ children }) => (
    <div className={largeCol}>
        {children}
    </div>
)

export const SmallCol = ({ children }) => (
    <div className={smallCol}>
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


