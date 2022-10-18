import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Projects state
import projectsState from "../utilities/projectsState";

// Components
import { Container, Title, Line, Hidden } from "../utilities/styledComponents";

// Animations
import {
  pageOut,
  lineAnim,
  sliderContainerAnim,
  sliderAnim,
} from "../utilities/animations";

const SingleProject = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(projectsState());
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentProject = projects.filter((project) => project.link === url);
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project ? (
        <CurrentProject
          variants={pageOut}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Container flex column>
            <ProjectTitle>
              {project.name}
              <Line variants={lineAnim} initial="hidden" animate="show" />
            </ProjectTitle>
            <Hidden>
              <ProjectGif src={project.gif && project.gif} alt={project.name} />
            </Hidden>
            <div>
              <p>{project.description}</p>
              <ul>
                {project.stack.map((tech) => (
                  <li>{tech}</li>
                ))}
              </ul>
              <div>
                <a href={project.url} target="_blank">
                  <Button>Live Site</Button>
                </a>
                <a href={project.source} target="_blank">
                  <Button>Source Code</Button>
                </a>
              </div>
            </div>
          </Container>
        </CurrentProject>
      ) : (
        <CurrentProject />
      )}
    </>
  );
};

const CurrentProject = styled(motion.div)`
  width: 100%;
  min-height: 90vh;
  li {
    list-style: disc;
    margin: 1rem;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const ProjectTitle = styled.h1`
  display: inline-block;
  font-size: 3rem;
  margin: 1rem;
  position: relative;
`;

const ProjectGif = styled.img`
  display: block;
  width: 100%;
  height: auto;
  padding: 2rem;
  object-fit: cover;
`;

const Button = styled.button`
  font-family: inherit;
  display: inline;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 3px solid #23d997;
  color: #f1f1f1;
  background: transparent;
  transition: all 0.4s ease-in-out;
  margin: 2rem;
  text-decoration: none;
  &:hover {
    background-color: #23d997;
    color: black;
  }
`;

const SliderContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const Slider = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 25%;
  background-color: ${(props) =>
    props.primary ? props.theme.primary : props.theme.secondary};
`;

const Slider2 = styled(Slider)`
  left: 25%;
`;

const Slider3 = styled(Slider)`
  left: 50%;
`;

const Slider4 = styled(Slider)`
  left: 75%;
`;

export default SingleProject;
