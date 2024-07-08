import { useState } from "react";
import './header2.css';

const Header = ({ sectionRefs }) => {
  const [brandName, setBrandName] = useState("Portfolio");
  const [menuLinks, setMenuLinks] = useState([
    { title: "Home", link: "home", id: 1 },
    { title: "About", link: "about", id: 2 },
    { title: "Skills", link: "skills", id: 3 },
    { title: "Experience", link: "experience", id: 4 },
    { title: "Education", link: "education", id: 5 },
    { title: "Contact", link: "contact", id: 6 }
  ]);

  const [actionButton, setActionButton] = useState({
    title: "My Resume",
    link: "https://drive.google.com/file/d/1nz0rfL-Wdz-tKZJIxlugbaTTXrKyWT0K/view?usp=sharing",
  });

  const [menuActive, setMenuActive] = useState(false);

  const LinkClickHandler = (link) => {
    sectionRefs[link].current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="header">
      <div>
        <h1 className="brand-name" onClick={() => location.reload()}>{brandName}</h1>
      </div>

      <div className={`menu-links ${menuActive ? "active" : ""}`}>
        {menuLinks.map((link) => (
          <a key={link.id} onClick={() => LinkClickHandler(link.link)}>
            {link.title}
          </a>
        ))}
      </div>

      <div className="action-button">
        <a href={actionButton.link} target="_blank" rel="noreferrer">
          {actionButton.title}
        </a>
      </div>

      <div className={`hamburger ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;