import Nav from "./components/Nav";
import styles from "./App.module.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact"; // <-- Import the new component
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.appContainer}>
      <Nav />

      <main className={styles.mainContent}>
        <Hero />
      </main>
      <Projects />
      {/* Persistent floating components go at the very bottom */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
