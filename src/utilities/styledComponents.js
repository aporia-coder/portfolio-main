import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: ${(props) => props.flex && "flex"};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: ${(props) =>
    props.flex && props.center ? "center" : "space-between"};
  align-items: ${(props) => props.flex && "center"};
  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Line = styled(motion.div)`
  position: absolute;
  bottom: -0.5rem;
  height: 5px;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary};
`;

export const Title = styled(motion.h2)`
  display: inline-block;
  position: relative;
  font-size: 5rem;
  font-weight: 300;
  margin: 2.5rem 0rem;
  text-transform: capitalize;
  color: #f1f1f1;
`;

export const ColorSpan = styled.span`
  color: ${(props) => props.theme.primary};
`;

export const Hidden = styled.div`
  overflow: hidden;
`;
