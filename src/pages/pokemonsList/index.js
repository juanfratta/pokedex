import React from "react";
import { CardContainer, Logo, SelectLanguage } from "../../components";
import "./styles.scss";

const PokemonsList = (props) => {
  const { loading, error, pokemons } = props;
  return (
    <div className="main-container">
      <header className="logo-container">
        <Logo />
        <SelectLanguage />
      </header>
      <main className="pokemons-container">
        {error !== "" && <div>"HUBO UN ERROR : ("</div>}
        {loading && <h2 className="loading">LOADING...</h2>}
        {pokemons !== undefined &&
          pokemons.map((pokemon) => (
            <CardContainer key={pokemon.name} pokemon={pokemon} />
          ))}
      </main>
    </div>
  );
};

export default PokemonsList;
