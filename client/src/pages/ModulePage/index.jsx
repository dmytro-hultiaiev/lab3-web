import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

import refresh from "../../assets/images/subway_round_arrow.png";
import brain from "../../assets/images/brain.png";
import list from "../../assets/images/material_symbols_note.png";

import "./style.css";

const ModulePage = () => {
  const { id } = useParams();
  const [moduleData, setModuleData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchModuleData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/module/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setModuleData(response.data);
      } catch (error) {
        console.error("Error fetching module data:", error);
      }
    };

    fetchModuleData();
  }, [id]);

  const deleteModule = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost:8080/api/module/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  if (!moduleData) {
    return <div className="module__loading">Loading...</div>;
  }

  return (
    <main className="main">
      <div className="container">
        <div className="module__header">
          <div className="module__header__info">
            <div className="module__name">{moduleData.name}</div>
            <div className="module__statistics">
              <ul className="module__statistics__items">
                <li className="module__statistics__item">
                  {moduleData.terms.length} terms
                </li>
                <div className="module__status green"></div>
              </ul>
            </div>
          </div>
          <a href="#" className="button red" onClick={deleteModule}>
            Delete module
          </a>
        </div>

        <div className="study__modes">
          <div className="page__header__text">Study modes</div>
          <div className="study__modes__container">
            <div className="study__modes__item">
              <NavLink to={`/repetition/${moduleData._id}`}>
                <div className="study__modes__item__container">
                  <img src={refresh} alt="Icon" />
                  <p>Repetition</p>
                </div>
              </NavLink>
            </div>
            <div className="study__modes__item">
              <NavLink to={`/memorization/${moduleData._id}`}>
                <div className="study__modes__item__container">
                  <img src={brain} alt="Icon" />
                  <p>Memorization</p>
                </div>
              </NavLink>
            </div>
            <div className="study__modes__item">
              <NavLink to={`/test/${moduleData._id}`}>
                <div className="study__modes__item__container">
                  <img src={list} alt="Icon" />
                  <p>Test</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="terms">
          <div className="page__header__text">Terms</div>
          <div class="terms__container" id="terms__container">
            {moduleData.terms.map((term) => (
              <div className="terms__item" key={term._id}>
                <div className="terms__item__header">{term.name}</div>
                <div className="terms__item__desc">{term.definition}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export { ModulePage };
