import React from "react";
import { useScroll } from "../utilities/useScroll";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import { Container, Line } from "../utilities/styledComponents";

// Pictures
import ali from "../assets/images/testimonials/ali.jpg";
import aldo from "../assets/images/testimonials/aldo.jpg";

// Animations
import { fadeAnim, fadeAnimTests, lineAnim } from "../utilities/animations";

const Testimonials = () => {
  const [controls, element] = useScroll(0.2);
  return (
    <Container>
      <Title>
        Testimonials
        <Line
          variants={lineAnim}
          ref={element}
          animate={controls}
          initial="hidden"
        />
      </Title>
      <Testimonial
        variants={fadeAnimTests}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <ImgContainer>
          <img src={ali} alt="Alexander Blick" />
        </ImgContainer>
        <Container flex column>
          <p>
            "I commissioned Zac to create an E-Commerce store for my business,
            he delivered amazing results in a very short timeframe. Working with
            Zac was a delight as he had excellent communication skills and
            collaborated with the design team to produce a great website. I
            would recommend Zac to anyone looking for a Web Developer"
          </p>
          <p>- Alex Blick: CEO of CBD Florals</p>
        </Container>
      </Testimonial>
      <Testimonial
        variants={fadeAnimTests}
        ref={element}
        animate={controls}
        exit="exit"
        initial="hidden"
      >
        <ImgContainer>
          <img src={aldo} alt="Aldo Gallone" />
        </ImgContainer>
        <Container flex column>
          <motion.p variants={fadeAnim} initial="hidden" animate="show">
            "Zac has worked for us seasonally for a number of years now and has
            been working full time since June 2018. We have found him to be a
            very reliable, trustworthy and conscientious member of staff. He is
            a great asset to our company"
          </motion.p>
          <p>- Aldo Gallone: CEO of Gallones Ltd</p>
        </Container>
      </Testimonial>
    </Container>
  );
};

const Title = styled.h1`
  position: relative;
  display: inline;
  font-weight: 300;
  font-size: 2.5rem;
  @media (max-width: 890px) {
    margin-top: 2rem;
    display: inline-block;
  }
`;

const Testimonial = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 4rem 0rem;
  h1 {
    display: inline;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    color: rgb(200, 200, 200);
    font-style: italic;
    padding: 2rem;
    @media (max-width: 890px) {
      text-align: center;
    }
  }
`;

const ImgContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  @media (max-width: 890px) {
    height: 70px;
    width: 70px;
  }
`;

export default Testimonials;
