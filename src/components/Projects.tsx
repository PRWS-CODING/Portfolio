import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: "YardWalk 2.0",
      subtitle: "React, Firebase, Vercel, CSS Modules",
      description: "A comprehensive logistics application built to monitor real-time trailer metrics and fuel data directly on the yard.",
      imgSrc: "yardwalk.png", // Swap with your assets
      liveLink: "https://yard-walk-2-0.vercel.app/",
      githubLink: "https://github.com/PRWS-CODING/YardWalk-2.0"
    },
    {
        title: "Trailer Fuel app",
        subtitle: "React, Native CSS, Vite",
        description: "A dedicated fleet management tool designed to track trailer operations, operational hours, and critical fuel metrics. Streamlines field auditing workflows with a highly responsive utility card interface and direct data recording.",
        imgSrc: "trailerfuel.png",
        liveLink: "https://trailer-fuel.vercel.app/",
        githubLink: "https://github.com/PRWS-CODING/Trailer-Fuel"
    },
    {
      title: "Digital Event Invitation",
      subtitle: "HTML, CSS, JS",
      description: "A custom, responsive wedding invitation web application built with HTML,CSS and JS. Built from scratch to deliver an interactive guest experience with custom event details, elegant mobile-first card layouts, and dynamic UI components.",
      imgSrc: "Wedding-invite.png",
      liveLink: "https://prws-coding.github.io/Wedding-invite/",
      githubLink: "https://github.com/PRWS-CODING/Wedding-invite"
    },
    {
      title: "Netflix Clone",
      subtitle: "React, Firebase Auth, MongoDB, CSS",
      description: "A media streaming dashboard featuring robust routing configurations, live credential validation, and dynamic grids.",
      imgSrc: "netflixclone.png",
      liveLink: "https://netflix-clone-iota-two-39.vercel.app/",
      githubLink: "https://github.com/PRWS-CODING/Netflix-clone"
    }
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <h1 className={styles.sectionTitle}>
        Here are some of my <span className={styles.blueText}>projects.</span>
      </h1>
      
      <ul className={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} className={styles.project}>
            <div className={styles.projectWrapper}>
              <img
                src={project.imgSrc}
                alt={`${project.title} Preview`}
                className={styles.projectImg}
              />
              <div className={styles.wrapperBg}></div>
              
              <div className={styles.projectDescription}>
                <h3 className={styles.descriptionTitle}>{project.title}</h3>
                <h4 className={styles.descriptionSubTitle}>{project.subtitle}</h4>
                <p className={styles.descriptionPara}>{project.description}</p>
                
                <div className={styles.descriptionLinks}>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className={styles.descriptionLink} aria-label="GitHub Source">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className={styles.descriptionLink} aria-label="Live Demo">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}