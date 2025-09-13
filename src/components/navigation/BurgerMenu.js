import React, {useState} from 'react'
import styles from '../../styles/BurgerMenu.module.css'

function BurgerMenu (){
    
    const linkList = ["About", "Experience", "Skills", "Education", "Contact"];

    // to change burger classes
    const [burger_class, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`)
    const [menu_class, setMenuClass] = useState(`${styles.menu} ${styles.hidden}`)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        setIsMenuClicked(!isMenuClicked)
        if(isMenuClicked) {
            setBurgerClass(`${styles.burgerBar} ${styles.clicked}`)
            setMenuClass(`${styles.menu} ${styles.visible}`)
        }
        else {
            setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`)
            setMenuClass(`${styles.menu} ${styles.hidden}`)
        }
    }

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
        <div className={styles.spacer}>
                <div  className={styles.fullmenu}>
                    <ul className={styles.navLinksList}>
                        {linkList.map((item, idx) => (
                                <a 
                                key={idx}
                                href = {buildHref(item)}
                                onMouseEnter={hoverEffect}
                                onMouseLeave={leaveEffect}
                                >
                                {item}
                                </a>
                        ))}
                    </ul>

                    <div className={styles.burgerMenu} onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </div>

            <div className={menu_class} >
                <ul className={styles.navLinksList}>
                    {linkList.map((item, idx) => (
                                <a 
                                key={idx}
                                href = {buildHref(item)}
                                onMouseEnter={hoverEffect}
                                onMouseLeave={leaveEffect}
                                >
                                {item}
                                </a>
                        ))}
                </ul>
            </div>
        </div>
    )
}


export default BurgerMenu;