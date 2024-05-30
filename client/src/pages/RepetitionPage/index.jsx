import React from "react";

import "./style.css";

const RepetitionPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="page__header">
          <div className="page__header__text">Repetition</div>
        </div>
        <div className="repetition__terms">
          <div className="repetition__terms__item">
            <div className="repetiton__terms__container">
              <p className="term__name">Term</p>
              <p className="term__delim">-</p>
              <p className="term__desc">description</p>
            </div>
            <div className="repetition__button_container">
              <button className="term__button green">I know</button>
              <button className="term__button red">I forgot</button>
            </div>
          </div>
          <div className="repetition__terms__item">
            <div className="repetiton__terms__container">
              <p className="term__name">Term</p>
              <p className="term__delim">-</p>
              <p className="term__desc">description</p>
            </div>
            <div className="repetition__button_container">
              <button className="term__button green">I know</button>
              <button className="term__button red">I forgot</button>
            </div>
          </div>
          <div className="repetition__terms__item">
            <div className="repetiton__terms__container">
              <p className="term__name">Term</p>
              <p className="term__delim">-</p>
              <p className="term__desc">description</p>
            </div>
            <div className="repetition__button_container">
              <button className="term__button green">I know</button>
              <button className="term__button red">I forgot</button>
            </div>
          </div>
          <div className="repetition__terms__item">
            <div className="repetiton__terms__container">
              <p className="term__name">Term</p>
              <p className="term__delim">-</p>
              <p className="term__desc">description</p>
            </div>
            <div className="repetition__button_container">
              <button className="term__button green">I know</button>
              <button className="term__button red">I forgot</button>
            </div>
          </div>
          <div className="repetition__terms__item">
            <div className="repetiton__terms__container">
              <p className="term__name">Term</p>
              <p className="term__delim">-</p>
              <p className="term__desc">description</p>
            </div>
            <div className="repetition__button_container">
              <button className="term__button green">I know</button>
              <button className="term__button red">I forgot</button>
            </div>
          </div>
          <div className="repetition__terms__item">
            <div className="repetiton__terms__container">
              <p className="term__name">Term</p>
              <p className="term__delim">-</p>
              <p className="term__desc">description</p>
            </div>
            <div className="repetition__button_container">
              <button className="term__button green">I know</button>
              <button className="term__button red">I forgot</button>
            </div>
          </div>
        </div>
        {/* <div className="repetition__result">
          <div className="repetition__result__header">YOU DONE IT!</div>
          <div className="repetition__result__container">
              <div className="repetition__result__item">
                  <div className="repetition__result__category">Total terms:</div>
                  <div className="repetition__result__scores">12</div>
              </div>
              <div className="repetition__result__item">
                  <div className="repetition__result__category">You know:</div>
                  <div className="repetition__result__scores green">11</div>
              </div>
              <div className="repetition__result__item">
                  <div className="repetition__result__category">You forgot:</div>
                  <div className="repetition__result__scores red">1</div>
              </div>
          </div>
          <div className="button__container">
              <a href="module.html" className="button">Back to module</a>
          </div>
      </div> */}
      </div>
    </main>
  );
};

export { RepetitionPage };
