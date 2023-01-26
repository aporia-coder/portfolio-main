import React, { useEffect } from "react";
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { pageOut, lineAnim } from "../utilities/animations";

// Components
import { Container, Line, Title, Hidden } from "../utilities/styledComponents";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ResumeContainer
      variants={pageOut}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container>
        <Title>
          My CV
          <Line variants={lineAnim} initial="hidden" animate="show" />
        </Title>
        <p>Click the picture to open a PDF in a new tab!</p>
        <ImageContainer>
          <Hidden>
          </Hidden>
        </ImageContainer>
      </Container>
    </ResumeContainer>
  );
};

const ResumeContainer = styled(motion.div)`
  min-height: 90vh;
  width: 100%;
  h2 {
    margin: auto;
  }
  p {
    display: block;
    color: #828282;
    padding: 2rem;
    font-size: 1rem;
    font-style: italic;
  }
`;

const ImageContainer = styled.div`
  min-height: 10rem;
  width: 25rem;
  margin: 0 auto;
  img {
    display: block;
    cursor: pointer;
    margin: 2rem auto;
    object-fit: cover;
    width: 100%;
  }
`;

export default Resume;
