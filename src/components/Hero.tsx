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
    { name: "HTML5", url: "/html.png" },
    { name: "CSS3", url: "/css-3.png" },
    { name: "JavaScript", url: "/js.png" },
    { name: "TypeScript", url: "/TypeScript.png" },
    { name: "React", url: "/atom.png" },
    { name: "Vite", url: "/Vite.js.png" },
    { name: "Git", url: "/Git.png" },
    // If your GitHub and Vercel PNGs are solid black, leave invert: true here
    // so the CSS flips them to white. If they are already white, delete that part!
    { name: "GitHub", url: "/GitHub.png", invert: true },
    { name: "Firebase", url: "/Firebase.png" },
    { name: "Supabase", url: "/supabase.png" },
    { name: "Vercel", url: "/vercel.png", invert: true },
  ];

  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(getWebGLSupport());
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.headline}>
          Building the Future,
          <br />
          Line by Line.
        </h1>
        <p className={styles.subheadline}>
          {/* Engineering Structure Out of Chaos.
            With 20 years of experience navigating complex logistics and a foundation built on military discipline, I don't just write code—I engineer solutions. I specialize in React, TypeScript, and clean, native CSS architecture to build responsive, data-driven applications that solve real-world problems. */}
          Front-End Web Developer & Operations Specialist A disciplined
          front-end developer transitioning from a 20-year career in the
          logistics industry. Armed with a military-structured approach to
          problem-solving, I specialize in building scalable web applications
          using React, JavaScript/TypeScript, and native CSS Modules. Proven
          ability to translate complex operational bottlenecks into streamlined
          digital solutions, demonstrated by architecting custom real-time
          trailer tracking systems (YardWalk 2.0) and fuel management
          interfaces. I thrive on creating clean, highly customized UI
          architectures without relying on bloated utility frameworks, bringing
          a no-nonsense, results-oriented mindset to modern web development.
          {/* "For the last 20 years, I've managed the chaos of the logistics industry. Now, I'm using that same military-level structure and operational insight to build the digital tools that industries actually need. I focus on React, Firebase, and TypeScript, and I take pride in writing clean, native CSS rather than leaning on shortcuts. Whether I'm building a real-time trailer tracking application like YardWalk 2.0, developing fuel-tracking dashboards, or designing responsive landing pages, my goal is always the same: take a complex problem, strip away the noise, and build a structured, scalable solution." */}
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
              src="/dragon-placeholder.png"
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
