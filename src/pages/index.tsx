import { useState, useEffect } from "react";
import Card from "@/components/Card/card";
import { PokemonListResult, PokemonListResponse } from "../types/pokemon";
import { getPokemonList } from "../utils/api";
import Button from "@/components/Button/button";
import Header from "@/components/Header/header";
import "../styles/globals.scss";
import Footer from "@/components/Footer/footer";

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonListResult[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const itemsPerPage = 20;

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const offset = (currentPage - 1) * itemsPerPage;
        const data: PokemonListResponse = await getPokemonList(
          itemsPerPage,
          offset
        );
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    }

    fetchPokemon();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Header />
      <main className="container">
        <h1>Welcome to Pokedex!</h1>
        <div className="pokemon-grid">
          {pokemonList.map((pokemon, index) => (
            <Card key={index} pokemon={pokemon} />
          ))}
        </div>

        <div className="pagination">
          <Button
            btnText="Previous"
            className="previous"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          />
          <div className="number-page">{currentPage}</div>
          <Button
            btnText="Next"
            className="next"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
