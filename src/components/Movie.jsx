//Components
import Navbar from "./Navbar";
import ModalTrailer from "./ModalTrailer/ModalTrailer";
//Dependencies
import styled from "styled-components";
import axios from "axios";
import apiConfig from "../apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ReactStars from "react-rating-stars-component";
import VanillaTilt from "vanilla-tilt";

function Movie() {
  const [modalShow, setModalShow] = useState(false);
  const [movie, setMovie] = useState({});
  const [trailers, setTrailers] = useState([]);
  const { id: movieId } = useParams();
  const movieCard = useRef();

  useEffect(() => {
    getMovie();
    VanillaTilt.init(movieCard.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let starStylesValues = {
    size: 22,
    color: "rgb(255, 157, 0)",
    activeColor: "rgb(255, 157, 0)",
  };

  async function getMovie() {
    apiConfig.params = { ...apiConfig.params, append_to_response: "videos" };
    const { data } = await axios.get(`movie/${movieId}`, apiConfig);
    setMovie(data);
    setTrailers([...data.videos.results]);
  }

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
                <div className="d-flex justify-content-center flex-column">
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
                  <button id="btn-official-page" className="learn-more">
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
                  <div className="d-flex justify-content-center mt-5">
                    {trailers.length > 0 && (
                      <BtnTrailer onClick={() => setModalShow(true)}>
                        WATCH TRAILER
                      </BtnTrailer>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-none d-md-flex col-md-6 col-lg-4 h-100 centered"
              ref={movieCard}
            >
              <div
                className="movie-poster-image animate__animated animate__zoomIn data-tilt"
                style={{
                  background: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}) center center/cover`,
                  cursor: "pointer",
                }}
                onClick={() => setModalShow(true)}
              ></div>
            </div>
          </div>
        </div>
        {trailers.length > 0 && (
          <ModalTrailer
            show={modalShow}
            onHide={() => setModalShow(false)}
            movievideos={trailers}
          />
        )}
      </main>
    </>
  );
}
export default Movie;

const BtnTrailer = styled.button`
  width: 90%;
  color: #9b9b9b;
  font-size: 15px;
  padding: 0.7em 2.7em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid #c4302b;
  background: linear-gradient(
    to right,
    rgba(43, 43, 43, 0.744) 1%,
    transparent 40%,
    transparent 60%,
    rgba(43, 43, 43, 0.744) 100%
  );
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8), 0 0 9px 3px rgba(0, 0, 0, 0.8);
  &:hover {
    color: #f8625c;
    box-shadow: inset 0 0 10px rgba(227, 30, 8, 0.2),
      0 0 9px 3px rgba(227, 30, 8, 0.2);
  }

  &:active {
    transform: translateY(4px);
  }
  &::before {
    content: "";
    position: absolute;
    left: -4em;
    width: 4em;
    height: 100%;
    top: 0;
    transition: transform 0.4s ease-in-out;
    background: linear-gradient(
      to right,
      transparent 1%,
      rgba(227, 30, 8, 0.2) 40%,
      rgba(227, 30, 8, 0.2) 60%,
      transparent 100%
    );
  }
`;
