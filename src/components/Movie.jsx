import Navbar from "./Navbar";
import axios from "axios";
import apiConfig from "../apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Movie() {
  const [movie, setMovie] = useState({});
  const { id: movieId } = useParams();

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMovie() {
    const { data } = await axios.get(`movie/${movieId}`, apiConfig);
    setMovie(data);
  }
  console.log(movie.poster_path);

  return (
    <>
      <header className="m-0">
        <Navbar />
      </header>
      <main
        id="MoviePage"
        style={{
          background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) center center/cover`,
        }}
      >
        <div className="movie-container">
          <div className="movie-description"></div>
          <div className="movie-poster-image-container centered">
            <div
              className="movie-poster-image"
              style={{
                background: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}) center center/cover`,
              }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Movie;
