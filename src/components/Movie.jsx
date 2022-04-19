//Components
import Navbar from "./Navbar";

//Dependencies
import axios from "axios";
import apiConfig from "../apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";

function Movie() {
  const [movie, setMovie] = useState({});

  const { id: movieId } = useParams();

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let starStylesValues = {
    size: 22,
    color: "rgb(255, 157, 0)",
    activeColor: "rgb(255, 157, 0)",
  };

  async function getMovie() {
    const { data } = await axios.get(`movie/${movieId}`, apiConfig);
    setMovie(data);
  }
  console.log(movie);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        id="MoviePage"
        style={{
          background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path}) center center/cover`,
        }}
      >
        <div className="movie-container m-0 ">
          <div className="row container">
            <div className="movie-description p-0 h-100 col-xs-12 col-md-6 col-lg-8">
              <div className=" h-100  animate__animated animate__bounceInLeft  py-4 px-0 centered">
                <div className="h-75 d-flex justify-content-center flex-column ">
                  <div className="title">
                    <span> {movie.title}</span>
                  </div>
                  {movie.vote_average && (
                    <>
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-decoration-underline fs-5 fs-mobile">
                          Rating:
                        </span>
                        <ReactStars
                          {...{
                            ...starStylesValues,
                            count: Math.ceil(movie.vote_average) / 2,
                          }}
                        />
                      </div>
                    </>
                  )}

                  <div className="mb-3">
                    <span className="text-decoration-underline me-2 fs-5 fs-mobile">
                      Date:
                    </span>{" "}
                    {movie.release_date}
                  </div>

                  <span className=" text-decoration-underline fs-5 overview">
                    Overview:
                  </span>
                  <p>{movie.overview}</p>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <a
                      className="button-text"
                      target="_blank"
                      href={movie.homepage}
                      rel="noreferrer"
                    >
                      Official page
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="movie-poster-image-container d-none d-md-flex col-md-6 col-lg-4 h-100 centered ">
              <div
                className="movie-poster-image animate__animated animate__zoomIn"
                style={{
                  background: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}) center center/cover`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Movie;
