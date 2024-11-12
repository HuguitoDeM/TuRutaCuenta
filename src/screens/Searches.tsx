import styled from "styled-components";
import SearchResult from "../components/searches/SearchResult";
import NavbarDesktop from "../components/navbar/NavbarDesktop";
import { useState } from "react";
import { UseWindoWidth } from "../hooks/useWidthScreen";
import NavbarMobile from "../components/navbar/NavbarMobile";

const SearchesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-image: url("https://th.bing.com/th/id/R.afb22a25fa2559cd391c6bda4203998a?rik=VWKkHA7g6Lhnhg&pid=ImgRaw&r=0");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Resultados = styled.div`
  display: flex;
  margin-top: 8rem;
  flex-direction: column;
  width: 100%;
  align-items: center;
  input {
    width: 600px;
    height: 40px;
    border-radius: 99px;
    border: 2px solid #736d17;
    padding-left: 20px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  input:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    input {
      width: 90%;
      border-radius: 0px;
    }
  }
`;

const Searches = () => {
  const [busqueda, setBusqueda] = useState("");

  const WidthScreen = UseWindoWidth();

  return (
    <SearchesContainer>
      {WidthScreen > 769 ? <NavbarDesktop color={true} /> : ""}
      <Resultados>
        <input
          placeholder="Blogs"
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <SearchResult busqueda={busqueda} />
      </Resultados>
      {WidthScreen > 769 ? "" : <NavbarMobile />}
    </SearchesContainer>
  );
};

export default Searches;
