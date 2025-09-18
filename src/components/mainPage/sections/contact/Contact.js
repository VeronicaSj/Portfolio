import React from "react";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

import  ContactStyle from './Contact.module.css';

function Contact() {
  const hoverEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-funct-high-light-1)";
    e.currentTarget.style.color = "var(--clr-funct-bg2)";
    e.currentTarget.querySelector("svg").style.color = "var(--clr-funct-bg2)";
    e.currentTarget.style.transform = "translateY(-5px)";
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-funct-bg2)";
    e.currentTarget.style.color = "var(--clr-funct-high-light-1)";
    e.currentTarget.querySelector("svg").style.color = "var(--clr-funct-high-light-1)";
    e.currentTarget.style.transform = "translateY(0)";
  };

  const contacts = [
    {
      icon: <FaWhatsapp />,
      label: "+34 644 048 205",
      href: "https://wa.me/34644048205",
      target: "_blank",
    },
    {
      icon: <FaEnvelope />,
      label: "veronicasanchezjusticia2@gmail.com",
      href: "mailto:veronicasanchezjusticia2@gmail.com",
      target: "_self",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ver%C3%B3nica-s%C3%A1nchez-justicia-825a7421a/",
      target: "_blank",
    },
    {
      icon: <FaGlobe />,
      label: "Portfolio",
      href: "https://veronicasj.github.io/Portfolio/",
      target: "_blank",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/VeronicaSj",
      target: "_blank",
    },
  ];

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>You can contact me through the following means:</p>
      <div className={ContactStyle.container}>

      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target={contact.target}
          rel="noreferrer"
          className={ContactStyle.card}
          onMouseEnter={hoverEffect}
          onMouseLeave={leaveEffect}
        >
          <div className={ContactStyle.icon}>{contact.icon}</div>
          <span>{contact.label}</span>
        </a>
      ))}
    </div>
    </section>
  );
}

export default Contact;