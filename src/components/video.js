import React from "react"
import { video } from "./styles/video.module.scss"

export const Video = ({ children }) => (
    <div className={video}>
        <video
            autoPlay muted loop controls controlsList="nodownload"
        >
            {children}
        </video>
    </div>
)

