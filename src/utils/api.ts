
import { Pokemon, PokemonListResponse } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Function to fetch the list of Pokémon with pagination
export async function getPokemonList(limit = 20, offset = 0): Promise<PokemonListResponse> {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon list'); // Explicit error handling
  }
  return await response.json();
}

// Function to fetch details for a specific Pokémon
export async function getPokemonDetails(nameOrId: string | number): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch Pokémon details'); // Explicit error handling
  }
  return await response.json();
}
