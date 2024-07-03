import { useState } from "react";
import bannerImage from "../../assets/bi5.jpg";
import "./about2.css"

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java & React Developer",
    desc1: ` with a demonstrated ability to adapt to emerging technologies and frameworks. 
            Highly passionate about the field of computer science and its diverse domains. Possesses a strong aptitude for rapid learning and has a track record of achieving exceptional results in a corporate 
            environment through effective teamwork.`,
    desc2: ` with a diverse project portfolio. Passionate about continuous 
            learning and development of new technologies. Highly motivated and diligent, seeking opportunities 
            to acquire new skill sets and advance my career within a dynamic organization.`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });

  return (
    <>
      <div className="main-container" id="about">
        <h1 className="section-heading">
          <span className="WE">
            <i className="fa-solid fa-user-tie"></i>
          </span>
          <span className="WE"> About Me </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center">
          {/* image container */}
          <div className="image-container">
            <img
              src={data.image}
              alt="Vicky Jaiswal"
            />
          </div>

          {/* text container */}
          <div className="text-container">
            <div className="space-y-5">
              <h1>{data.title}</h1>
              <p>
                <span className="font-bold">Software Developer</span>
                {data.desc1}
              </p>
              <p>
                Experienced in <span className="font-bold">Backend Development</span>
                {data.desc2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
