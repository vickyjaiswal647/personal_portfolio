import { useState } from "react";
import bannerImage from "../assets/bi5.jpg";

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
      <div className="main-container border py-16" id="about">
        {/* <h1 className="text-center pb-16 text-blue-800 text-4xl font-bold">
          About Me
        </h1> */}
        <h1 className="section-heading mb75px text-center mb-10 text-blue-800 hover:text-orange-600">
          <span className="WE">
          <i className="fa-solid fa-user-tie"></i>
          </span>
          <span className="WE text-4xl font-bold"> About Me </span>
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit h-80 rounded-full"
              src={data.image}
              alt="Vicky Jaiswal"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5 w-2/3">
              <h1 className="text-3xl text-blue-800 hover:text-orange-600 font-semibold ">{data.title}</h1>
              <p className="items-center text-slate-700"><span className="font-bold hover:text-orange-600">Software Developer</span>{data.desc1}</p>
              <p className="text-slate-700">Experienced in <span className="font-bold hover:text-orange-600"> Backend Development</span>{data.desc2}</p>
              {/* <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
