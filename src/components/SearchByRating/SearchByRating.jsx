//Components
import Rating from "../Rating";
import MovieList from "../MovieList";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
//
import { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../../apiConfig";

export default function CHome() {
  //Estado para abrir modal y otro para pasarle los datos al modal de la pelicula en cuestion
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      apiConfig.params["vote_average.gte"] = rating - 1;
      apiConfig.params["vote_average.lte"] = rating;
      apiConfig.params.page = page;
      const { data } = await axios.get("discover/movie", apiConfig);
      if (page === 1) setMovies(data.results);
      else {
        setMovies((movies) => [...movies, ...data.results]);
      }
    };
    const getAllMovies = async () => {
      apiConfig.params["vote_average.gte"] = rating;
      apiConfig.params.page = page;
      const { data } = await axios.get("discover/movie", apiConfig);
      setMovies((movies) => [...movies, ...data.results]);
    };
    if (rating !== 0) {
      getMovies();
    } else {
      getAllMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, page]);

  return (
    <>
      <ScrollToTop />
      <Rating setRating={setRating} setPage={setPage} />
      <MovieList movies={movies} page={page} setPage={setPage} />
    </>
  );
}
