import React from "react";
import i18n from "../../utils/i18n";
import { withNamespaces } from "react-i18next";
import "./styles.scss";

const SelectLanguage = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="select-language-container">
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default withNamespaces()(SelectLanguage);
