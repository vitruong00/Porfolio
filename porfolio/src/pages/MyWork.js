import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import backend from "../img/back-end.PNG";
import frontend from "../img/front-end.PNG";
import music1 from "../img/music1.png";
import { motion } from "framer-motion";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { ReactComponent as MachineLearning } from "../img/machine-learning.svg";

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
      </motion.div>
      <Movie>
        <motion.h2 style={{ color: "white" }} variants={fade}>
          End-to-end Global Search
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <motion.img variants={photoAnim} src={backend} alt="backend" />
        </Hide>
        <Hide>
          <motion.img variants={photoAnim} src={frontend} alt="frontend" />
        </Hide>
      </Movie>
      <Movie ref={element} variants={fade} initial="hidden" animate={controls}>
        <motion.h2 style={{ color: "white" }} variants={fade}>
          Music Application
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Hide>
          <motion.img variants={photoAnim} src={music1} alt="music1" />
        </Hide>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        initial="hidden"
        animate={controls2}
      >
        {" "}
        <motion.h2 style={{ color: "white" }} variants={fade}>
          Seq2Seq Model for Characters Prediction
        </motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://drive.google.com/file/d/1SP6PaxoqqtDaqG7S4c_mF9Y2hRwkb9PC/view?usp=sharing">
          {" "}
          <MachineLearning />
        </a>
      </Movie>
      <ScrollTop />
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 5rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #23d997;
  z-index: 2;
`;

export default MyWork;
