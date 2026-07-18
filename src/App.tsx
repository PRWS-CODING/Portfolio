import Nav from "./components/Nav";
import styles from "./App.module.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact"; // <-- Import the new component
import Projects from "./components/Projects";

function App() {
  return (
    <div className={styles.appContainer}>
      <Nav />
      
      <main className={styles.mainContent}>
       <Hero />
      </main>
      <Projects />
      
      {/* 
        This empty div just adds extra height to the page so you can 
        scroll and actually see the grid distorting behind your glass nav! 
      */}
      <div style={{ height: '150vh' }}></div>

      {/* Persistent floating components go at the very bottom */}
      <Contact /> 
    </div>
  );
}

export default App;