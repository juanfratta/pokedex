import React from "react";
import CardContainer from "../../components/cardContainer";
import Logo from "../../components/logo";
import "./styles.scss";

const PokemonsList = (props) => {
  const { loading, error, pokemons } = props;
  return (
    <div className="main-container">
      <Logo />
      <div className="pokemons-container">
        {error !== "" && <div>"HUBO UN ERROR : ("</div>}
        {loading && <h2 className="loading">LOADING...</h2>}
        {pokemons !== undefined &&
          pokemons.map((pokemon) => (
            <CardContainer key={pokemon.name} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
};

export default PokemonsList;
