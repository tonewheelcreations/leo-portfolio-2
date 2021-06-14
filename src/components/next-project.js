import React from "react"
import { container, text } from "./styles/next-project.module.scss"
import { grid, centerCol } from "./styles/grid.module.scss"
import { Link } from "gatsby"

const Next = ({ name, link }) => (
    <section>
        <Link to={link}>
            <div className={container}>
                <div className={grid}>
                    <div className={centerCol}>
                        <div className={text}>
                            <h2>Up Next</h2>
                            <h3>{name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </section>
)

export default Next
