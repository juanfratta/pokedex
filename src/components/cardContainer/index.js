import React, { useEffect, useState } from "react";
import Card from "../card";

const CardContainer = (props) => {
  const { name, url } = props.pokemon;
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .then(setTimeout(() => setLoading(false), 500));
  }, [url]);

  return <Card loading={loading} name={name} pokemon={pokemon} />;
};

export default CardContainer;
