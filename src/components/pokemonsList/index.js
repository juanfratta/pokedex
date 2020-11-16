import React from "react";
import "./styles.scss";

const PokemonsList = (pokemons) => {
  return (
    <div className="main-container">
      {console.log(pokemons.data)}
      {pokemons.data.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonsList;
