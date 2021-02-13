import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImg from './../assets/image/todoList.jpeg';
import socNetImg from './../assets/image/sicialNetwork.jpg';
import {faInbox} from "@fortawesome/free-solid-svg-icons/faInbox";


function Projects() {
    const socNetImage = {
        backgroundImage: `url(${socNetImg})`
    };

    const toDoListImg = {
        backgroundImage: `url(${todoImg})`
    };

    return (
        <div className={style.projectsBlock}>
            <Title name={'Projects'} icon = {faInbox}/>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <div className={style.projects}>
                        <Project style = {socNetImage} projectName={"Social Network"} description={"Short description of the project"}/>
                        <Project style = {toDoListImg} projectName={"Todo List"} description={"Short description of the projectfhbnfdrnhtzdnfrnzrnrtznzrtsnhzrd"}/>
                        {/* <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>
                    <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>
                    <Project projectName = {"Name of the project"} description = {"Short description of the project"}/>*/}
                    </div>
            </div>
        </div>
    );
}

export default Projects;
