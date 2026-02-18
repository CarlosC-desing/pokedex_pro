import { useState, useEffect } from "react";
import type { Pokemon } from "../types/Pokemon";
import { toast } from "react-hot-toast";

export const useTeam = () => {
  // CORRECCIÓN: Leemos el localStorage DENTRO del useState.
  // Esto solo se ejecuta una vez al principio, antes de renderizar nada.
  const [team, setTeam] = useState<Pokemon[]>(() => {
    const savedTeam = localStorage.getItem("myPokemonTeam");
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  // Ya no necesitamos el useEffect de "Cargar" porque lo hicimos arriba ⬆️

  // Este useEffect solo sirve para GUARDAR cuando haya cambios
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
