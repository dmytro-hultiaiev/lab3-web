import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about__href__item">
          <NavLink to="/about" className="about__href">
            About project
          </NavLink>
        </div>
        <div className="footer__text">
          <p>© 2024 KEEP IN MIND</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
