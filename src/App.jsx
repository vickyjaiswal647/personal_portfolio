import { useRef } from "react";
import "./App.css";
import './components/Experience.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experince from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    experience: experienceRef,
    education: educationRef,
    contact: contactRef
  };

  return (
    <>
      <header className="header">
        <Header  sectionRefs={sectionRefs} />
      </header>
      <main>
        <section ref={homeRef} style={{ height: '90vh'}}>
          <Banner contactRef={contactRef} />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={skillsRef}>
          <Skills contactRef={contactRef}/>
        </section>
        <section ref={experienceRef}>
          <Experince />
        </section>
        <section ref={educationRef}>
          <Education />
        </section>
        <section ref={contactRef}>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
