import React, {useState} from 'react'

import infoStyles from './SubNav.module.css';

function SubNav (){
    const sectionLinkList = ["About", "Experience", "Skills", "Education", "Contact"];

    
    const hoverEffect = (e) => {
        e.currentTarget.style.color = "var(--clr-funct-bg2)"
        e.currentTarget.style.transform = "translateY(-2px)";
    };

    const leaveEffect = (e) => {
        e.currentTarget.style.color = "var(--clr-funct-font)";
        e.currentTarget.style.transform = "translateY(0)";
    };

    const buildHref = (item) => {
        return '#' + item.toLowerCase().replace(/\s/g,);
    }

    return(
        <div className={infoStyles.header}>
            {sectionLinkList.map((item, idx) => (
                <a
                
                key={idx}
                href = {buildHref(item)}
                onMouseEnter={hoverEffect}
                onMouseLeave={leaveEffect}
                >
                {item}
                </a>
            ))}
        </div>
    )
}

export default SubNav;