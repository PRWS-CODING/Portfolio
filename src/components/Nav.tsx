// src/components/Nav/Nav.tsx
import { useState } from "react";
import styles from "./Nav.module.css";

function Nav() {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const menuItems = [
    {
      label: "About",
      href: "/Resume.pdf", // Looks in the public folder, just like your logo
      target: "_blank", // Opens the resume in a new tab
    },
    {
      label: "Projects",
      href: "#projects", // Scrolls down to the projects section
      target: "_self", // Stays on the same page
    },
    {
      label: "Contact",
      href: "mailto:prwscodingwsc@gmail.com", // Replace with your real email!
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
          <a href="mailto:prwscodingwsc@gmail.com" className={styles.logo}>
            <img
              src="/My-Logo.svg"
              alt="my logo"
              className={styles.logoImage}
            ></img>
          </a>
          <h1 className={styles.title}>
            Paul Rosenbaum — Front-End Developer
          </h1>

          {/* Links Section */}
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
