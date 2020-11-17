import React from "react";
import CardContainer from "../../components/cardContainer";
import "./styles.scss";


const PokemonsList = (props) => {
  return (
    <div className="main-container">
      {props.loading ? "loading" : props.data.map((pokemon) => (
        <CardContainer key={pokemon.name} data={pokemon} />
      ))}
    </div>
  );
};

export default PokemonsList;
