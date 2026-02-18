import { useState } from "react";
import type { Pokemon } from "../types/Pokemon";
import { getPokemon } from "../services/PokemonService";
import { toast } from "react-hot-toast";

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  const searchPokemon = async (nameOrId: string) => {
    if (!nameOrId) return;

    setLoading(true);
    try {
      const data = await getPokemon(nameOrId);
      setPokemon(data);
    } catch (error) {
      setPokemon(null);
      toast.error("¡Ese Pokémon no existe!");
    } finally {
      setLoading(false);
    }
  };

  return { pokemon, loading, searchPokemon };
};
