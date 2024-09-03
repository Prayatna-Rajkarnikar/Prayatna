import NavBar from "./helpers/NavBar.js";
import { useState } from "react";
import Home from "./pages/Home.js";
import Projects from "./pages/Projects.js";
import Skills from "./pages/Skills.js";
import ContactMe from "./pages/ContactMe.js";
import axios from "axios";
function App() {
  const [darkMode, setDarkMode] = useState(false);

  axios.defaults.baseURL = "http://localhost:3001";
  axios.defaults.withCredentials = true;

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className=" bg-white px-10 py-5 md:px-20 lg:px-40 dark:bg-gradient-to-b from-gray-800 to-gray-900 font-sans">
          <NavBar setDarkMode={setDarkMode} darkMode={darkMode} />
          <section id="home">
            <Home />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <ContactMe />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
