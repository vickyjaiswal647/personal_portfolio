import "./Skills2.css";
import bannerBackground from "../../assets/banner_wallpaper.svg";

const Expertise = ({ contactRef }) => {
  const LinkClickHandler = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="mt-12">
        <h1 className="section-heading mb75px text-center text-blue-800 hover:text-orange-600">
          <span>
            <i className="fas fa-chalkboard-teacher tracking-widest"></i>
          </span>
          <span>SKILLS</span>
        </h1>

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          <div className="text-white text-center space-y-4">
            <h1 className="text-4xl font-bold">I love these technologies</h1>
            <p>
              I have a deep passion for a diverse array of skills that fuel my
              enthusiasm for software development.
            </p>
            <button className="button" onClick={() => LinkClickHandler()}>
              Hire Me
            </button>
          </div>

          <div className="skills-container">
            <div className="client-side">
              <p className="skill">HTML</p>
              <p className="skill">CSS</p>
              <p className="skill">Javascript</p>
              <p className="skill">jQuery</p>
              <p className="skill">ReactJS</p>
            </div>
            <div className="server-side">
              <p className="skill">Core Java</p>
              <p className="skill">Spring Boot Framework</p>
              <p className="skill">Python</p>
              <p className="skill">MySql</p>
              <p className="skill">MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
