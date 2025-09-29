import React, { useState } from "react";
import imgSelfie from '../../images/selfie.png';
import infoStyles from './navHeader.module.css';
import BurgerMenu from "./BurgerMenu";

function NavHeader() {

  const [hider, setHider] = useState({display: "flex"});


  
        console.log("OnClick" + hider.display);
    const OnClick = () => {
        console.log("OnClick" + hider.display);
        if (hider.display=="flex"){
          setHider({display: "none"})
        } else {
          setHider({display: "flex"})
        }
    };

  return (
    <div>
    <header className={infoStyles.header}>
        <div>
            <h1 className={infoStyles.logo} style={hider}>Veronica Sanchez Justicia</h1>
        </div>

        {/* <Navbar></Navbar> */}
        <BurgerMenu onclick={OnClick} ></BurgerMenu>
    </header>
    
    <div className={infoStyles.navHeaderPlaceholder}></div>
    </div>
  );
}

export default NavHeader;