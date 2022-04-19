//Components
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
//Dependencies
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "../apiConfig";

function SearchByTitle() {
  const [title, setTitle] = useState(1);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      apiConfig.params.query = title;
      apiConfig.params.page = page;
      const { data } = await axios.get("search/movie", apiConfig);
      if (page === 1) {
        setMovies(data.results);
      } else {
        setMovies((movies) => [...movies, ...data.results]);
      }
    };
    title && getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, page]);
  return (
    <>
      <ScrollToTop />
      <header>
        <Navbar />
      </header>
      <main className="container search_title_main">
        <div className="a">
          <div className="input_search rounded-pill border">
            <i className="fa-solid fa-magnifying-glass p-1"></i>
            <input
              type="text"
              className=" w-75 h-100 rounded-pill"
              id="search_movie"
              placeholder="search movie..."
              onChange={(event) => {
                setTitle(event.target.value);
                setPage(1);
              }}
            ></input>
          </div>
        </div>
        <MovieList movies={movies} setPage={setPage} page={page} />
      </main>
    </>
  );
}

export default SearchByTitle;
