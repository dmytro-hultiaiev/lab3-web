import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const TestPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="page__header">
          <div className="page__header__text">Test</div>
        </div>
        {/* <div className="test__container">
          <div className="test__term">Term</div>

          <div className="test__items">
              <div className="test__item">Definition</div>
              <div className="test__item">Definition</div>
              <div className="test__item">Definition</div>
              <div className="test__item">Definition</div>
          </div>

          <form action="" className="test__form">
              <input type="text" className="test__input" placeholder="Definition"/>
              <button className="test__button">Check answer</button>
          </form>
      </div> */}
        <div className="test__result__container">
          <div className="result__scale">
            <div className="result__scale__green"></div>
            <div className="result__scale__red"></div>
          </div>
          <div className="result__score">85% correct answers</div>
          <div className="result__statics">
            <div className="result__statics__item">
              <div className="result__statics__header green">
                Correct answers
              </div>
              <div className="result__statics__points">
                <div className="result__statics__point">1. Term</div>
                <div className="result__statics__point">2. Term</div>
                <div className="result__statics__point">2. Term</div>
              </div>
            </div>
            <div className="result__statics__item">
              <div className="result__statics__header red">Wrong answers</div>
              <div className="result__statics__points">
                <div className="result__statics__point">
                  5. Term - Definition
                </div>
                <div className="result__statics__point">
                  6. Term - Definition
                </div>
                <div className="result__statics__point">
                  7. Term - Definition
                </div>
              </div>
            </div>
          </div>
          <div className="result__button">
            <NavLink className="button" to="/module">
              Back to module
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export { TestPage };
