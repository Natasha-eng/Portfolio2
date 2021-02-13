import React from "react";
import style from './HireBlock.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons/faBriefcase";

type HireBlockType = {
    title: string
}

function HireBlock(props: HireBlockType) {
    return (
        <div className={style.hireBlock}>
            <Title name={props.title} icon = {faBriefcase}/>
            <div className={styleContainer.container}>
                <div className={style.hire}>
                    <a href = "#" className={style.hireButton}>Hire me</a>
                </div>

            </div>
        </div>
    );
}

export default HireBlock;