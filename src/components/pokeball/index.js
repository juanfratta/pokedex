import React from "react";
import "./styles.scss";
import pokeball from "../../images/pokeball.png";

const Pokeball = () => {
  return (
    <div className="pokeball">
      <img src={pokeball} alt="pokeball" />
    </div>
  );
};

export default Pokeball;
