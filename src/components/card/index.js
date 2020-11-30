import React from "react";
import i18next from "i18next";
import { withNamespaces } from "react-i18next";
import Pokeball from "../pokeball";
import Slider from "../slider";
import "./styles.scss";

const Card = (props) => {
  const { name, pokemon, loading, error } = props;
  return (
    <div className="card-container">
      {loading && <Pokeball className="pokeball" />}
      {loading === false && pokemon && (
        <div className="card-inner">
          <div>
            <div className="card-front">
              <div>
                <h3>{name}</h3>
                <img
                  loading="lazy"
                  src={pokemon.sprites.front_default}
                  alt={`front-${name}`}
                />
                <div className="card-front-footer">
                  <p>
                    {i18next.t("type")}:
                    {pokemon.types.map((typeObj) => (
                      <label className="card-tag" key={typeObj.type.name}>
                        {` ${typeObj.type.name} `}
                      </label>
                    ))}
                  </p>
                  <p>
                    {i18next.t("weight")}:<label>{` ${pokemon.weight}`}</label>
                  </p>
                  <p>
                    {i18next.t("abilities")}:
                    {pokemon.abilities.map((typeObj) => (
                      <span key={typeObj.ability.name}>
                        {` ${typeObj.ability.name} `}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <div className="card-back">
              <h2>{i18next.t("stats")}</h2>
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
      {error && <div>Error 😟"</div>}
    </div>
  );
};

export default withNamespaces()(Card);
