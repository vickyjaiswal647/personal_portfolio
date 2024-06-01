import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experince from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <About />
      {/* <Services /> */}
      <Skills />
      <Experince/>
      <Education/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
