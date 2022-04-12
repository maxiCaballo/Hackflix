import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

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
          <div className="row">
            {movies.length > 0 ? (
              movies.map((movie) => {
                return movie.poster_path ? (
                  <img
                    key={movie.id * Math.random()}
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt="movie_image"
                    className="col-xs-12 col-sm-12 col-md-4 col-lg-3 list_img mb-3 border-radius-card"
                    onClick={() => navigate(`/movies/${movie.id}`)}
                  />
                ) : (
                  <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 list_img d-flex flex-column justify-content-evenly">
                    <p className="d-flex flex row justify-content-center">
                      <i className="fa-solid fa-triangle-exclamation mx-3 text-warning text-center"></i>
                      <span className="text-center">
                        There are no image to show
                      </span>
                    </p>
                    <p>{movie.title}</p>
                  </div>
                );
              })
            ) : (
              <p className="fs-5 text-center d-flex flex-column">
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
