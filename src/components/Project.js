import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import { Container, Hidden } from "../utilities/styledComponents";

// Animations
import { imgAnimation } from "../utilities/animations";

const Project = ({ name, description, img, link }) => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push(link);
    // if (window.scrollY) window.scroll(0, 0);
  };
  return (
    <Container>
      <ProjectContainer>
        <h1>{name}</h1>
        <ImgContainer>
          <Hidden>
            <Image
              src={img}
              alt={name}
              onClick={handleRedirect}
              variants={imgAnimation}
              initial="hidden"
              animate="show"
            />
          </Hidden>
        </ImgContainer>
      </ProjectContainer>
    </Container>
  );
};

const ImgContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled(motion.img)`
  cursor: pointer;
  width: 100%;
  object-fit: cover;
  display: block;
  border: 3px solid rgb(70, 70, 70);
`;

const ProjectContainer = styled.div`
  padding: 2rem;
  position: relative;
  text-align: center;
  h1 {
    font-weight: 300;
    font-size: 3rem;
    padding: 1rem;
  }
`;

export default Project;
