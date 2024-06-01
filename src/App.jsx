import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
import Experince from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <About />
      {/* <Services /> */}
      <Expertise />
      <Experince/>
      <Education/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
