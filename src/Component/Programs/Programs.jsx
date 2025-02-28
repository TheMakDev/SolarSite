import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animationVariants";
import "./Program.css";
import solar1 from "../../assets/solar1.jpg";
import solar2 from "../../assets/solar2.jpg";
import solar3 from "../../assets/Solar3.jpg";
import program_icon_1 from "../../assets/icon.png";
import program_icon_2 from "../../assets/icon2.png";
import program_icon_3 from "../../assets/icon3.png";

const Programs = () => {
  return (
    <motion.div
      className="programs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeInUp}
    >
      <div className="program">
        <img src={solar1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Harnessing the Sun</p>
        </div>
      </div>
      <div className="program">
        <img src={solar2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Building a Brighter Future</p>
        </div>
      </div>
      <div className="program">
        <img src={solar3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Sustainable Living </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Programs;
