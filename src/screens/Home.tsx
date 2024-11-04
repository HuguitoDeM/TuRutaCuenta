import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";
import CardRotativas from "../components/cards/CardRotativas";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/pexels-francesco-ungaro-1525041.jpg");
`;
const OverlayDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0px,
    rgba(0, 0, 0, 0.5) 100px,
    rgba(85, 85, 85, 0) 100%
  );
`;
const TextInTheMiddle = styled.div`
  color: white;
  padding-left: 17rem;
  font-size: 4.5rem;
  margin: auto;
  .titleWithColor {
    color: #9fcfbb;
  }
  p {
    font-size: 2rem;
    text-align: justify;
  }
`;

const MainContentHome = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 6rem;
`;

export const Home = () => {
  return (
    <HomeContainer>
      <OverlayDiv>
        <Navbar NavbarHome={true} />
        <MainContentHome>
          <TextInTheMiddle>
            <h2>CUENTANOS</h2>
            <h2 className="titleWithColor">TUS EXPERIENCIAS</h2>
            <p>
              Esta aplicación permite a los usuarios compartir sus rutas y
              lugares favoritos con otros, creando una comunidad donde nadie se
              pierde de los mejores sitios para explorar. Desde experiencias
              personales hasta recomendaciones únicas, los usuarios pueden
              descubrir y añadir sus destinos preferidos para que todos puedan
              disfrutar y explorar.
            </p>
          </TextInTheMiddle>
          <CardRotativas />
        </MainContentHome>
      </OverlayDiv>
    </HomeContainer>
  );
};
