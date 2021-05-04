import React from "react"
import { containerBlack, containerWhite, video } from "./styles/video.module.scss"

export const Video = ({ children }) => (
    <div>
        <video className={video}
            autoPlay muted loop controls controlsList="nodownload"
        >
            {children}
        </video>
    </div>
)

export const VideoFullBlack = ({ children }) => (
    <div className={containerBlack}>
        <video className={video}
            autoPlay muted loop controls controlsList="nodownload"
        >
            {children}
        </video>
    </div>
)

export const VideoFullWhite = ({ children }) => (
    <div className={containerWhite}>
        <video className={video}
            autoPlay muted loop controls controlsList="nodownload"
        >
            {children}
        </video>
    </div>
)

