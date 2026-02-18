import { useState, useEffect } from "react";
import type { Pokemon } from "../types/Pokemon";
import { toast } from "react-hot-toast";

export const useTeam = () => {
  const [team, setTeam] = useState<Pokemon[]>([]);

  useEffect(() => {
    const savedTeam = localStorage.getItem("myPokemonTeam");
    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myPokemonTeam", JSON.stringify(team));
  }, [team]);

  const addPokemon = (pokemon: Pokemon) => {
    if (team.length >= 6) {
      toast.error("¡Tu equipo está lleno! Libera uno antes.");
      return;
    }

    if (team.some((p) => p.id === pokemon.id)) {
      toast("¡Ya tienes a este Pokémon!", { icon: "😅" });
      return;
    }

    setTeam([...team, pokemon]);
    toast.success(`¡${pokemon.name} atrapado!`);
  };

  const removePokemon = (id: number) => {
    setTeam(team.filter((p) => p.id !== id));
    toast.error("Pokémon liberado", { icon: "👋" });
  };

  return { team, addPokemon, removePokemon };
};
