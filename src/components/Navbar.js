import React from "react";
import { IS_CV_ENABLED } from "../settings";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

// Components
import { Container } from "../utilities/styledComponents";
import Hamburger from "./Hamburger";

// Animations
import { navContainerAnim } from "../utilities/animations";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <Nav>
      <Container flex>
        <NavLink to="/">
          <h5>Zachary Gray</h5>
        </NavLink>
        <LinkContainer
          variants={navContainerAnim}
          initial="hidden"
          animate="show"
        >
          <motion.li>
            <NavLink to="/">home</NavLink>
            <NavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "50%" : "0%" }}
            />
          </motion.li>
          <motion.li>
            <NavLink to="/projects">My projects</NavLink>
            <NavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/projects" ? "50%" : "0%" }}
            />
          </motion.li>
          {IS_CV_ENABLED && (
            <motion.li>
            <NavLink to="/resume">My CV</NavLink>
            <NavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/resume" ? "50%" : "0%" }}
              />
            </motion.li>
            )}
          <motion.li>
            <NavLink to="/contact">Contact me</NavLink>
            <NavLine
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
            />
          </motion.li>
        </LinkContainer>
        <Hamburger />
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: rgb(30, 30, 30);
  @media (max-width: 970px) {
    text-align: center;
    h5 {
      padding-top: 1rem;
    }
  }
  h5 {
    font-family: ${(props) => props.theme.textSecondary};
    font-size: 2rem;
    font-weight: 300;
  }
`;

const LinkContainer = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  li {
    position: relative;
  }
  @media (max-width: 970px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: inherit;
  font-size: 1rem;
  font-family: inherit;
  margin: 0 2rem;
  padding: 1rem;
  h5 {
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

const NavLine = styled(motion.div)`
  position: absolute;
  height: 0.1rem;
  background-color: ${(props) => props.theme.primary};
  bottom: -60%;
  left: 25%;
  width: 0%;
`;

export default Navbar;
