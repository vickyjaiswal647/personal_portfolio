import bannerBackground from "../assets/banner_wallpaper.svg";
import './Skills.css'

const Expertise = () => {
  
  return (
    <>
      <div className="mt-12">
        <h1 className="fas fa-chalkboard-teacher">
          Skills
        </h1>
        {/* box section */}

        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16 rounded-full"
        >
          <div className="flex text-white ml-10">
            {/* text container */}
            <div className="w-2/3 text-center space-y-4 ms-20">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
              I have a deep passion for a diverse array of skills that fuel my enthusiasm for software development.
              </p>
              <button className=" text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600">
                Hire Me
              </button>
            </div>
          </div>
          <div className="flex justify-center mb-10">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                HTML
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                CSS
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Javascript
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                jQuery
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                ReactJS
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Core Java
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Spring Boot Framework
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                Python
              </p>

              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MySql
              </p>
              <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
