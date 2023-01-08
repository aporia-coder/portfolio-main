import React from "react";
import { IS_CV_ENABLED } from "./settings";
import { Switch, Route, useLocation } from "react-router-dom";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// Framer Motion
import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ErrorPage from "./pages/ErrorPage";
import Contact from "./pages/Contact";
import SingleProject from "./pages/SingleProject";
import Resume from "./pages/Resume";

function App() {
  library.add(fab);
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route exact path="/projects" component={Projects} />
          <Route path="/projects/:id" component={SingleProject} />
          {IS_CV_ENABLED && (
            <Route path="/resume" component={Resume} />
          )}
          <Route path="/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
