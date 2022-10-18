import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import {
  Container,
  Line,
  Title,
  ColorSpan,
  Hidden,
} from "../utilities/styledComponents";

// Animations
import {
  pageOut,
  lineAnimDelay,
  titleAnimation,
  formAnim,
} from "../utilities/animations";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContactContainer
      variants={pageOut}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container>
        <ContactInfo>
          <Hidden>
            <Title variants={titleAnimation} initial="hidden" animate="show">
              Contact Me
              <Line variants={lineAnimDelay} initial="hidden" animate="show" />
            </Title>
          </Hidden>
          <p>
            If you're interested in hiring me for either Full Time Work or
            Freelance Projects, don't hesitate to use the form below to get in
            touch! Alternatively you can always contact me through my{" "}
            <a
              href="https://github.com/aporia-coder"
              target="_blank"
              rel="noreferrer"
            >
              <ColorSpan> Github</ColorSpan>
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/zachary-gray-04b9b0203"
              target="_blank"
              rel="noreferrer"
            >
              <ColorSpan>LinkedIn</ColorSpan>
            </a>{" "}
            pages.
          </p>
          <ContactForm
            data-netlify="true"
            variants={formAnim}
            initial="hidden"
            animate="show"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <NameInput required />
            <EmailInput required />
            <TextInput required />
            <SubmitButton>Submit</SubmitButton>
          </ContactForm>
        </ContactInfo>
      </Container>
    </ContactContainer>
  );
};

const ContactContainer = styled(motion.div)`
  min-height: 90vh;
  width: 100%;
`;

const ContactInfo = styled.div`
  width: 100%;
  p {
    margin: 2rem 0rem;
    font-size: 1.5rem;
  }
`;

const ContactForm = styled(motion.form).attrs({
  name: "contact-form",
  method: "POST",
})`
  width: 29rem;
`;

const NameInput = styled.input.attrs({
  type: "text",
  name: "name",
  placeholder: "Name",
})`
  color: #646464;
  border: 0;
  background-color: rgb(40, 40, 40);
  padding: 1rem;
  margin: 1rem 0rem;
  border-radius: 5px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const EmailInput = styled.input.attrs({
  type: "email",
  name: "email",
  placeholder: "Enter email",
})`
  color: #646464;
  border: 0;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  background-color: rgb(40, 40, 40);
  &:focus {
    outline: none;
  }
`;

const TextInput = styled.textarea.attrs({
  name: "message",
  placeholder: "Your Message",
})`
  width: 100%;
  height: 10rem;
  color: #646464;
  margin: 1rem 0rem 0rem 0rem;
  border: 0;
  border-radius: 5px;
  padding: 1rem;
  background-color: rgb(40, 40, 40);
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.button.attrs({
  type: "submit",
})`
  font-family: inherit;
  display: inline-block;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 3px solid #23d997;
  color: #f1f1f1;
  background: transparent;
  transition: all 0.4s ease-in-out;
  margin: 2rem;
  margin-left: auto;
  text-decoration: none;
  &:hover {
    background-color: #23d997;
    color: black;
  }
`;

export default Contact;
