import React from "react"
import { iframe, containerIframe } from "./styles/iframe.module.scss"

const IFrame = ({ srcURL, title, ...props }) => (
    <div className={containerIframe}>
        <iframe className={iframe}
            src={srcURL}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
)
export default IFrame