import styled from "styled-components";
function About() {
  return (
    <Main>
      <AboutContainer className="container border">
        <Title>About</Title>
        <div className="border d-flex">
          <AboutThisProject>
            descripción del proyecto
            <div>Tecnologias usadas</div>
          </AboutThisProject>
          <MyProfile>
            Foto
            <div>Lista a git y ld</div>
          </MyProfile>
        </div>
        <div>FOOTER</div>
      </AboutContainer>
    </Main>
  );
}

export default About;

const Main = styled.div`
  height: 100vh;
`;
const Title = styled.h1`
  text-align: start;
  padding-left: 10px;
`;
const AboutContainer = styled.div`
  position: relative;
  top: 60px;
`;
const AboutThisProject = styled.div`
  width: 50%;
`;
const MyProfile = styled.div`
  width: 50%;
`;
