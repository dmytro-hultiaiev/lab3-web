import React, { useState } from "react";
import axios from "axios";

import "./style.css";

const SignUpPage = () => {
  const [registerData, setRegisterData] = useState({
    login: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.id]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/register", registerData);
      window.location = "/sign-in";
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <main className="main">
      <div className="container">
        <div className="form__header">
          <p className="page__header__text">SIGN UP</p>
        </div>
        <form action="" className="authorization__form">
          <input
            type="text"
            className="authorization__input"
            id="login"
            placeholder="Login"
            onChange={handleChange}
          />
          <input
            type="email"
            className="authorization__input"
            id="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="authorization__input"
            id="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {error && (
            <p className="error__text" id="error__text">
              {error}
            </p>
          )}
          <button
            className="authorization__button"
            type="button"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export { SignUpPage };
