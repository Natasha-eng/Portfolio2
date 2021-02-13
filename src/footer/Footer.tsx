import React from "react";
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faGithubSquare, faInstagramSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons/faAngleDoubleUp";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footer}`}>
                <h2 className={style.title}>Shilova Natallia</h2>
                <div className={style.links}>
                    <a href="#"><i><FontAwesomeIcon icon={faFacebookSquare}/></i></a>
                    <a href="#"><i><FontAwesomeIcon icon={faGithubSquare}/></i></a>
                    <a href="#"><i><FontAwesomeIcon icon={faLinkedin}/></i></a>
                    <a href="#"><i><FontAwesomeIcon icon={faInstagramSquare}/></i></a>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved</span>
                <a href="#home" className={style.backToTop}><FontAwesomeIcon icon={faAngleDoubleUp}/></a>
            </div>
        </div>
    );
}

export default Footer;