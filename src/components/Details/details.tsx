import { FC } from "react";
import Image from "next/image";
import Button from "../Button/button";
import Link from "next/link"
import { DetailsProps } from "./details-types";
import "../../styles/details.scss"

const Details: FC<DetailsProps> = ({ pokemon }) => {
  return (
    <div className="detailsContainer">
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={250}
        height={250}
      />
      <h2 className="name">{pokemon.name}</h2>
      <div className="info-section">
        <h3>Types:</h3>
        <ul>
          {pokemon.types.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
          ))}
        </ul>
      </div>
      <div className="info-section">
        <h3>Abilities:</h3>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li key={ability.slot}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <div className="info-section">
        <h3>Base Experience:</h3>
        <p>{pokemon.baseExperience}</p>
      </div>
      <div className="info-section">
        <h3>Height:</h3>
        <p>{pokemon.height}</p>
      </div>
      <div className="infoSection">
        <h3>Weight:</h3>
        <p>{pokemon.weight}</p>
      </div>
      <div className="info-section">
        <h3>Stats:</h3>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
      <Link href={`/`}>
        <Button btnText="Go Back" />
      </Link>
    </div>
  );
};

export default Details;
