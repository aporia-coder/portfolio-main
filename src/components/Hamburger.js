import React, { useState } from "react";
import styled from "styled-components";

// Components
import SideNav from "./SideNav";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerContainer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerContainer>
      <SideNav open={open} setOpen={setOpen} />
    </>
  );
};

const BurgerContainer = styled.div`
  position: fixed;
  display: none;
  top: 30px;
  right: 20px;
  width: 2rem;
  height: 2rem;
  display: none;
  cursor: pointer;
  z-index: 100;
  transition: all 0.2s ease;
  div {
    transition: all 0.2s ease-in-out;
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => (props.open ? "#A9A9A9" : "#f1f1f1")};
    border-radius: 10px;
    transform-origin: 1px;
    &:nth-child(1) {
      transform: ${(props) => props.open && "rotate(45deg)"};
    }
    &:nth-child(2) {
      opacity: ${(props) => (props.open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${(props) => props.open && "rotate(-45deg)"};
    }
  }
  @media (max-width: 970px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
`;

export default Hamburger;
