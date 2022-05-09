import { useEffect } from "react";
import { useState } from "react";
import { axiosMovies } from "../services/api";

export function SemTransition() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [filmes, setFilmes] = useState([]);

  async function pesquisarFilme(query) {
    const { data } = await axiosMovies.get(`/search/movie`, {
      params: { page: 1, query },
    });
    setTimeout(() => {
      setFilmes(data.results);
    }, 300);
  }

  async function handleInput(event) {
    event.preventDefault();

    setInput(event.target.value);

    setFilter(event.target.value);
  }

  useEffect(() => {
    pesquisarFilme(filter);
  }, [filter]);

  return (
    <div>
      <h1>Sem transition</h1>
      <input
        type="text"
        label="pesquisar filme"
        value={input}
        onChange={handleInput}
      ></input>
      {filmes && filmes.map((movie) => <p key={movie.id}>{movie.title}</p>)}
    </div>
  );
}
