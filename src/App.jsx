import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Publications from "./components/Publications";
// import Toggle from "./components/Toggle";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="overflow-x-hidden bg-[#0B0F14] text-[#F9FAFB]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
