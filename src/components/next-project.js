import React from "react"
import { container, text, projectDescription } from "./styles/next-project.module.scss"
import { grid, centerCol } from "./styles/grid.module.scss"
import { Link } from "gatsby"

const Next = ({ name, link, medium }) => (
    <section>
        <Link to={link}>
            <div className={container}>
                <div className={grid}>
                    <div className={centerCol}>
                        <div className={text}>
                            <h2>Up Next</h2>
                            <div className={projectDescription}>
                                <h3>{name}</h3>
                                <p>{medium}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </section>
)

export default Next
