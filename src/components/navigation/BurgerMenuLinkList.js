import React, {useState} from 'react'
import styles from './BurgerMenuLinkList.module.css'
import { NavLink } from 'react-router-dom';

function BurgerMenuLinkList ({className}){
    const sectionLinkList = ["About", "Experience", "Skills", "Education", "Contact"];
    const [linkListDisplay, setLinkListDisplay] = useState({display: "flex" }
    );

    const outHome = () => {
        setLinkListDisplay({display: "none",})
    };
    
    const onHome = () => {
        setLinkListDisplay({display: "flex", })
    };
    
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
        <ul className={className}>
            <NavLink to="/" 
                onClick={onHome} 
                onMouseEnter={hoverEffect}
                onMouseLeave={leaveEffect}
                className={styles.NavLink}>
                    Home
            </ NavLink>
            {sectionLinkList.map((item, idx) => (
                    <a
                    style={linkListDisplay}
                    key={idx}
                    href = {buildHref(item)}
                    onMouseEnter={hoverEffect}
                    onMouseLeave={leaveEffect}
                    >
                    {item}
                    </a>
                ))}
            <NavLink to="/blog" 
                onClick={outHome} 
                onMouseEnter={hoverEffect}
                onMouseLeave={leaveEffect}
                className={styles.NavLink}>
                    Blog
            </ NavLink>
        </ul>
    )
}


export default BurgerMenuLinkList;