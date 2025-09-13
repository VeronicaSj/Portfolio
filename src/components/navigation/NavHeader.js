import React from "react";
import imgSelfie from '../../images/selfie.png';
import infoStyles from '../../styles/navHeader.module.css';
import Navbar from "./Navbar";
import BurgerMenu from "./BurgerMenu";

function NavHeader() {

  return (
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
  );
}

export default NavHeader;