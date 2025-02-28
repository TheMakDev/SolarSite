import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animationVariants";
import "./Hero.css";
import arrow from "../../assets/right-arrow.png";

const Hero = () => {
  return (
    <motion.div
      className="hero container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeInUp}
    >
      <div className="hero-text">
        <h1>Empowering the world with sustainable solar energy.</h1>
        <p>
          Our advanced solar technology delivers clean, renewable energy, reducing costs and carbon emissions.
        </p>
        <button className="btn">
          Explore more <img src={arrow} alt="right arrow" />
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
