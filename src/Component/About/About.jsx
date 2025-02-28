import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../utils/animationVariants";
import "./About.css";
import about_img from "../../assets/solar1.jpg";
import play_icon from "../../assets/play.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <motion.div
        className="about-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInLeft}
      >
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon"  onClick={() =>{setPlayState(true)}}/>
      </motion.div>

      <motion.div
        className="about-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeInRight}
      >
        <h3>About Our Company</h3>
        <h2>Lighting the Way for Tomorrow</h2>
        <p>We specialize in delivering innovative solar energy solutions for homes, businesses, and communities.</p>
      </motion.div>
    </div>
  );
};

export default About;
