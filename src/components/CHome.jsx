//Components
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import Carrousel from "./CarrouselByFilter/Carrousel";
//
import { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../apiConfig";

export default function CHome() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getAllGenres = async () => {
      const { data } = await axios.get("genre/movie/list", apiConfig);
      setGenres([...data.genres]);
    };
    getAllGenres();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <ScrollToTop />
      {genres.length ? (
        <>
          <Carrousel genre={genres[16]} />
          <Carrousel genre={genres[0]} />
          <Carrousel genre={genres[2]} />
          <Carrousel genre={genres[3]} />
          <Carrousel genre={genres[10]} />
        </>
      ) : null}
    </>
  );
}
