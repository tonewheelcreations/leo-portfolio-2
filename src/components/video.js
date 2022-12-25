import React from "react"
import { containerBlack, containerWhite, video, videoFull } from "./styles/video.module.scss"

export const Video = ({ children }) => (
    <div data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        <video className={video}
             muted loop controls controlsList="nodownload"
        >
            {children}
        </video>
    </div>
)

export const VideoFullBlack = ({ children }) => (
    <div className={containerBlack} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        <video className={videoFull}
             muted loop controls controlsList="nodownload"
        >
            {children}
        </video>
    </div>
)

export const VideoFullWhite = ({ children }) => (
    <div className={containerWhite} data-sal="slide-up"
        data-sal-duration="300"
        data-sal-easing="ease-out-sine">
        <video className={videoFull}
             muted loop controls controlsList="nodownload"
        >
            {children}
        </video>
    </div>
)

