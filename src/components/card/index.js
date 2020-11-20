import React from "react";
import Pokeball from "../pokeball";
import "./styles.scss";

const Card = (props) => {
  const { name, pokemon, loading } = props;
  console.log(props);
  return (
    <div className="card-container">
      {loading ? (
        <Pokeball className="pokeball" />
      ) : (
        <div className="card-inner">
          <div>
            <div className="card-front">
              <div>
                <h3>{name}</h3>
                <img
                  loadin="lazy"
                  src={pokemon.sprites.front_default}
                  alt={`front-${name}`}
                />
              </div>
            </div>
            <div className="card-back">
              <img
                loadin="lazy"
                src={pokemon.sprites.back_default}
                alt={`back-${name}`}
              />
              <div className="card-back-footer">
                <p>Weight: {pokemon.weight}</p>
                <p>
                  Type:
                  {pokemon.types.map((typeObj) => (
                    <span key={typeObj.type.name}>{typeObj.type.name} </span>
                  ))}
                </p>
                <p>
                  Abilities:
                  {pokemon.abilities.map((typeObj) => (
                    <span key={typeObj.ability.name}>
                      {typeObj.ability.name}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
