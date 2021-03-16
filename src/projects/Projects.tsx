import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImg from './../assets/image/todoList.jpeg';
import socNetImg from './../assets/image/sicialNetwork.jpg';
import currencyExchange from './../assets/image/currencyExchange.jpg';
import counterApp from './../assets/image/counterApp.jpg'
import counterWithHooks from './../assets/image/counterWithHooks.jpg'
import {faInbox} from "@fortawesome/free-solid-svg-icons/faInbox";


function Projects() {
    const socNetImage = {
        backgroundImage: `url(${socNetImg})`
    };
    const toDoListImg = {
        backgroundImage: `url(${todoImg})`
    };
    const currencyExchangeIMG = {
        backgroundImage: `url(${currencyExchange})`
    };
    const counterImg = {
        backgroundImage: `url(${counterApp})`
    };
    const counter2Img = {
        backgroundImage: `url(${counterWithHooks})`
    };

    return (
        <div className={style.projectsBlock} id="projects">
            <Title name={'Projects'} icon={faInbox}/>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <div className={style.projects}>
                    <Project style={socNetImage} projectName={"Social Network"}
                             description={"Short description of the project"}
                             demo={'https://Natasha-eng.github.io/socNetwork'}
                             repo={'https://github.com/Natasha-eng/socNetwork'}/>
                    <Project style={toDoListImg} projectName={"Todo List"}
                             description={"Short description of the projectfhbnfdrnhtzdnfrnzrnrtznzrtsnhzrd"}
                             demo={'https://Natasha-eng.github.io/ToDoList'}
                             repo={'https://github.com/Natasha-eng/ToDoList'}/>
                    <Project style={currencyExchangeIMG} projectName={"Currency exchange"}
                             description={"Short description of the project"}
                             demo={'https://Natasha-eng.github.io/churrency-exchange'}
                             repo={'https://github.com/Natasha-eng/churrency-exchange'}/>
                    <Project style={counterImg} projectName={"Counter (Redux)"}
                             description={"Short description of the project"}
                             demo={'https://Natasha-eng.github.io/counter_with_redux'}
                             repo={'https://github.com/Natasha-eng/counter_with_redux'}/>
                    <Project style={counter2Img} projectName={"Counter (Hooks)"}
                             description={"Short description of the project"}
                             demo={'https://Natasha-eng.github.io/counter'}
                             repo={'https://github.com/Natasha-eng/counter'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
