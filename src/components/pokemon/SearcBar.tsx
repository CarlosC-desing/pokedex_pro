import { useState } from "react";
interface Props {
  onSearch: (name: string) => void;
  isLoading: boolean;
}
export const SearchBar = ({ onSearch, isLoading }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Ej: Pikachu o 25"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn btn-danger" disabled={isLoading}>
          {isLoading ? "Buscando..." : "Buscar"}
        </button>
      </div>
    </form>
  );
};
