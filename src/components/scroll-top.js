import React, { useEffect, useState } from "react";
import { scrollToTopBtn, svg } from "./styles/scroll-top.module.scss"
import up from "../svg/arrow-up.svg"

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 1000 pixels
        const toggleVisibility = () => {

            if (window.pageYOffset > 1000) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <>
            {isVisible && (
                <button className={scrollToTopBtn} onClick={scrollToTop}>
                    <img className={svg} src={up} alt="to top of page" />
                </button>
            )}
        </>
    );
}

export default ScrollToTop