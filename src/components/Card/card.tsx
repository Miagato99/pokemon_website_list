import Link from "next/link";
import "../../styles/card.scss";
import Image from "next/image";
import Button from "../Button/button";
import { FC } from "react";
import { ICardProps } from "./card-types";

const Card: FC<ICardProps> = ({ pokemon }) => {
  const { name, url } = pokemon;
  const pokemonId = url.split("/")[url.split("/").length - 2];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <div className="card">
      <Image src={imageUrl} alt={name} width={150} height={150} />
      <h3 className="name">{name}</h3>
      <Link
        href={`/pokemon/${pokemonId}/page`}
        aria-label={`View details for ${name}`}
      >
        <Button btnText="View Details" />
      </Link>
    </div>
  );
};

export default Card;
