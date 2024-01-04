import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/hero/HeroSection";
import Skills from "./components/skills/Skills";
import WorkExperience from "./components/workExperience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <HeroSection />
        <Skills />
        <WorkExperience />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
