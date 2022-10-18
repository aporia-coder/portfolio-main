import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = (threshold) => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold });
  if (view) controls.start("show");
  return [controls, element];
};
