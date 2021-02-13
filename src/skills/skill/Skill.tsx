import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from './Skill.module.scss'
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";


type SkillPropsType = {
    title: string
    description: string
    icon: IconDefinition
}


function Skill(props: SkillPropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}><FontAwesomeIcon className={style.iconStyle} icon={props.icon}/></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
