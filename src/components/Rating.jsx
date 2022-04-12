import ReactStars from "react-rating-stars-component";

function Rating({ setRating, setPage }) {
  const starStylesValues = {
    size: 25,
    count: 5,
    isHalf: false,
    value: 0,
    color: "#fff",
    activeColor: "rgb(255, 46, 46)",
    onChange: (value) => {
      setRating(value * 2);
      setPage(1);
    },
  };
  return (
    <>
      <div className="text-center fs-5 rating">
        (<i className="fa-solid fa-trophy text-warning"></i>)
        <span className="mx-3">Rating :</span>
        <ReactStars {...starStylesValues} />
      </div>
    </>
  );
}

export default Rating;
