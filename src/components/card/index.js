import React from "react";
import i18next from "i18next";
import { withNamespaces } from "react-i18next";
import { Pokeball, Slider } from "../../components";
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
                <header>
                  <h3>{name}</h3>
                </header>
                <img
                  loading="lazy"
                  src={pokemon.sprites.front_default}
                  alt={`front-${name}`}
                />

                <footer className="card-front-footer">
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
                </footer>
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
