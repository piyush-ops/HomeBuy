import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyles = (menuOpen) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpen && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={150} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpen(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpen)}>
            <a href="#Residencies">Residencies</a>
            <a href="#OurValue">Our Value</a>
            <a href="#ContactUs">Contact Us</a>
            <a href="#GetStarted">Get Started</a>
            <button className="button">
              <a href="mailto:pkd342001@gmail.com">Contact</a>
            </button>
          </div>
        
        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(prev=>!prev)
          }
        >
          <BiMenuAltRight size={30} />
        </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
