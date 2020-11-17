import React from "react";
import Card from "../card";
import "./styles.scss";


const PokemonsList = (props) => {
  console.log(props)
  return (
    <div className="main-container">
      {props.loading ? "loading": props.data.map((pokemon) => (
        <Card key={pokemon.name} data={pokemon}/>
      ))}
    </div>
  );
};

export default PokemonsList;
