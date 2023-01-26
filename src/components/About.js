import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Images
import Wave from "./Wave";

// Components
import { Container, ColorSpan } from "../utilities/styledComponents";

// Animation
import {
  pageOut,
  introTitleAnimation,
  containerAnim,
  heroImgAnimation,
  fadeAnim,
} from "../utilities/animations";

const About = () => {
  return (
    <Description variants={pageOut} initial="hidden" animate="show" exit="exit">
      <Container flex>
        <InfoContainer>
          <Hidden variants={containerAnim} animate="show" initial="hidden">
            <motion.h2
              variants={introTitleAnimation}
              initial="hidden"
              animate="show"
            >
              Hi, I'm
            </motion.h2>
          </Hidden>
          <Hidden variants={containerAnim} animate="show" initial="hidden">
            <motion.h2
              variants={introTitleAnimation}
              initial="hidden"
              animate="show"
            >
              <ColorSpan>Zac</ColorSpan>hary Gray
            </motion.h2>
          </Hidden>
          <motion.p variants={fadeAnim} initial="hidden" animate="show">
            I'm a Front End Web Developer with a passion for creating
            interactive digital experiences that will blow your mind whether
            they are ran on desktop or mobile. I specialize in React, Redux,
            Javascript and CSS/SASS. I'm actively looking for freelance work, or
            a full time position, so if you like my projects,{" "}
            <ColorSpan>
              <Link to="/contact">let's work together.</Link>
            </ColorSpan>{" "}
            You'll be getting a dedicated Web Developer with passion and work
            ethic.
          </motion.p>
          <Button to="/projects">My Projects</Button>
          <Button to="/resume">My Skills</Button>
        </InfoContainer>
      </Container>
      <Wave />
    </Description>
  );
};

const Description = styled(motion.div)`
  height: 90vh;
  width: 100%;
  padding-top: 2rem;
  p {
    flex: 1;
    font-size: 1.2rem;
    line-height: 1.6;
    font-weight: 300;
  }
  h2 {
    flex: 1;
    font-size: 6rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  @media (max-width: 890px) {
    min-height: 90vh;
    height: 100%;
  }
`;

const Hidden = styled(motion.div)`
  display: block;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  height: 70vh;
  width: 100%;
  @media (max-width: 890px) {
    height: 40vh;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding-right: 4rem;
  p {
    margin-top: 1rem;
  }
  @media (max-width: 890px) {
    text-align: center;
    padding-right: 0rem;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
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

export default About;
