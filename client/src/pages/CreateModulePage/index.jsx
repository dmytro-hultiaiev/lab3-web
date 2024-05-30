import React, { useState } from "react";
import axios from "axios";

import "./style.css";

const CreateModulePage = () => {
  const [moduleName, setModuleName] = useState("");
  const [terms, setTerms] = useState([{ name: "", definition: "" }]);
  const [error, setError] = useState("");

  const handleModuleNameChange = (e) => {
    setModuleName(e.target.value);
  };

  const handleTermChange = (index, e) => {
    const newTerms = [...terms];
    newTerms[index][e.target.name] = e.target.value;
    setTerms(newTerms);
  };

  const addNewTerm = () => {
    setTerms([...terms, { name: "", definition: "" }]);
  };

  const createModule = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/user/modules",
        {
          name: moduleName,
          terms: terms,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Module created:", response.data);
      window.location = "/";
    } catch (error) {
      setError("Error creating module");
      console.error("Error creating module:", error);
    }
  };

  return (
    <main className="main">
      <div className="container">
        <div className="page__header">
          <p className="page__header__text">Create module</p>
        </div>
        {error && (
          <p className="error__text" id="error__text">
            {error}
          </p>
        )}
        <form
          className="module__name"
          onSubmit={(e) => {
            e.preventDefault();
            createModule();
          }}
        >
          <input
            type="text"
            className="module__name__input"
            placeholder="Enter module name"
            id="module_name"
            value={moduleName}
            onChange={handleModuleNameChange}
          />
        </form>
        <div className="terms__container" id="terms__container">
          {terms.map((term, index) => (
            <div key={index} className="terms__item">
              <form action="" className="terms__form">
                <input
                  type="text"
                  className="terms__input terms__name"
                  placeholder="Term"
                  name="name"
                  value={term.name}
                  onChange={(e) => handleTermChange(index, e)}
                />
                <input
                  type="text"
                  className="terms__input terms__definition"
                  placeholder="Definition"
                  name="definition"
                  value={term.definition}
                  onChange={(e) => handleTermChange(index, e)}
                />
              </form>
            </div>
          ))}
        </div>
        <div className="terms__buttons">
          <a href="#" className="button" onClick={addNewTerm}>
            Add new term
          </a>
          <a href="#" className="button" onClick={createModule}>
            Create module
          </a>
        </div>
      </div>
    </main>
  );
};

export { CreateModulePage };
