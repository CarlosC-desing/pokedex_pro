import type { Pokemon } from "../types/Pokemon";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (
  nameOrId: string | number,
): Promise<Pokemon> => {
  const response = await fetch(
    `${BASE_URL}/${nameOrId.toString().toLowerCase()}`,
  );

  if (!response.ok) {
    throw new Error("No se encontró el Pokémon");
  }

  return response.json();
};
