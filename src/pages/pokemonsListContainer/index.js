import React, { useEffect, useReducer } from "react";
import Paginate from "../../components/paginate";
import PokemonsList from "../pokemonsList";
import pokemonsReducer from "../../reducer/pokemonsReducer";
import {
  FETCH_BEGIN,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
} from "../../reducer/actions";

const initialState = {
  loading: false,
  data: [],
  error: "",
  url: "https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0",
};

const ListPokemonContainer = () => {
  const [state, dispatch] = useReducer(pokemonsReducer, initialState);

  useEffect(() => {
    fetch(state.url)
      .then(dispatch({ type: FETCH_BEGIN }))
      .then((response) => response.json())
      .then((response) =>
        setTimeout(
          () => dispatch({ type: FETCH_SUCCESS, payload: response }),
          500
        )
      )
      .catch((error) => ({ type: FETCH_FAILURE }));
  }, [state.url]);

  const getPrevPage = () =>
    dispatch({ type: SET_PREV_PAGE, payload: state.data.previous });
  const getNextPage = () =>
    dispatch({ type: SET_NEXT_PAGE, payload: state.data.next });

  return (
    <div>
      <PokemonsList
        loading={state.loading}
        pokemons={state.data.results}
        error={state.error}
      />

      <Paginate
        getPrevPage={state.data.previous ? getPrevPage : null}
        getNextPage={state.data.next ? getNextPage : null}
      />
    </div>
  );
};

export default ListPokemonContainer;
