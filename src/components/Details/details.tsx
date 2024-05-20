import { FC } from "react";
import Image from "next/image";
import Button from "../Button/button";
import Link from "next/link";
import { IDetailsProps } from "./details-types";
import "../../styles/details.scss";
import classNames from "classnames";

const Details: FC<IDetailsProps> = ({ pokemon }) => {
  return (
    <div className="details-container">
      <section className="image-section">
        <div className="image-wrapper">
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={250}
            height={250}
            className="pokemon-image"
          />
        </div>
        <h2 className="name">{pokemon.name}</h2>
      </section>

      <section className="info-section">
        <div className="info-item">
          <h3>Base Experience:</h3>
          <p>{pokemon.base_experience}</p>
        </div>

        <div className="info-item">
          <h3>Types:</h3>
          <ul className="type-list">
            {pokemon.types.map((type) => (
              <li
                key={type.slot}
                className={classNames("type", type.type.name.toLowerCase())}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="info-item">
          <h3>Height:</h3>
          <p>{pokemon.height / 10} m</p>
        </div>

        <div className="info-item">
          <h3>Weight:</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>

        <div className="info-item">
          <h3>Abilities:</h3>
          <ul>
            {pokemon.abilities.map((ability) => (
              <li key={ability.slot}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="info-item">
          <h3>Hidden Ability:</h3>
          <ul>
            {pokemon.abilities.some((ability) => ability.isHidden) ? (
              <ul>
                {pokemon.abilities.map((ability) =>
                  ability.isHidden ? (
                    <li key={ability.slot}>{ability.ability.name}</li>
                  ) : null
                )}
              </ul>
            ) : (
              <p>None</p>
            )}
          </ul>
        </div>

        <div className="info-item">
          <h3>Stats:</h3>
          <table className="stats-table">
            <tbody>
              {pokemon.stats.map((stat) => (
                <tr key={stat.stat.name}>
                  <td>{stat.stat.name}</td>
                  <td>{stat.base_stat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="button-container">
        <Link href={`/`}>
          <Button btnText="Home Page" className="previous page" />
        </Link>
      </div>
    </div>
  );
};

export default Details;
