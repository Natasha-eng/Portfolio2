import React from "react";
import './App.scss';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import HireBlock from "./hireBlock/HireBlock";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <HireBlock title={"Considering remote work options"}/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
