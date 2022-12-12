import React from "react";
import { About, Description } from "../style.js";
import { titleAnim, fade, ContactAnimation } from "../animation";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { ReactComponent as ContactMeIcon } from "../img/contact-me.svg";
import { ReactComponent as LinkedInIcon } from "../img/linked-in.svg";
import { ReactComponent as ResumeIcon } from "../img/resume-icon.svg";
import { ReactComponent as GmailIcon } from "../img/gmail-icon.svg";
import { ReactComponent as GithubIcon } from "../img/github-icon.svg";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          <span>Contact</span> Me
        </h2>
        <Cards>
          <a href="https://www.linkedin.com/in/vi-truong-b6b81a228/">
            {" "}
            <LinkedInIcon />
          </a>
          <Card>
            <a href="https://drive.google.com/file/d/1Uc6Gb0WFIETFccLn3HP4S5yiMWmgOQbO/view?usp=sharing">
              {" "}
              <ResumeIcon />
            </a>
          </Card>
          <Card>
            <GmailIcon />
          </Card>
          <Card>
            <a href="https://github.com/vitruong00">
              {" "}
              <GithubIcon />
            </a>
          </Card>
        </Cards>
      </Description>
      <ContactAnimation>
        <ContactMeIcon />
      </ContactAnimation>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  margin-left: 40px;
`;

export default ServicesSection;
