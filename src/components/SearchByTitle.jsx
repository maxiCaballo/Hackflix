import MovieList from "./MovieList";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from "../apiConfig";
import DropDown from "./DropDown";

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
      <header>
        <div className=" d-flex justify-content-between header_firstChild">
          <div className="mx-5">
            <a href="/">
              <span className="fs-3 text-danger">
                <i className="fa-solid fa-clapperboard text-light fs-4"></i>
                Hackflix
              </span>
            </a>
          </div>
          <div className="mx-5">
            <DropDown />
          </div>
        </div>
      </header>
      <main className="container search_title_main">
        <div className="input_search rounded-pill">
          <i className="fa-solid fa-magnifying-glass p-1"></i>
          <input
            type="text"
            className=" w-100 h-100 rounded-pill"
            id="search_movie"
            placeholder="search movie..."
            onChange={(event) => {
              setTitle(event.target.value);
              setPage(1);
            }}
          ></input>
        </div>
        <MovieList movies={movies} setPage={setPage} page={page} />
      </main>
    </>
  );
}

export default SearchByTitle;
