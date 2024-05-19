import { FC, useState, useEffect } from "react";
import { Pokemon } from "../../types/pokemon";
import { getPokemonDetails } from "../../utils/api";
import "../../styles/details.scss";
import Image from "next/image";
import Button from "../Button/button";
import Link from "next/link";

const Details: FC<DetailsProps> = ({ name }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const data = await getPokemonDetails(name);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPokemonDetails();
  }, [name]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Pokémon not found.</div>;
  }

  return (
    <div className="detailsContainer">
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={250} // Adjust as needed
        height={250} // Adjust as needed
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
      <div className="info-section">
        <h3>Weight:</h3>
        <p>{pokemon.weight}</p>
      </div>
      {/* Add more sections for other Pokemon details as needed */}
      <Link href={`/pokemon`}>
        <Button btnText="Back"></Button>
      </Link>
    </div>
  );
};

export default Details;
