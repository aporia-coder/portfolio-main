import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1220px) {
      font-size: 80%;
    }
    overflow-x: hidden;
  }

  *::-webkit-scrollbar {
    width: 5px;
    color: rgb(30, 30, 30);
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: rgb(20, 20, 20);
    color: #f1f1f1;
  }

  ul {
    list-style: none;
  }

  p {
    letter-spacing: 1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    &:focus {
      outline: none;
    }
  }

  /* button {
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23D997;
    color: #f1f1f1;
    background: transparent;
    transition: all 0.4s ease-in-out;
    margin: 1.5rem;
    &:hover {
      background-color: #23D997;
      color: #f1f1f1;
    }
  } */
`;

const theme = {
  primary: "#23D997",
  secondary: "#D96ED4",
  navHeight: "10vh",
  textSecondary: `"Mr Dafoe", cursive`,
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
