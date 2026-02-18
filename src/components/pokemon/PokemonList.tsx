import type { Pokemon } from "../../types/Pokemon";
import { PokemonCard } from "./PokemonCard";

interface Props {
  team: Pokemon[];
  onRemove: (id: number) => void;
}

export const PokemonList = ({ team, onRemove }: Props) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {team.map((pokemon) => (
        <div key={pokemon.id} className="col">
          <PokemonCard pokemon={pokemon}>
            <button
              className="btn btn-outline-danger w-100 btn-sm"
              onClick={() => onRemove(pokemon.id)}
            >
              Liberar ❌
            </button>
          </PokemonCard>
        </div>
      ))}

      {team.length === 0 && (
        <div className="col-12 text-center text-muted mt-5">
          <h4>Tu equipo está vacío</h4>
          <p>¡Ve a buscar Pokémon para añadirlos!</p>
        </div>
      )}
    </div>
  );
};
