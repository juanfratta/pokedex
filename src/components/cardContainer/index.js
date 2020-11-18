import React, { useEffect, useState } from 'react';
import Card from '../card';

const CardContainer = (props) => {
    const { name, url } = props.pokemon
    const [pokemon, setPokemon] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setLoading("loading"))
            .then(res => {setPokemon(res) })
    }, [url])

    return (
      <Card loading={loading} name={name} pokemon={pokemon}/>
    );
};

export default CardContainer;