import React from "react";
import { NavLink } from "react-router-dom";

import avatar from "../../assets/images/avatar.jpg";

import "./style.css";

const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <NavLink className="header__logo__link" to="/">
              <p>KEEP</p>
              {"  "} <p>IN MIND</p>
            </NavLink>
          </div>
          <div className="header__profile">
            {!token && (
              <nav class="authorization">
                <ul class="authorization__items">
                  <li class="authorization__item">
                    <NavLink to="/sign-in" className="authorization__link">
                      SIGN IN
                    </NavLink>
                  </li>
                  <li class="authorization__item">|</li>
                  <li class="authorization__item">
                    <NavLink to="/sign-up" className="authorization__link">
                      SIGN UP
                    </NavLink>
                  </li>
                </ul>
              </nav>
            )}
            {token && (
              <NavLink to="/profile">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="header__profile__image"
                />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
