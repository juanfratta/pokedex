import React from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import Button from "../../components/button";
import Logo from "../../components/logo";
import SelectLanguage from "../../components/selectLanguage";
import pikachu from "../../images/pikachu.png";
import "./style.scss";

const Home = ({ t }) => {
  return (
    <div className="home-container">
      <header className="logo-container">
        <Logo />
        <SelectLanguage />
      </header>
      <main className="content-ppl">
        <div className="text-ppl">
          <h1>{t("title")}</h1>
          <p>{t("subtitle")}</p>
        </div>
        <img src={pikachu} alt="pikachu" />
      </main>
      <Link to={"/all-pokemons"}>
        <Button>Go!</Button>
      </Link>
    </div>
  );
};

export default withNamespaces()(Home);
