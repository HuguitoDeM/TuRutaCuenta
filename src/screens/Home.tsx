import styled from "styled-components";
import Navbar from "../components/navbar/Navbar";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/pexels-francesco-ungaro-1525041.jpg");
`;
const OverlayDiv = styled.div`
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
const TextInTheMiddle = styled.div``;

export const Home = () => {
  return (
    <HomeContainer>
      <OverlayDiv>
        <Navbar NavbarHome={true} />
        <TextInTheMiddle>
          <h2>CUENTANOS</h2>
          <h2>TU EXPERIENCIA</h2>
        </TextInTheMiddle>
      </OverlayDiv>
    </HomeContainer>
  );
};
