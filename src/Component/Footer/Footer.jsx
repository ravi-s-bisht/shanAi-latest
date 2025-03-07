import React from "react";
import "./Footer.css";

function Footer() {
  const navigate = (path) => {
    window.location.assign(`https://theavatarx.com/${path}`);
  };

  return (
    <footer className="footer_1">
      <div className="footer-content">
        <div className="footer-link-container">
          <div className="footer-section">
            <h4>AvatarX Health</h4>
            <ul>
              <li>
                <a href="https://theavatarx.com/">Home</a>
              </li>
              <li
                style={{ cursor: "pointer" }}
              >
                <a href="https://theavatarx.com/#what-we-do">What We Do</a>
              </li>
              <li
                style={{ cursor: "pointer" }}
              >
                <a href="https://theavatarx.com/#technology">Our AI Technology</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-btn-container">
          <button
            className="contact-us-btn"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
          <button
            className="contact-us-btn"
            onClick={() => window.open("https://calendly.com/phanig/30-minute?month=2025-02", "_blank")}
          >
            Book a Demo
          </button>
          <button
            className="login-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        {/* <div className="social-icons">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div> */}
        <p>Copyright © 2024 - AvatarX Health. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
