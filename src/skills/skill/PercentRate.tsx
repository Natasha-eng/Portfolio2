import React from "react";
import style from './PercentRate.module.scss';

type PercentRatePropsType = {
    strokeDasharray: string
    skill: string
    rate: string
}

function PercentRate(props: PercentRatePropsType) {

    return (
        <div className={style.rateContainer}>
            <span>{props.rate}</span>
            <div className={style.rate}>
                <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                    <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                    <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke="#d2d3d4" stroke-width="1"></circle>
                    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke="#000000" stroke-width="1" stroke-dasharray={props.strokeDasharray} stroke-dashoffset="25"></circle>
                </svg>
            </div>
            <p>{props.skill}</p>
        </div>
    );
}

export default PercentRate;
