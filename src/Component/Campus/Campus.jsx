import React from 'react';
import { motion } from 'framer-motion';
import './Campus.css';
import gallery_1 from "../../assets/gallery1.jpg";
import gallery_2 from "../../assets/gallery2.jpg";
import gallery_3 from "../../assets/gallery3.jpg";
import gallery_4 from "../../assets/gallery4.jpg";
import arrow from "../../assets/arrow-right.png";

const Campus = () => {
  return (
    <motion.div
      className="campus"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="gallery">
        <motion.img src={gallery_1} alt="" whileHover={{ scale: 1.1 }} />
        <motion.img src={gallery_2} alt="" whileHover={{ scale: 1.1 }} />
        <motion.img src={gallery_3} alt="" whileHover={{ scale: 1.1 }} />
        <motion.img src={gallery_4} alt="" whileHover={{ scale: 1.1 }} />
      </div>
      <button className='btn dark-btn'>See more here <img src={arrow} alt="" /></button>
    </motion.div>
  );
};

export default Campus;
