import React from "react"
import { image, imageFull } from "./styles/image.module.scss"

export const Image = ({ children }) => (
    <div className={image}>
        {children}
    </div>
)

export const ImageFull = ({ children }) => (
    <div className={imageFull}>
        {children}
    </div>
)