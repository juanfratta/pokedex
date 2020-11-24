import React from "react";
import "./style.scss";
import pikachu from "../../images/pikachu.png";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import { withNamespaces } from "react-i18next";
import SelectLanguage from "../../components/SelectLanguage";

const Home = ({ t }) => {
  return (
    <div className="home-container">
      <div className="logo-container">
        <Logo />
        <SelectLanguage />
      </div>
      <div className="content-ppl">
        <h2>{t("title")}</h2>
        <img src={pikachu} alt="pikachu" />
      </div>
      <Link to={"/all-pokemons"}>
        <Button>Go!</Button>
      </Link>
    </div>
  );
};

export default withNamespaces()(Home);
