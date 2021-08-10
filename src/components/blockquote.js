import React from "react"
import quote from "../svg/quote.svg"
import { quoteContainer, svg } from "./styles/blockquote.module.scss"

const Blockquote = ({ children }) => {
    return (
        <div className={quoteContainer}>
            <img className={svg} src={quote} alt="quotation marks" />
            {children}
        </div>
    )
}

export default Blockquote