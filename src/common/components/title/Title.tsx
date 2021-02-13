import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from './Title.module.scss'
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type TitlePropsType = {
    name: string
    icon: IconProp
}

function Title(props: TitlePropsType) {
    return (
        <div className={style.shapeBottom}>
            <div className={`${style.secondaryBg} ${style.blockTitle}`}>
                <div className={style.title}>
                    <h2>{props.name}</h2>
                    <div className={style.titleIcon}>
                        <FontAwesomeIcon icon={props.icon}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Title;
