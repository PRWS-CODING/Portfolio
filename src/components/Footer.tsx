import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>PRWS.dev</div>

          <div className={styles.links}>
            <a 
              href="https://github.com/PRWS-CODING" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/paul-rosenbaum-2b068336b/" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
            >
              LinkedIn
            </a>
            {/* Optional: Add a link to your resume PDF in the public folder */}
            <a 
              href="/Resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className={styles.link}
            >
              Resume
            </a>
          </div>

          <a href="#top" onClick={scrollToTop} className={styles.backToTop}>
            ↑ Back to top
          </a>
        </div>

        <div className={styles.bottomRow}>
          <span>Designed & Built with React, Vite & Three.js</span>
          <span>© {new Date().getFullYear()} PRWS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}