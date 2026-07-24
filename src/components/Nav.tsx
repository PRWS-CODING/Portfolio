import { useState } from "react";
import styles from "./Nav.module.css";

function Nav() {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const menuItems = [
    {
      label: "About",
      href: "/Resume.pdf",
      target: "_blank",
    },
    {
      label: "Projects",
      href: "#projects",
      target: "_self",
    },
    {
      label: "Contact",
      href: "mailto:prwscodingwsc@gmail.com",
      target: "_self",
    },
  ];

  return (
    <>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="glass-distortion">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.008"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
          </filter>
        </defs>
      </svg>

      <nav className={styles.glassNav}>
        <div className={styles.glassFilter}></div>
        <div className={styles.glassOverlay}></div>
        <div className={styles.glassSpecular}></div>

        <div className={styles.glassContent}>
          {/* GROUPED BRAND: Logo image & text sit inside one anchor tag */}
          <a href="#hero" className={styles.brandGroup}>
            <img
              src="/My-Logo.svg"
              alt="PRWS Logo"
              className={styles.logoImage}
            />
            <h2 className={styles.logoText}>PRWS.Dev</h2>
          </a>

          <ul className={styles.navList}>
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.target}
                  rel={
                    item.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className={`${styles.navItem} ${activeItem === item.label ? styles.active : ""}`}
                  onClick={() => {
                    setActiveItem(item.label);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;