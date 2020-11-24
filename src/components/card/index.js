import React from "react";
import Pokeball from "../pokeball";
import Slider from "../slider";
import "./styles.scss";

const Card = (props) => {
  const { name, pokemon, loading } = props;
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
                    Type:
                    {pokemon.types.map((typeObj) => (
                      <label className="card-tag" key={typeObj.type.name}>
                        {` ${typeObj.type.name} `}
                      </label>
                    ))}
                  </p>

                  <p>
                    Weight:
                    <label>{` ${pokemon.weight}`}</label>
                  </p>
                  <p>
                    Abilities:
                    {pokemon.abilities.map((typeObj) => (
                      <span className="card-list" key={typeObj.ability.name}>
                        {` ${typeObj.ability.name} `}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-back">
              <h2>Stats</h2>
              <div className="card-back-info">
                {pokemon.stats.map((typeObj) => (
                  <Slider
                    key={typeObj.stat.name}
                    name={typeObj.stat.name}
                    percentage={typeObj.base_stat}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
