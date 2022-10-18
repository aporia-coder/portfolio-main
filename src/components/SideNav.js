import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideNav = ({ open, setOpen }) => {
  return (
    <SideNavContainer open={open}>
      <LinksContainer>
        <NavLinks to="/" onClick={() => setOpen(!open)}>
          Home
        </NavLinks>
        <NavLinks to="/projects" onClick={() => setOpen(!open)}>
          My Projects
        </NavLinks>
        <NavLinks to="/resume" onClick={() => setOpen(!open)}>
          My CV
        </NavLinks>
        <NavLinks to="/contact" onClick={() => setOpen(!open)}>
          Contact
        </NavLinks>
      </LinksContainer>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.ul`
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  z-index: 10;
  background-color: rgb(50, 50, 50);
  position: fixed;
  top: 0;
  right: 0;
  width: 20rem;
  height: 100vh;
  transition: all 0.2s ease-in-out;
`;

const NavLinks = styled(Link)`
  font-size: 3rem;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 70%;
  transform: translateY(25%);
`;

export default SideNav;
