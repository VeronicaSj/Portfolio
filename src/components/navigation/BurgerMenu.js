import React, {useRef, useState} from 'react'
import styles from './BurgerMenu.module.css'
import BurgerMenuLinkList from './BurgerMenuLinkList';

function BurgerMenu (){

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

    return(
        <div className={styles.spacer}>
                <div  className={styles.fullmenu}>
                    <div className={styles.burgerMenu} onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                    <BurgerMenuLinkList className={menu_class}></BurgerMenuLinkList>
                </div>
        </div>
    )
}


export default BurgerMenu;