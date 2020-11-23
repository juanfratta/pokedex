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
                <div className="card-front-footer">
                  <p>
                    {pokemon.types.map((typeObj) => (
                      <span className="card-type" key={typeObj.type.name}>
                        {` ${typeObj.type.name} `}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-back">
              <div className="card-back-footer">
                <div>
                  <p>Weight: {pokemon.weight}</p>
                  <p>
                    Abilities:
                    {pokemon.abilities.map((typeObj) => (
                      <span key={typeObj.ability.name}>
                        {` ${typeObj.ability.name} `}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="card-back-footer-stats">
                  {pokemon.stats.map((typeObj) => (
                    <p
                      key={typeObj.stat.name}
                    >{`${typeObj.stat.name}: ${typeObj.base_stat}`}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
