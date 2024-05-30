import React from "react";

import "./style.css";

const MemorizationPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="page__header">
          <div className="page__header__text">Memorization</div>
        </div>
        <div className="memorization__container">
          <div className="memorization__term">Term</div>
          {/*  Choose */}
          {/*  <div className="memorization__items">
              <div className="memorization__item green">Definition</div>
              <div className="memorization__item red">Definition</div>
              <div className="memorization__item">Definition</div>
              <div className="memorization__item">Definition</div>
          </div> */}

          {/* Write */}
          <form action="" className="memorization__form">
            <input
              type="text"
              className="memorization__input"
              placeholder="Definition"
            />
            <button className="memorization__button">Check answer</button>
          </form>
        </div>

        {/* Mistake */}
        {/* <div className="memorization__message__container">
          <div className="memorization__message__text red">Wrong! The correct answer is: definition</div>
          <button className="memorization__message__button red">Move on →</button>
      </div> */}

        {/* Correct */}
        <div className="memorization__message__container">
          <div className="memorization__message__text green">
            This is the correct answer
          </div>
          <button className="memorization__message__button green">
            Move on →
          </button>
        </div>
      </div>
    </main>
  );
};

export { MemorizationPage };
