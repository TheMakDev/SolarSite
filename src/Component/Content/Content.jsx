import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./Content.css";
import mg_icon from "../../assets/email.png";
import phone_icon from "../../assets/mail.png";
import location_icon from "../../assets/location.png";
import mail_icon from "../../assets/mail.png";
import arrow from "../../assets/arrow-right.png";

const Content = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aa0005ff-69ba-4399-b7e7-2f4d6d9e8503");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      className='contact'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="contact-col"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3>Send us a message <img src={mg_icon} alt="" /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us.</p>
        <ul>
          <li> <img src={mail_icon} alt="" /> contact@jamessamuel.mak</li>
          <li> <img src={phone_icon} alt="" /> +234 706 308 5718</li>
          <li> <img src={location_icon} alt="" /> shop 2 Araromi, Ile-Oluwa, Ogbomoso, Oyo State</li>
        </ul>
      </motion.div>

      <motion.div 
        className="contact-col"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
      >
        <form action="" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>
            Submit now <img src={arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </motion.div>
    </motion.div>
  );
};

export default Content;
