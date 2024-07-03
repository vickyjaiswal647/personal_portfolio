import bannerImage from "../../assets/developer.png";
import bannerBackground from "../../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = ({contactRef}) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Engineer", "Developer", "Coder"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 80,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const LinkClickHandler = () =>{
    contactRef.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Vicky Jaiswal</h1>
          <h2 className="text-3xl ">
            I am The <span className="font-bold" ref={el}></span>
          </h2>
          <p className="">
            A passionate individual who always thrive to work on end to end products which develop 
            sustainable and scalable social and technical systems to create impact.
          </p>

          <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 mt-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl  fa-facebook"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 mt-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 mt-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl  fa-youtube"></i>
            </a>

            <a href="http://www.linkedin.com/in/vicky-jaiswal-92a33a175" target="_blank" className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 mt-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-2xl px-3  py-2 bg-orange-500  rounded-full shadow-lg hover:bg-orange-600"
            onClick={() => LinkClickHandler()}
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className="bannerImg w-full mt-9 flex justify-center float-right transition duration-300 ease-out">
        {/* image */}
        <img className="rounded-full my-2 px-20" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
