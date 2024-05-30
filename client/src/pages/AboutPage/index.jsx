import React from "react";

import "./style.css";

const AboutPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="page__header">
          <div className="page__header__text">About project</div>
        </div>
        <div className="about__text">
          <p>
            The Keep in Mind project was created to quickly memorize foreign
            words and expand your vocabulary. The project has created repetition
            and memorization modes that allow you to quickly memorize new words,
            as well as pass a test on your knowledge.
          </p>
          <p>
            The service works as follows:
            <br />
            1) You create a folder where the modules will be stored. There can
            be any number of folders. Folders are created for convenient
            grouping of modules.
            <br />
            2) You create a module. A module is a place where the words and
            their translation that you entered in this module are stored.
            <br />
            3) After creating a module using the 3 modes, you can start the
            process of learning new words.
          </p>
        </div>
      </div>
    </main>
  );
};

export { AboutPage };
