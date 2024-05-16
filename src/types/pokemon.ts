export interface PokemonListResult {
  name: string;
  url: string;
}
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListResult[];
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  isHidden: boolean;
  slot: number;
}
export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}
