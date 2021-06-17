import React from "react"
import { image, imageFull } from "./styles/image.module.scss"

export const Image = ({ children }) => (
    <div className={image} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        {children}
    </div>
)

export const ImageFull = ({ children }) => (
    <div className={imageFull} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        {children}
    </div>
)