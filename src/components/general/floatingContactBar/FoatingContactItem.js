import React, { useState } from "react";

import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

import  ContactStyle from './FloatingContactBar.module.css';

export default function FloatingContactItem({index, contact}) {
  
  const [isOpen, setIsOpen] = useState(false);

  const tooltipStyle= {
      opacity: isOpen ? 1 : 0 ,
  }

  const showTooltip = (e) => {
    e.currentTarget.style.transform = "scale(1.2)";
    setIsOpen(true)
  };

  const hideTooltip = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    setIsOpen(false)

  };

  return (
    <a
        key={index}
        href={contact.href}
        target={contact.target}
        rel="noreferrer"
        className={ContactStyle.iconContainer}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
    >
        {contact.icon}
        <span className={ContactStyle.tooltip} style={tooltipStyle}>
            {contact.tooltip}
        </span>
        
    </a>
  );
}