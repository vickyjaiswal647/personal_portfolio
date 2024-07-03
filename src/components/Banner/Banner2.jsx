import bannerImage from "../../assets/developer.png";
import bannerBackground from "../../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";
import "./Banner2.css";

const Banner = ({contactRef} ) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Engineer", "Developer", "Coder"], // Strings to display
      // Speed settings, try different values until you get good results
      startDelay: 100,
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const LinkClickHandler = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white text-container">
        {/* text */}
        <div className="space-y-2">
          <div className="intro-box">
            <h3 className="text-3xl font-semibold">Hi, I am</h3>
            <h1 className="text-5xl font-bold">Vicky Jaiswal</h1>
            <h2 className="text-3xl">
              I am The <span className="font-bold" ref={el}></span>
            </h2>
          </div>
          <p className="paragraph">
            A passionate individual who always thrives to work on end-to-end
            products which develop sustainable and scalable social and technical
            systems to create impact.
          </p>

          <div className="icons-container">
            <a className="icon" href="#">
              <i className="fa-brands text-4xl fa-facebook"></i>
            </a>

            <a className="icon" href="#">
              <i className="fa-brands text-4xl fa-instagram"></i>
            </a>

            <a className="icon" href="#">
              <i className="fa-brands text-4xl fa-youtube"></i>
            </a>

            <a
              className="icon"
              href="http://www.linkedin.com/in/vicky-jaiswal-92a33a175"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands text-4xl fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a className="contact-button" onClick={LinkClickHandler}>
            Contact Me
          </a>
        </div>
      </div>

      {/* second dabba */}

      <div className="bannerImg">
        {/* image */}
        <img src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
