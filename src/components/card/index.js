import React from 'react';
import './styles.scss'

const Card = (props) => {
    console.log(props)
    const { name, pokemon } = props
    const load = "Load"

    return (
        <div className="card">
            {pokemon === undefined ? <div>{load}</div> : <div><h3>{name}</h3>
                <img src={pokemon.sprites.front_default} alt={name} /></div>}
        </div>
    );
};

export default Card;