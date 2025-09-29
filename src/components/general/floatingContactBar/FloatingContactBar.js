import React, { useState } from "react";

import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

import  ContactStyle from './FloatingContactBar.module.css';
import FloatingContactItem from "./FoatingContactItem";

export default function FloatingContactBar() {
  
  const contacts = [
    {
      icon: <FaWhatsapp />,
      href: "https://wa.me/34644048205",
      tooltip: "+34 644 048 205",
      target: "_blank",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:veronicasanchezjusticia2@gmail.com",
      tooltip: "veronicasanchezjusticia2@gmail.com",
      target: "_self",
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/ver%C3%B3nica-s%C3%A1nchez-justicia-825a7421a/",
      tooltip: "LinkedIn",
      target: "_blank",
    },
    {
      icon: <FaGlobe />,
      href: "https://veronicasj.github.io/Portfolio/",
      tooltip: "Portfolio",
      target: "_blank",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/VeronicaSj",
      tooltip: "GitHub",
      target: "_blank",
    },
  ];

  return (
    <div className={ContactStyle.bar}>
      {contacts.map((contact, index) => (
        <FloatingContactItem index={index} contact={contact} />
      ))}
    </div>
  );
}