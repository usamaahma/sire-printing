import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa6";
import './fixedicon.css';  

const Fixed = () => {
  return (
    <div className="fixed-icons">
      <div className="icon-container">
        <a href="tel:+447745807425" className="main-icons">
          <FaPhoneAlt />
        </a>
      </div>
      <div className="icon-container">
        <a href="mailto:support@sireprinting.co.uk" className="main-icons">
          <MdOutlineEmail />
        </a>
      </div>
      <div className="icon-container">
        <a href="https://wa.me/447745807425" target="_blank" rel="noopener noreferrer" className="main-icons">
          <SiWhatsapp />
        </a>
      </div>
      <div className="icon-container">
        <a href= "/get a quote" className="main-icons">
          <FaLocationArrow />
        </a>
      </div>
    </div>
  );
};

export default Fixed;
