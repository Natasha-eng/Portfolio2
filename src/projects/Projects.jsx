import React from "react";
import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import cars from "./../assets/image/cars.jfif";
import games from "./../assets/image/games.webp";
import arts from "./../assets/image/arts.jpg";
import notes from "./../assets/image/notes.jpg";
import { faInbox } from "@fortawesome/free-solid-svg-icons/faInbox";
import Slide from "react-reveal/Fade";

function Projects() {
  const socNetImage = {
    backgroundImage: `url(${games})`,
  };
  const toDoListImg = {
    backgroundImage: `url(${cars})`,
  };
  const counterImg = {
    backgroundImage: `url(${notes})`,
  };
  const counter2Img = {
    backgroundImage: `url(${arts})`,
  };

  return (
    <div className={style.projectsBlock} id="projects">
      <Title name={"Projects"} icon={faInbox} />
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <Slide left>
          <div className={style.projects}>
            <Project
              style={socNetImage}
              projectName={"Games Store"}
              description={"Credentials: login Natallia / password 1$qwerty1"}
              demo={"https://gorgeous-bunny-ffde93.netlify.app"}
              repo={"https://github.com/Natasha-eng/react-lab"}
            />
            <Project
              style={toDoListImg}
              projectName={"Car Leasing Calculator"}
              description={""}
              demo={"https://thriving-biscuit-aad378.netlify.app"}
              repo={"https://github.com/Natasha-eng/oxem"}
            />
            <Project
              style={counterImg}
              projectName={"Notes Project"}
              description={"Credentials: username John / password !Hh12345"}
              demo={"https://technotes-j3tx.onrender.com"}
              repo={"https://github.com/Natasha-eng/technotes"}
            />
            <Project
              style={counter2Img}
              projectName={"Art Works Project"}
              description={""}
              demo={"https://deluxe-panda-ba4e31.netlify.app"}
              repo={"https://github.com/Natasha-eng/imagine-project"}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Projects;
