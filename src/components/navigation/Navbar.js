import { useState } from "react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const linkList = ["About", "Experience", "Skills", "Education", "Contact"];

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

  return (
    <div>
      <div className={styles.container}>
        {/* Desktop Nav */}
        <div className={styles.links}>
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
        </div>

        {/* Burger Button */}
        <button onClick={toggleMenu} className={styles.burger}>
          {open ? <div size={28} /> : <div size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
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
      </div>
    </div>
  );
}