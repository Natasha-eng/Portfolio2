import React from "react";
import style from './Project.module.scss'

type ProjectPropsType = {
    style: {
        backgroundImage: string
    }
    projectName: string
    description: string
    demo: string
    repo: string
}

function Project(props: ProjectPropsType) {
    return (
        <div className={style.project}>
                <div className={style.imageContainer} style={props.style}>
                    <a href={props.demo} className={style.button} target="_blank">DEMO</a>
                    <a href={props.repo} className={style.button} target="_blank">REPO</a>
                </div>
                <div className={style.projectContent}>
                    <h3 className={style.projectTitle}>{props.projectName}</h3>
                    <p className={style.projectDescription}>{props.description}</p>
                </div>
        </div>
    )
}

export default Project;