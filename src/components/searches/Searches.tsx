import styled from "styled-components";
import SearchResult from "./SearchResult";
import NavbarDesktop from "../navbar/NavbarDesktop";

const SearchesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Resultados = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  width: 100%;
  align-items: center;
  input {
    width: 600px;
    height: 40px;
    border-radius: 99px;
    border: 2px solid #736d17;
    padding-left: 20px;
    font-size: 16px;
  }
`;

const ImagenFondo = styled.div`
  margin-top: 10px;
  height: 400px;
  width: 80%;
  font-size: 30px;
  color: white;

  &::before {
    content: "";

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("https://th.bing.com/th/id/R.afb22a25fa2559cd391c6bda4203998a?rik=VWKkHA7g6Lhnhg&pid=ImgRaw&r=0");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: brightness(70%);
    z-index: -1;
  }
`;

const Searches = () => {
  return (
    <SearchesContainer>
      <NavbarDesktop login={true} user="Huguito" navbarSearch={true} />
      <Resultados>
        <input placeholder="placeholder" />
        <ImagenFondo>
          <h3>titulo de los buscado </h3>
        </ImagenFondo>
        <SearchResult busqueda="paris" />
      </Resultados>
    </SearchesContainer>
  );
};

export default Searches;
