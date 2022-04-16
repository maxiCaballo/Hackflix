import SearchByRating from "../SearchByRating/SearchByRating";
import NavBar from "../Navbar";
import styled from "styled-components";

function MoviesByRating() {
  return (
    <>
      <Header>
        <NavBar className="mt-5" />
      </Header>
      <main className="container">
        <SearchByRating />
      </main>
    </>
  );
}
const Header = styled.header`
  position: absolute;
  top: 0;
`;

export default MoviesByRating;
