import React from 'react';
import './styles.scss'

const Card = (props) => {
    const { name, pokemon } = props
    const load = "Load"

    return (
        <div className="card">
            {pokemon === undefined ? <div>{load}</div> : <div><h3>{name}</h3>
                <img loadin="lazy" src={pokemon.sprites.front_default} alt={`front-${name}`} />
                <img loadin="lazy" src={pokemon.sprites.back_default} alt={`back-${name}`} /></div>}
        </div>
    );
};

export default Card;