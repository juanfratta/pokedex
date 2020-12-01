import React from "react";
import pokeball from "../../images/pokeball.png";
import "./styles.scss";

const Pokeball = () => {
  return (
    <div className="pokeball">
      <img src={pokeball} alt="Loading ..." />
    </div>
  );
};

export default Pokeball;
