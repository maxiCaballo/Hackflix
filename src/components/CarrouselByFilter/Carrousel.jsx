import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import apiConfig from "../../apiConfig";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carrousel({ genre }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const newSearch = { ...apiConfig };
  newSearch.params = { ...newSearch.params, with_genres: genre.id };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    mobileFirst: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  useEffect(() => {
    const getAllMovies = async () => {
      const { data } = await axios.get("discover/movie", newSearch);
      setMovies([...data.results]);
    };
    getAllMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TitleGenre className="px-2 fs-3">{genre.name}</TitleGenre>
      <Slider {...settings}>
        {movies.length &&
          movies.map((movie) => (
            <ImgContainer
              key={movie.id}
              className="d-flex justify-content-center align-items-center"
              onClick={() => navigate(`/movies/${movie.id}`)}
              title={movie.title}
            >
              <ImgCarrousel
                key={movie.id * Math.random()}
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                alt="movie_image"
                className=" list_img border-radius-card movie-card"
              />
            </ImgContainer>
          ))}
      </Slider>
    </>
  );
}
const ImgCarrousel = styled.img`
  width: 100%;
  height: 100%;
`;
const TitleGenre = styled.p`
  color: #fffafa80;
  &::first-letter {
    color: #e50914;
  }
`;
const ImgContainer = styled.div`
  position: relative;

  &::after {
    display: flex;
    align-items: center;
    font-size: 2rem;
    justify-content: center;
    content: "${({ title }) => title}";
    position: absolute;
    height: 2px;
    background: #fffafa4e;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform-origin: 0% 100%;
    transform: scaleY(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    transition: 0.3s;
    background: linear-gradient(
      180deg,
      transparent 0,
      rgba(0, 0, 0, 0.1) 2%,
      #000
    );
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
  &:hover::after {
    transform: scaleY(1);
    opacity: 1;
  }
`;
