import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animationVariants";
import "./Title.css";

const Title = ({ subTitle, title }) => {
  return (
    <motion.div
      className="title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={fadeInUp}
    >
      <p>{subTitle}</p>
      <h2>{title}</h2>
    </motion.div>
  );
};

export default Title;
