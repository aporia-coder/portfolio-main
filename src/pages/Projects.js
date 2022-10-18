import React, { useState, useEffect } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { motion } from "framer-motion";
import { useScroll } from "../utilities/useScroll";

// Components
import Project from "../components/Project";
import { Container, Line, Title, Hidden } from "../utilities/styledComponents";

// Animations
import {
  pageOut,
  lineAnimDelay,
  titleAnimation,
  sliderAnim,
  sliderContainerAnim,
  pageOutProjects,
} from "../utilities/animations";

// Projects state
import projectsState from "../utilities/projectsState";

const Projects = () => {
  const [projects] = useState(projectsState());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectsContainer
      variants={pageOut}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container>
        <Hidden>
          <Title variants={titleAnimation} initial="hidden" animate="show">
            My Projects
            <Line variants={lineAnimDelay} initial="hidden" animate="show" />
          </Title>
        </Hidden>
        {projects.map((project) => (
          <>
            <Project
              name={project.name}
              descripton={project.description}
              img={project.img}
              key={uuid()}
              link={project.link}
            />
          </>
        ))}
      </Container>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled(motion.div)`
  min-height: 90vh;
  width: 100%;
`;

const Slider1 = styled(motion.div)`
  position: fixed;
  top: 10;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
  z-index: 2;
`;

const Slider2 = styled(Slider1)`
  background-color: ${(props) => props.theme.secondary};
`;

const Slider3 = styled(Slider1)`
  background-color: ${(props) => props.theme.primary};
`;

const Slider4 = styled(Slider1)`
  background-color: ${(props) => props.theme.secondary};
`;

export default Projects;
