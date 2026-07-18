// import react from 'react'
import Nav from "./components/Nav";
import styles from "./App.module.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className={styles.appContainer}>
      <Nav />
      
      <main className={styles.mainContent}>
       <Hero />
      </main>
      
      {/* 
        This empty div just adds extra height to the page so you can 
        scroll and actually see the grid distorting behind your glass nav! 
      */}
      <div style={{ height: '150vh' }}></div>
    </div>
  );
}

export default App;
