import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import mainPhoto from './../assets/image/mainPhoto.jpg';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

function Main() {
    const photo/*: { backgroundImage: string }*/ = {
        backgroundImage: `url(${mainPhoto})`
    }

    return (
        <div className={style.mainBlock} id="home">
            <div className={`${styleContainer.container} ${style.main}`}>
                <Fade top cascade>
                    <div className={style.greeting}>
                        <span className={style.hi}>Hi there</span>
                        <h1>I am Natallia Shilova</h1>
                        <ReactTypingEffect className={style.profession}
                            text={["Frontend Developer."]} typingDelay = {1500} eraseDelay = {1000}
                        />
                    </div>
                </Fade>
                <div className={style.photo} style={photo}></div>
            </div>
        </div>
    );
}

export default Main;
