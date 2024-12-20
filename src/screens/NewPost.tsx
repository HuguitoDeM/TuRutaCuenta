import styled from "styled-components";
import NavbarDesktop from "../components/navbar/NavbarDesktop";
import { useState } from "react";
import ModelTwoVersionEdit from "../components/typesOfPost/modelTwo/ModelTwoVersionEdit";
import ModelThreeVersionEdit from "../components/typesOfPost/modelThree/ModelThreeVersionEdit";
import ModelFourVersionEdit from "../components/typesOfPost/modelFour/ModelFourVersionEdit";
import { UseWindoWidth } from "../hooks/useWidthScreen";
import NavbarMobile from "../components/navbar/NavbarMobile";
import ModelOneVersionEdit from "../components/typesOfPost/modelOne/ModelOneVersionEdit";

const NewPostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const TiposDePublicaciones = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 2rem;
`;

const Opcion1 = styled.div`
  height: 10%;
  width: 10%;
  img {
    height: 100%;
    width: 100%;
  }
  border: 1px solid;
  &:hover {
    cursor: pointer;
  }
  &.seleccionado {
    transform: translateY(-10px);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    border: 2px solid;
  }
  @media (max-width: 768px) {
    height: 30%;
    width: 30%;
  }
`;
const Opcion2 = styled(Opcion1)``;
const Opcion3 = styled(Opcion1)``;
const Opcion4 = styled(Opcion3)``;

export const NewPost = () => {
  const [seleccionado, setSeleccionado] = useState("1");
  const WidthScreen = UseWindoWidth();

  const handleSeleccionado = (e: React.MouseEvent<HTMLDivElement>) => {
    setSeleccionado(e.currentTarget.id);
  };
  return (
    <NewPostContainer>
      {WidthScreen > 769 ? <NavbarDesktop /> : ""}

      <TiposDePublicaciones>
        <Opcion1
          id="1"
          className={seleccionado === "1" ? "seleccionado" : ""}
          onClick={handleSeleccionado}
        >
          <img src="/ModelOne.png" alt="" />
        </Opcion1>
        <Opcion2
          id="2"
          className={seleccionado === "2" ? "seleccionado" : ""}
          onClick={handleSeleccionado}
        >
          <img src="/ModelTwo.png" alt="" />
        </Opcion2>
        <Opcion3
          id="3"
          className={seleccionado === "3" ? "seleccionado" : ""}
          onClick={handleSeleccionado}
        >
          <img src="/ModelThree.png" alt="" />
        </Opcion3>
        <Opcion4
          id="4"
          className={seleccionado === "4" ? "seleccionado" : ""}
          onClick={handleSeleccionado}
        >
          <img src="/ModelFour.png" alt="" />
        </Opcion4>
      </TiposDePublicaciones>
      {seleccionado === "1" && <ModelOneVersionEdit newPost={true} />}
      {seleccionado === "2" && <ModelTwoVersionEdit newPost={true} />}
      {seleccionado === "3" && <ModelThreeVersionEdit newPost={true} />}
      {seleccionado === "4" && <ModelFourVersionEdit newPost={true} />}
      {WidthScreen > 769 ? "" : <NavbarMobile />}
    </NewPostContainer>
  );
};
