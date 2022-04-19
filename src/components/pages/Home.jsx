//Components
import Header from "../Header";
import CHome from "../CHome";
import styled from "styled-components";
import Footer from "../Footer/Footer";
//Companies logos
import disney from "../../assets/CompaniesLogos/Disney.webp";
import hbo from "../../assets/CompaniesLogos/HBO.png";
import marvel from "../../assets/CompaniesLogos/marvel.png";
import paramount from "../../assets/CompaniesLogos/paramount.png";
import universal from "../../assets/CompaniesLogos/Universal-Logo.png";

export default function Home() {
  return (
    <>
      <Header />
      <CompaniesLogosContainer>
        <CompanyLogo>
          <a href="https://www.disneyplus.com/es-uy" target="blank">
            <img src={disney} alt="Disney" />
          </a>
        </CompanyLogo>
        <CompanyLogo>
          <a href="https://www.hbolatam.com/us" target="blank">
            <img src={hbo} alt="HBO" />
          </a>
        </CompanyLogo>
        <CompanyLogo>
          <a href="https://www.marvel.com/" target="blank">
            <img src={marvel} alt="Marvel" />
          </a>
        </CompanyLogo>
        <CompanyLogo>
          <a href="https://www.paramountplus.com/uy/" target="blank">
            <img src={paramount} alt="Paramount" />
          </a>
        </CompanyLogo>
        <CompanyLogo>
          <a href="https://universalplus.com/" target="blank">
            <img src={universal} alt="Warner bros" />
          </a>
        </CompanyLogo>
      </CompaniesLogosContainer>
      <main className="container mt-5">
        <CHome />
      </main>
      <Footer />
    </>
  );
}
const CompaniesLogosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  place-items: center;
  margin-top: 60px;
  gap: 10px;
  padding: 40px 15px 0;
`;
const CompanyLogo = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid #fffafa31;
  border-top: 2px solid #fffafa31;
  border-radius: 10px;
  transition: 0.6s;

  cursor: pointer;
  &:hover {
    transform: scale(1.05, 1.05);
    border-bottom: 2px solid #fffafadc;
    border-top: 2px solid #fffafadc;
  }
  img {
    max-width: 120px;
    object-fit: contain;
  }
  @media only screen and (max-width: 650px) {
    img {
      width: 80px;
    }
  }
  @media only screen and (max-width: 450px) {
    img {
      width: 50px;
    }
  }
`;
