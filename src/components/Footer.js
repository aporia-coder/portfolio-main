import React from "react";
import styled from "styled-components";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import { Container } from "../utilities/styledComponents";

// Animation
import { motion } from "framer-motion";
import { footerIconAnim } from "../utilities/animations";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <IconContainer>
          <IconBackground
            variants={footerIconAnim}
            initial="hidden"
            whileHover="show"
          >
            <a
              href="https://github.com/aporia-coder"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="2x"
                cursor="pointer"
              />
            </a>
          </IconBackground>
          <p>Copyright &copy; {new Date().getFullYear()} Zachary Gray</p>
          <IconBackground
            variants={footerIconAnim}
            initial="hidden"
            whileHover="show"
          >
            <a
              href="https://www.linkedin.com/in/zachary-gray-04b9b0203"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="2x"
                cursor="pointer"
              />
            </a>
          </IconBackground>
        </IconContainer>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  height: 25vh;
  margin-top: 2rem;
  width: 100%;
  background-color: rgb(30, 30, 30);
`;

const IconBackground = styled(motion.div)`
  position: relative;
  padding: 1rem;
  background-color: rgb(40, 40, 40);
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 50%;
  transform: translateX(50%);
  i {
    margin: 0rem 2rem;
  }
  @media (max-width: 970px) {
    justify-content: space-between;
    width: 100%;
    transform: translateX(0%);
  }
`;

export default Footer;
