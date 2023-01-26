import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Animations
import { pageOut } from "../utilities/animations";

// Components
import About from "../components/About";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div variants={pageOut} initial="hidden" animate="show" exit="exit">
      <About />
    </motion.div>
  );
};

export default Home;
