import React from "react";
import { About, Description, Hide } from "../style.js";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim, ImageAnimation } from "../animation";
import Wave from "./Wave";
import { ReactComponent as JavascriptFrameWork } from "../img/javascript-frameworks.svg";

const AboutSection = () => {
  const onClickHandler = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "auto",
    });
  };
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>
              Software <span> Engineer </span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          My name is Vi Truong and I am a Computer Science student at Texas A&M
          University. I wanted to be a software engineer because I felt so much
          power and encouragement whenever I could put my idea into building
          software. I really enjoy problem solving, tackling challenging
          problems, and applying logical thinking into building a real product.
        </motion.p>
        <motion.button variants={fade} onClick={onClickHandler}>
          {" "}
          Contact Me
        </motion.button>
      </Description>
      <ImageAnimation>
        <JavascriptFrameWork variants={photoAnim} className="image-animation" />
      </ImageAnimation>
      <Wave />
    </About>
  );
};

export default AboutSection;
