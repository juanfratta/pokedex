import React, { useEffect, useState } from 'react';
import Card from '../card';

const CardContainer = (props) => {
    const { name, url } = props.data
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {setPokemon(res) })
    }, [url])

    return (
      <Card name={name} pokemon={pokemon}/>
    );
};

export default CardContainer;