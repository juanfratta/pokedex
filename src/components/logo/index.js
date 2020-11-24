import React from "react";
import "./styles.scss";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="pokemon-logo" />
      </Link>
    </div>
  );
};

export default Logo;
