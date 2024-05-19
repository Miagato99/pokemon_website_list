import { Pokemon, PokemonListResponse } from '../types/pokemon';
const BASE_URL = 'https://pokeapi.co/api/v2';
// Function to fetch the list of Pokémon with pagination
export async function getPokemonList(limit = 20, offset = 0): Promise<PokemonListResponse> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon list'); 
  }
  return await response.json();
}

// Function to fetch details for a specific Pokémon
export async function getPokemonDetails(id: number): Promise<Pokemon> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}/`);
    if (!response.ok) {
      // More specific error handling
      if (response.status === 404) {
        throw new Error('Pokémon not found');
      } else {
        throw new Error('Failed to fetch Pokémon details');
      }
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokemon details:", error);
    throw error; 
  }
}
