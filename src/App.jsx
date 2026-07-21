import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Contect from "./components/Contect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contect">
        <Contect />
      </div>
      <Footer />
    </>
  );
}

export default App;
