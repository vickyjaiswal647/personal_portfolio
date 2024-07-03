import { useRef } from "react";
import "./App.css";
import "./components/Experience/Experience.css";
import Header2 from "./components/Header/Header2";
import Banner2 from "./components/Banner/Banner2";
import About2 from "./components/About/About2";
import Footer from "./components/Footer/Footer";
import Experince from "./components/Experience/Experience";
import Education2 from "./components/Education/Education2";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills3";

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
    contact: contactRef,
  };

  return (
    <>
      <header className="header2">
        <Header2 sectionRefs={sectionRefs} />
      </header>
      <main>
        <section ref={homeRef}>
          <Banner2 contactRef={contactRef} />
        </section>
        <section ref={aboutRef}>
          <About2 />
        </section>
        <section ref={skillsRef}>
          <Skills contactRef={contactRef} />
        </section>
        <section ref={experienceRef}>
          <Experince />
        </section>
        <section ref={educationRef}>
          <Education2 />
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
