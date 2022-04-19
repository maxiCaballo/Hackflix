import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import axios from "axios";
import apiConfig from "../apiConfig";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [movies, setMovies] = useState([]);
  const imgSlider = [];
  const navigate = useNavigate();
  for (const movie of movies) {
    imgSlider.push("https://image.tmdb.org/t/p/original" + movie.backdrop_path);
  }
  let starStylesValues = {
    size: 22,
    color: "rgb(255, 157, 0)",
    activeColor: "rgb(255, 157, 0)",
  };

  useEffect(() => {
    const getMovies = async () => {
      apiConfig.params["vote_count.gte"] = 30;

      apiConfig.params.page = 1;
      const { data } = await axios.get("discover/movie", apiConfig);
      setMovies([...data.results]);
    };
    getMovies();
  }, []);

  movies.length = 5;
  const slider = (
    <>
      <header>
        <Navbar />
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={20000}
          organicArrows={true}
          className="slider"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              data-src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="image_centered img_slider_container d-flex flex-column align-items-center justify-content-end"
            >
              <div className="w-75 h-50 my-3 d-flex flex-column justify-content-between">
                <p
                  className=" fs-1 text-center animate__animated animate__backInDown"
                  onClick={() => navigate(`/movies/${movie.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  {movie.title}
                </p>
                <div className="h-25 row mb-5">
                  <span className="col-lg-6 fs-5 animate__animated animate__backInLeft centered">
                    Relase date : {movie.release_date}{" "}
                  </span>
                  <div className="col-lg-6 d-flex align-items-center justify-content-end p-0">
                    <span className="fs-5 animate__animated animate__backInLeft w-100 text-end centered">
                      Rating :
                      <ReactStars
                        classNames="ms-2"
                        {...{
                          ...starStylesValues,
                          count: Math.ceil(movie.vote_average) / 2,
                        }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AutoplaySlider>
      </header>
    </>
  );
  return <header className="mb-3 pb-3 ">{slider}</header>;
}

export default Header;
