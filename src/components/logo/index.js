import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./styles.scss";

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
