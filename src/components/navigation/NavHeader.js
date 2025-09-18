import React from "react";
import imgSelfie from '../../images/selfie.png';
import infoStyles from './navHeader.module.css';
import BurgerMenu from "./BurgerMenu";

function NavHeader() {

  return (
    <div>
    <header className={infoStyles.header}>
        <div className={infoStyles.imgContainer}>
              <img src={imgSelfie} alt="Selfie"
                  className={infoStyles.imgSelfie} ></img>
        </div>
        <div>
            <h1 className={infoStyles.logo}>Veronica Sanchez Justicia</h1>
        </div>

        {/* <Navbar></Navbar> */}
        <BurgerMenu></BurgerMenu>
    </header>
    
    <div className={infoStyles.navHeaderPlaceholder}></div>
    </div>
  );
}

export default NavHeader;