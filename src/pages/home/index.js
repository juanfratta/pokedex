import React from "react";
import "./style.scss";
import logo from "../../images/logo.svg";
import pikachu from "../../images/pikachu.png";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";

const Home = () => {
  return (
    <div className="home-container">
      <Logo />

      {/* <div className="logo">
        <img src={logo} alt="pokemon-logo" />
      </div> */}
      <div className="content-ppl">
        <h2>Welcome to the Pokedex, a complete guide of pokemons...</h2>
        <img src={pikachu} alt="pikachu" />
      </div>
      <Link to={"/all-pokemons"}>
        <Button className="button">Go!</Button>
      </Link>
    </div>
  );
};

export default Home;
