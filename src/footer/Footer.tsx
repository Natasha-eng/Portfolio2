import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faGithubSquare,
    faLinkedin,
    faTelegram
} from "@fortawesome/free-brands-svg-icons";
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons/faAngleDoubleUp";

function Footer() {
    return (
        <div className={style.footerBlock} id="contacts">
            <div className={`${styleContainer.container} ${style.footer}`}>
                <h2 className={style.title}>Shilova Natallia</h2>
                <div className={style.links}>
                    <a href="https://github.com/Natasha-eng" target="_blank"><i><FontAwesomeIcon icon={faGithubSquare} /></i></a>
                    <a href="https://linkedin.com/in/natasha-shilova" target="_blank"><i><FontAwesomeIcon icon={faLinkedin} /></i></a>
                    <a href="https://t.me/NataShilova" target="_blank"><i><FontAwesomeIcon icon={faTelegram} /></i></a>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved</span>
                <a href="#home" className={style.backToTop}><FontAwesomeIcon icon={faAngleDoubleUp}/></a>
            </div>
        </div>
    );
}

export default Footer;