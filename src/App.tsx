import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";

import { SearchBar } from "./components/pokemon/SearcBar";
import { PokemonCard } from "./components/pokemon/PokemonCard";
import { PokemonList } from "./components/pokemon/PokemonList";
import { usePokemon } from "./hooks/UsePokemon";
import { useTeam } from "./hooks/UseTeam";

function App() {
  const { pokemon, loading, searchPokemon } = usePokemon();
  const { team, addPokemon, removePokemon } = useTeam();

  return (
    <div className="container py-4">
      <Toaster position="top-right" />

      <header className="text-center mb-5 text-white">
        <h1 className="display-4 fw-bold">PokéPro Dashboard</h1>
        <p className="lead">Busca, captura y gestiona tu equipo ideal</p>
      </header>

      <main className="row justify-content-center g-4">
        <div className="col-md-4">
          <SearchBar onSearch={searchPokemon} isLoading={loading} />

          {pokemon && (
            <div className="mt-4 animate__animated animate__fadeIn">
              <PokemonCard pokemon={pokemon}>
                <button
                  className="btn btn-primary w-100 fw-bold mt-2"
                  onClick={() => addPokemon(pokemon)}
                  disabled={team.some((p) => p.id === pokemon.id)}
                >
                  {team.some((p) => p.id === pokemon.id)
                    ? "Ya en equipo ✅"
                    : "Capturar ⚡"}
                </button>
              </PokemonCard>
            </div>
          )}
        </div>

        <div className="col-md-8">
          <div className="p-3 border border-secondary rounded bg-dark bg-opacity-25 h-100">
            <h3 className="mb-4 text-white border-bottom pb-2">
              Mi Equipo{" "}
              <span className="badge bg-danger fs-6 align-middle">
                {team.length} / 6
              </span>
            </h3>

            <PokemonList team={team} onRemove={removePokemon} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
