import type { Pokemon } from "../../types/Pokemon";
import type { ReactNode } from "react";

interface Props {
  pokemon: Pokemon;
  children?: ReactNode;
}

export const PokemonCard = ({ pokemon, children }: Props) => {
  return (
    <div className="card shadow-sm border-0 bg-dark text-white h-100">
      <div className="d-flex justify-content-center pt-3">
        <img
          style={{ width: "150px", height: "150px", objectFit: "contain" }}
          src={pokemon.sprites.other["official-artwork"].front_default}
          className="card-img-top"
          alt={pokemon.name}
        />
      </div>

      <div className="card-body text-center py-1">
        <h3 className="text-capitalize fw-bold">{pokemon.name}</h3>
        <span className="badge bg-danger mb-3">ID: #{pokemon.id}</span>

        <div className="d-flex justify-content-center gap-2 mb-3">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="badge rounded-pill bg-secondary text-capitalize"
            >
              {t.type.name}
            </span>
          ))}
        </div>

        <div className="mt-3 text-white mb-3">
          {pokemon.stats.map((s) => (
            <div
              key={s.stat.name}
              className="d-flex justify-content-between small border-bottom py-1 text-white"
            >
              <span className="text-capitalize">{s.stat.name}</span>
              <span className="fw-bold">{s.base_stat}</span>
            </div>
          ))}
        </div>

        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
};
