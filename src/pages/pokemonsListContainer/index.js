import { React, useState, useEffect } from "react";
import PokemonsList from "../../components/pokemonsList";

const PokemonsListContainer = () => {
  let [pokemons, setPokemons] = useState([]);
  const API = "https://pokeapi.co/api/v2/pokemon/?limit=5";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);
  return <PokemonsList data={pokemons} />;
};

export default PokemonsListContainer;
