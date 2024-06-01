import { useRef, useState } from "react";

const Header = () => {
  const [brandName, setBrandName] = useState("Portfolio");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/About",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Experience",
      link: "/experience",
      id: 4,
    },
    {
      title: "Education",
      link: "/education",
      id: 5,
    },
    {
      title: "Contact",
      link: "/Contact",
      id: 6,
    }
  ]);

  const [actionButton, setActionButton] = useState({
    title: "Download CV",
    link: "/hire-me",
  });

  const sectionRef = useRef(null);
  const LinksClickHandler = ()=>{
    sectionRef.current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* brand logo */}
          <h1 className="text-2xl font-bold hover:text-orange-600 cursor-pointer">{brandName}</h1>
        </div>

        <div className="space-x-6">
          {/* menu links */}

          {menuLinks.map((link) => (
            <span key={link.id} style={{height:'200vh'}} ref={sectionRef} className="hover:text-orange-600 cursor-pointer" onClick={LinksClickHandler}>
              {link.title}
            </span>
          ))}
        </div>

        <div>
          {/* buttons */}
          <a
            href={actionButton.link}
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
