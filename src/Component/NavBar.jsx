import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.webp";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const toggleButton = () => {
    setIsClicked((prev) => !prev);
  };

  const naigate = useNavigate()

  // const navigate = (path) => {
  //   window.location.assign(`https://theavatarx.com/${path}`);
  // };

  useEffect(() => {
    const scrollHandler = () => {
        console.log("scrollHandler");
        setScrolled(window.pageYOffset <= 20)
    };
    window.addEventListener('scroll', scrollHandler);
    
    // Explicit call so that the navbar gets blurred when component mounts 
    scrollHandler(); 
    
    return () => {
        window.removeEventListener('scroll', scrollHandler);
    }
}, []);

  return (
    <>
      <nav
        className={`navbar ${!scrolled ? "scrolled" : ""} ${
          blurred ? "blurred" : ""
        } ${isClicked ? "toggle-active" : ""}`}
      >
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="AvatarX Health" />
        </div>
        <div>
          <button
            onClick={toggleButton}
            className={isClicked ? "toggle-btn toggle-active" : "toggle-btn"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={isClicked ? "nav-links toggle-active" : "nav-links"}>
          <li>
            <a href="/#what-we-do">WHAT WE DO</a>
          </li>
          <li>
            <a href="/#technology">OUR AI TECHNOLOGY</a>
          </li>
          {/* <li>
            <a href="#story">OUR STORY</a>
          </li> */}
          <li>
            <button
              className="contact-button"
              onClick={() => navigate("/contact")}
            >
              CONTACT US
            </button>
          </li>
          <li>
            <button
              className="contact-button"
              onClick={() =>
                window.open("https://calendly.com/phanig/30-minute?month=2025-02", "_blank")
              }
            >
              BOOK A DEMO
            </button>
          </li>
          <li>
            <a style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
              LOG IN
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
