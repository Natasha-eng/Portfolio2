import React from "react";
import style from './Skills.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import {faKeyboard} from "@fortawesome/free-solid-svg-icons";
import PercentRate from "./skill/PercentRate";
import {faCss3Alt} from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import {faJsSquare} from "@fortawesome/free-brands-svg-icons/faJsSquare";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <Title name={'Skills'} icon={faKeyboard}/>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.skills}>
                    <Skill title={"JS"} icon = {faJsSquare}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"CSS"} icon = {faCss3Alt}
                           description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim..."}/>
                    <Skill title={"React"} icon = {faReact}
                           description={"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ."}/>
                </div>
                <div className={style.skillsRate}>
                    <PercentRate strokeDasharray={'98 2'} rate={"99%"} skill={"html"}/>
                    <PercentRate strokeDasharray={'85 15'} rate={"85%"} skill={"css"}/>
                    <PercentRate strokeDasharray={'60 40'} rate={"60%"} skill={"javascript"}/>
                    <PercentRate strokeDasharray={'65 35'} rate={"65%"} skill={"React"}/>
                    <PercentRate strokeDasharray={'65 35'} rate={"65%"} skill={"Redux"}/>
                    <PercentRate strokeDasharray={'70 30'} rate={"70%"} skill={"Typescript"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
