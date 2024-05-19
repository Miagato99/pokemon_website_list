import { useState, useEffect } from 'react';
import Card from '@/components/Card/card';
import { PokemonListResult, PokemonListResponse } from '../types/pokemon';
import { getPokemonList } from '../utils/api';
import '../styles/globals.scss' // Import Global Stylesheet
import Button from '@/components/Button/button';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<PokemonListResult[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // For pagination
  const itemsPerPage = 20;

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const offset = (currentPage - 1) * itemsPerPage;
        const data: PokemonListResponse = await getPokemonList(itemsPerPage, offset);
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        // Handle the error, e.g., display an error message to the user
      }
    }

    fetchPokemon();
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <main>
      <h1>Pokémon List</h1>
      <div className="pokemon-grid">
        {pokemonList.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon} />
        ))}
      </div>

      {/* Pagination Controls (Simple Example) */}
      <div>
        <Button btnText="Previous pAGE"onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}/>
        <span>{currentPage}</span>
        <Button btnText ="Next"onClick={() => handlePageChange(currentPage + 1)}/>
      </div>
    </main>
  );
}