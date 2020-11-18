import React from "react";
import CardContainer from "../../components/cardContainer";
import LoadingPikachu from "../../components/loadingPikachu";
import "./styles.scss";


const PokemonsList = (props) => {

  const {loading, pokemons, error} = props

return (
    <div className="main-container">
      {error ? <div>"HUBO UN ERROR : ("</div> : null}
      {loading ? <LoadingPikachu /> : pokemons.map((pokemon) => (
        <CardContainer key={pokemon.name} pokemon={pokemon} />
      ))}

    </div>

  );
};

export default PokemonsList;
