export const pageOut = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: { opacity: 0, y: 200, transition: { duration: 0.75 } },
};

export const pageOutProjects = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.75 } },
};

export const navContainerAnim = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 2 },
  },
};

export const introTitleAnimation = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 2 } },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 1 } },
};

export const containerAnim = {
  hidden: { x: 100 },
  show: { x: 0, transition: { duration: 1.5 } },
};

export const imgAnimation = {
  hidden: { opacity: 0, scale: 1.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2 },
  },
  exit: { opacity: 0, scale: 1.2, transition: { duration: 2 } },
};

export const heroImgAnimation = {
  hidden: { opacity: 0, scale: 1.2 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 2 },
  },
};

export const fadeAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2.5 },
  },
};

export const fadeAnimTests = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 0.75 } },
};

export const lineAnimDelay = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 0.75, delay: 0.75 } },
};

export const footerIconAnim = {
  hidden: { rotate: 0 },
  show: { rotate: 360, color: "#23D997", transition: { duration: 0.5 } },
};

export const formAnim = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
      delay: 0.75,
    },
  },
};

export const sliderContainerAnim = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { duration: 0.75, staggerChildren: 0.1, ease: "easeOut" },
  },
};

export const sliderAnim = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { duration: 0.75, ease: "easeOut" },
  },
};
