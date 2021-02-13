import React from "react";
import style from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Title from "../common/components/title/Title";
import {faSignature} from "@fortawesome/free-solid-svg-icons/faSignature";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <Title name={'Contacts'} icon = {faSignature}/>
            <div className={`${styleContainer.container} ${style.contacts}`}>
                <form className={style.form} action="#">
                    <label>Your Name (*)</label>
                    <input type="text" placeholder={'Name'}/>

                    <label>Email (*)</label>
                    <input type="text" placeholder={'E-mail'}/>

                    <label>Your message (*)</label>
                    <textarea name="" id="" cols={30} rows={10} placeholder={'Your message'}></textarea>

                    <button type="submit" className={style.contactButton}>Send message</button>

                </form>
            </div>

        </div>
    );
}

export default Contacts;
