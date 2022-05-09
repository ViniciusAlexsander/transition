import { useTransition, useEffect } from "react";
import { useState } from "react";
import { axiosMovies } from "../services/api";

export function Transition() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [isPending, startTransition] = useTransition();

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

    startTransition(() => {
      setFilter(event.target.value);
    });
  }

  useEffect(() => {
    pesquisarFilme(filter);
  }, [filter]);

  return (
    <div>
      <h1>Com transition</h1>
      <input type="text" value={input} onChange={handleInput}></input>
      {isPending ? (
        <p> carregando </p>
      ) : (
        filmes &&
        filmes.map((movie) => <p key={movie.id}>{movie.original_title}</p>)
      )}
    </div>
  );
}
