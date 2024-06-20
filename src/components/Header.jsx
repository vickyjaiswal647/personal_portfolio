import { useState } from "react";
import './experience.css'

const Header = ({sectionRefs}) => {
  
  const [brandName, setBrandName] = useState("Portfolio");
  const [menuLinks, setMenuLinks] = useState([
    { title: "Home", link: "home", id: 1},
    { title: "About", link: "about", id: 2},
    { title: "Skills", link: "skills", id: 3},
    { title: "Experience", link: "experience",id: 4},
    { title: "Education", link: "education", id: 5},
    { title: "Contact", link: "contact", id: 6}
  ]);

  const [actionButton, setActionButton] = useState({
    title: "My Resume",
    link: "https://drive.google.com/file/d/1nz0rfL-Wdz-tKZJIxlugbaTTXrKyWT0K/view?usp=sharing",
  });

  //const sectionRef = useRef(null);
  const LinkClickHandler = (link)=>{
    sectionRefs[link].current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <div className="h-20 w-full border flex justify-between items-center px-16 bg-gray-100 ">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold text-purple-800 hover:text-orange-600 cursor-pointer" onClick={()=> location.reload()}>{brandName}</h1>
        </div>

        <div className="space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <span key={link.id} style={{height:'200vh'}} className="font-bold text-purple-800 hover:text-orange-600 cursor-pointer" onClick={() => LinkClickHandler(link.link)}>
              {link.title}
            </span>
          ))}
        </div>

        <div>
          {/* buttons */}
          <a
            href={actionButton.link}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-orange-500 shadow  rounded-full text-1xl hover:bg-orange-600"
          >
            {actionButton.title}
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
