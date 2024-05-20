import { FC } from "react";
import Image from "next/image";
import Button from "../Button/button";
import Link from "next/link";
import { DetailsProps } from "./details-types";
import "../../styles/details.scss";

const Details: FC<DetailsProps> = ({ pokemon }) => {
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
          <h3>Types:</h3>
          <ul className="type-list">
            {pokemon.types.map((type) => (
              <li
                key={type.slot}
                className={`type ${type.type.name.toLowerCase()}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
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
        <Link href={`/pokemon`}>
          <Button btnText="Go Back" />
        </Link>
      </div>
    </div>
  );
};

export default Details;
