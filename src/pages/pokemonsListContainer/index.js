import React, { useEffect, useReducer } from "react";
import Paginate from "../../components/paginate";
import PokemonsList from "../pokemonsList";

const initialState = {
  loading: false,
  data: [],
  error: "",
  url: "https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_BEGIN":
      return {
        ...state,
        loading: true,
        data: [],
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        data: [],
        error: "Hubo un error",
      };
    case "SET_PREV_URL":
      return {
        ...state,
        url: action.payload,
      };
    case "SET_NEXT_URL":
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

const ListoPokemonContainer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(state.url)
      .then(dispatch({ type: "FETCH_BEGIN" }))
      .then((response) => response.json())
      .then((response) =>
        setTimeout(
          () => dispatch({ type: "FETCH_SUCCESS", payload: response }),
          500
        )
      )
      .catch((error) => ({ type: "FETCH_FAILURE" }));
  }, [state.url]);

  const getPrevPage = () =>
    dispatch({ type: "SET_PREV_URL", payload: state.data.previous });
  const getNextPage = () =>
    dispatch({ type: "SET_NEXT_URL", payload: state.data.next });

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

export default ListoPokemonContainer;
