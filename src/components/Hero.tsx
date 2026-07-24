import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import DragonModel from "./DragonModel";

// A simple function to check for WebGL support
function getWebGLSupport() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
}

function Hero() {
  const techIcons = [
    { name: "HTML5", url: "/HTML-5.png" },
    { name: "CSS3", url: "/CSS-3.png" },
    { name: "JavaScript", url: "/JavaScript.png" },
    { name: "TypeScript", url: "/TypeScript.png" },
    { name: "React", url: "/Atom.png" },
    { name: "Vite", url: "/Vite.js.png" },
    { name: "Git", url: "/Git.png" },
    // If your GitHub and Vercel PNGs are solid black, leave invert: true here
    // so the CSS flips them to white. If they are already white, delete that part!
    { name: "GitHub", url: "/GitHub.png", invert: true },
    { name: "Firebase", url: "/Firebase.png" },
    { name: "Supabase", url: "/Supabase.png" },
    { name: "Vercel", url: "/Vercel.png", invert: true },
    { name: "Linux", url: "/Linux.png" },
  ];

  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(getWebGLSupport());
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.headline}>
 Front-End Developer <br />
    <span className={styles.subTitleSpan}>20 years in logistics</span>
</h1>

<p className={styles.subheadline}>
    I build the tools I used to wish existed: trailer tracking, fuel dashboards, and ops interfaces.
  </p>

  <p className={styles.heroTechList}>
    React · TypeScript · Firebase · Native CSS
  </p>
        <div className={styles.techStack}>
          <h3 className={styles.techTitle}>Core Arsenal</h3>
          <div className={styles.iconGrid}>
            {techIcons.map((tech) => (
              <img
                key={tech.name}
                src={tech.url}
                alt={`${tech.name} logo`}
                title={tech.name}
                className={`${styles.techIcon} ${tech.invert ? styles.invertOnDark : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3D Dragon Container */}
      <div className={styles.modelContainer}>
        {hasWebGL ? (
          <DragonModel />
        ) : (
          <div className={styles.fallbackContainer}>
            <img
              src="/BlueDragon.png"
              alt="Dragon"
              className={styles.fallbackImage}
            />
            <p className={styles.fallbackText}>3D model requires WebGL</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
