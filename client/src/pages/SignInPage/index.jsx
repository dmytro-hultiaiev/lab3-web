import React, { useState } from "react";
import axios from "axios";

import "./style.css";

const SignInPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/login",
        loginData
      );
      localStorage.setItem("token", data.data.token);
      window.location = "/";
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
          <p className="page__header__text">SIGN IN</p>
        </div>
        <form action="" className="authorization__form">
          <input
            type="text"
            className="authorization__input"
            id="email"
            placeholder="Login or email"
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
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
};

export { SignInPage };
