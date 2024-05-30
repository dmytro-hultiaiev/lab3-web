import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";

import "./style.css";

const MainPage = () => {
  const [modules, setModules] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/user/modules",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setModules(response.data.modules);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    if (token) {
      fetchModules();
    }
  }, [token]);

  return (
    <main className="main">
      <div className="container">
        {!token && (
          <div className="main__page__container" id="main__page__container">
            <p className="main__page__container__text green">
              PLEASE <NavLink to="/sign-in">SIGN IN</NavLink> OR{" "}
              <NavLink to="/sign-up">SIGN UP</NavLink>
            </p>
            <p className="main__page__container__text">TO SEE YOUR MODULES</p>
          </div>
        )}
        {token && (
          <div className="folder" id="folder">
            <div className="folder__header">
              <p className="folder__header__text">Modules</p>
              <NavLink to="/create-module" className="button">
                Add module
              </NavLink>
            </div>
            <div className="folder__content" id="folder__content">
              {modules.length > 0 ? (
                modules.map((module) => (
                  <div className="module" key={module._id}>
                    <NavLink to={`/module/${module._id}`}>
                      <div className="module__header">
                        <p>{module.name}</p>
                      </div>
                      <div className="module__desc">
                        <ul className="module__desc__items">
                          <li className="module__desc__item">
                            {module.terms.length} terms
                          </li>
                          <li className="module__desc__item delimiter">|</li>
                          <li className="module__desc__item">
                            {module.createdAt
                              ? dayjs(module.createdAt).format("DD-MM-YYYY")
                              : ""}
                          </li>
                        </ul>
                      </div>
                    </NavLink>
                  </div>
                ))
              ) : (
                <p className="modules__loading">
                  No modules found. Please add some.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export { MainPage };
