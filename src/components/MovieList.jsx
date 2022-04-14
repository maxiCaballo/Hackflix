import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function MovieList({ movies, setPage, page }) {
  const navigate = useNavigate();
  return (
    <section>
      <InfiniteScroll
        dataLength={movies.length} //This is important field to render the next data
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {
          <div className="movies-container">
            {movies.length > 0 ? (
              movies.map((movie) => {
                return movie.poster_path ? (
                  <ImgContainer
                    className="img_container"
                    title={movie.title}
                    onClick={() => navigate(`/movies/${movie.id}`)}
                  >
                    <img
                      key={movie.id * Math.random()}
                      src={
                        "https://image.tmdb.org/t/p/w500" + movie.poster_path
                      }
                      alt="movie_image"
                      className=" list_img border-radius-card movie-card"
                      width={270}
                      height={400}
                    />
                  </ImgContainer>
                ) : (
                  <div className=" list_img d-flex flex-column justify-content-evenly border border-radius-card bg-dark">
                    <p className="d-flex flex row justify-content-center">
                      <i className="fa-solid fa-triangle-exclamation mx-3 text-warning text-center"></i>
                      <span className="text-center">
                        Sorry there are no image to show
                      </span>
                    </p>
                    <p className="text-center">{movie.title}</p>
                  </div>
                );
              })
            ) : (
              <p className="fs-5 text-center d-flex flex-column border">
                <i className="fa-solid fa-triangle-exclamation mx-3 text-warning"></i>
                Sorry! there are no films to watch!!
                <i className="fa-solid fa-triangle-exclamation mx-3 text-warning"></i>
              </p>
            )}
          </div>
        }
      </InfiniteScroll>
    </section>
  );
}

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
    background: rgb(235, 39, 0);
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
