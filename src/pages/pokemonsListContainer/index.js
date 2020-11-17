import { React, useState, useEffect } from "react";
import Paginate from "../../components/paginate";
import PokemonsList from "../pokemonsList";

const PokemonsListContainer = () => {

  const [pokemons, setPokemons] = useState([])
  const [URL, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0")
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    fetch(URL)
      .then(setLoading(true))
      .then((res) => res.json())
      .then(data => {
        setTimeout(()=>{setLoading(false)},500)
        setPokemons(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)
      })
  }, [URL]);

  function getPrevPage() {
    setUrl(prevUrl)
  }

  function getNextPage() {
    setUrl(nextUrl)
  }
  return <div>
    <PokemonsList
    data={pokemons}
    loading={loading}
    />
    <Paginate
      getPrevPage={prevUrl ? getPrevPage : null}
      getNextPage={nextUrl ? getNextPage : null}
      />
  </div>;
};

export default PokemonsListContainer;
