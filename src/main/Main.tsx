import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import mainPhoto from './../assets/image/mainPhoto.jpg';

function Main() {
    const photo: { backgroundImage: string } = {
        backgroundImage: `url(${mainPhoto})`
    }

    return (
        <div className={style.mainBlock} id="home">
            <div className={`${styleContainer.container} ${style.main}`}>
                <div className={style.greeting}>
                    <span className={style.hi}>Hi there</span>
                    <h1>I am Natallia Shilova</h1>
                    <div className={style.profession}>Frontend Developer.</div>
                </div>
                <div className={style.photo} style={photo}></div>
            </div>
        </div>
    );
}

export default Main;
