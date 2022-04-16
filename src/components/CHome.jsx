import MovieList from "./MovieList";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
//
import { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../apiConfig";

export default function CHome() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getAllMovies = async () => {
      apiConfig.params.page = page;
      const { data } = await axios.get("discover/movie", apiConfig);
      setMovies((movies) => [...movies, ...data.results]);
    };
    getAllMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <ScrollToTop />
      <MovieList movies={movies} page={page} setPage={setPage} />
    </>
  );
}
