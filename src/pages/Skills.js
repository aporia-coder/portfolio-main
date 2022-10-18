import React from "react";
import styled from "styled-components";
import P5Wrapper from "react-p5-wrapper";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiRedux } from "react-icons/si";
import react from "../assets/images/icons/react.svg";
import Javascript from "../assets/images/icons/javascript.svg";
import ReactIcon from "../assets/images/icons/react.svg";

// Animation
import { motion } from "framer-motion";
import { pageOut, lineAnim } from "../utilities/animations";

// Components
import { Container, Line, Title } from "../utilities/styledComponents";
import SkillsBox from "../components/SkillsBox";

const Projects = () => {
  return (
    <SkillsContainer
      variants={pageOut}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container>
        <Title>
          my skills
          <Line variants={lineAnim} initial="hidden" animate="show" />
        </Title>
        <MySkills>
          <div>
            <p>
              I have 2+ years of self taught programming experience and
              application building, which has given me the ability to solve bugs
              and find solutions to complex problems on my own. I have
              experience with both Functional Programming and Object Oriented
              Programming and am a quick learner, capable of picking up new
              technologies and frameworks very quickly, although my main
              technical skills are:
            </p>
            <ul>
              <li>
                <p>React</p>
                <FontAwesomeIcon
                  icon={["fab", "react"]}
                  size="8x"
                  color="#23D997"
                />
              </li>
              <li>
                <p>Javascript</p>
                <FontAwesomeIcon
                  icon={["fab", "js-square"]}
                  size="8x"
                  color="#23D997"
                />
              </li>
              {/* <li>C#</li> */}
              {/* <li>
                <p>Redux</p>
                <SiRedux color="#23D997" />
              </li> */}
              <li>
                <p>SASS / CSS</p>
                <FontAwesomeIcon
                  icon={["fab", "sass"]}
                  size="8x"
                  color="#23D997"
                />
              </li>
              {/* <li>HTML5</li>
              <li>Git/Github</li>
              <li>npm</li> */}
            </ul>
          </div>
          <P5Wrapper sketch={SkillsBox} img={Javascript} />
        </MySkills>
      </Container>
    </SkillsContainer>
  );
};

const SkillsContainer = styled(motion.div)`
  height: 90vh;
  h2 {
    display: inline;
    position: relative;
    font-size: 5rem;
    font-weight: 300;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`;

const MySkills = styled.div`
  /* width: 50%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: row wrap;
  ul {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 0rem;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 2rem;
    }
  }
`;

export default Projects;
