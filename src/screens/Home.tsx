import styled from "styled-components";

import CardRotativas from "../components/cards/CardRotativas";
import { UseWindoWidth } from "../hooks/useWidthScreen";
import NavbarDestock from "../components/navbar/NavbarDestock";
import NavbarMobile from "../components/navbar/NavbarMobile";
import TextInTheMiddleHome from "../components/contentHome/TextInTheMiddle";

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

const MainContentHome = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;

  @media (max-width: 1440px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 2.5rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 2.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Home = () => {
  const WidthScreen = UseWindoWidth();

  return (
    <HomeContainer>
      <OverlayDiv>
        {WidthScreen > 769 ? <NavbarDestock NavbarHome={true} /> : ""}
        <MainContentHome>
          <TextInTheMiddleHome />
          <CardRotativas />
        </MainContentHome>
        {WidthScreen > 769 ? "" : <NavbarMobile />}
      </OverlayDiv>
    </HomeContainer>
  );
};
