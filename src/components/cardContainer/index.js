import React, { useEffect, useState } from "react";
import { Card } from "../../components";

const CardContainer = (props) => {
  const { name, url } = props.pokemon;
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPokemon(res))
      .then(setTimeout(() => setLoading(false), 500))
      .catch((error) => setError(true));
  }, [url]);

  return <Card loading={loading} name={name} pokemon={pokemon} error={error} />;
};

export default CardContainer;
