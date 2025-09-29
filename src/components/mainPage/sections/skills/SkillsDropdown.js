import React, { useState } from "react";

import SkillsStyles from './SkillsDropdown.module.css';

export default function SkillsDropdown({ skillGroup, skillList }) {
  const [isOpen, setIsOpen] = useState(false);

  const listStyle= {
      display: isOpen ? "block" : "none",
  }
  
  const titleStyle= {
      color: isOpen ? "var(--clr-funct-bg2)" : "var(--clr-funct-high-light-1)" ,
  }

  const hoverEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-funct-high-light-1)";
    setIsOpen(true)
  };

  const leaveEffect = (e) => {
    e.currentTarget.style.backgroundColor = "var(--clr-funct-bg2)";
    setIsOpen(false)
  };

  return (
    <div className={SkillsStyles.container} 
        onMouseEnter={hoverEffect}
        onMouseLeave={leaveEffect}
        >
      <p style={titleStyle}>
        {skillGroup} {isOpen ? "▲" : "▼"}
      </p>
      <ul style={listStyle} className={SkillsStyles.list}>
        {skillList.map((skill, index) => (
          <li key={index} >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}