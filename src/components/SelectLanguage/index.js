import React from "react";
import i18n from "../../utils/i18n";
import { withNamespaces } from "react-i18next";
import "./styles.scss";

const SelectLanguage = (props) => {
  const { lng } = props;
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="select-language-container">
      {lng === "es" ? (
        <button id="english" onClick={() => changeLanguage("en")}>
          EN
        </button>
      ) : (
        <button id="spanish" onClick={() => changeLanguage("es")}>
          ES
        </button>
      )}
    </div>
  );
};

export default withNamespaces()(SelectLanguage);
