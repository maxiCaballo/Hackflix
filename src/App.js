import { Routes, Route } from "react-router-dom";
//Pages
import Home from "./components/pages/Home";
import MoviePage from "./components/pages/MoviePage";
import MovieByTitle from "./components/pages/MovieByTitle";
//Css
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-title" element={<MovieByTitle />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
