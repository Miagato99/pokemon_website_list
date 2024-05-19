"use client";
import { notFound, useParams } from "next/navigation";
import { Pokemon } from "@/types/pokemon";
import { getPokemonDetails } from "@/utils/api";
import { useState, useEffect } from "react";
import Details from "@/components/Details/details";
import RootLayout from "@/app/layout";

export default function PokemonDetailPage() {
  const params = useParams();
  const idString = params?.id as string;

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonData() {
      if (typeof idString !== "string") {
        console.log("error", idString);
        return notFound();
      }
      const id = parseInt(idString, 10);
      if (isNaN(id)) {
        return notFound();
      }

      try {
        const fetchedPokemon: Pokemon = await getPokemonDetails(id);
        setPokemon(fetchedPokemon);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
        notFound();
      }
    }

    fetchPokemonData();
  }, [idString]);

  if (isLoading) return <h1>Loading...</h1>;

  if (!pokemon) return notFound();

  return (
    <RootLayout>
      <Details pokemon={pokemon} />
    </RootLayout>
  );
}
