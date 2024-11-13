import styled from "styled-components";
import Icon from "../Icons/Icons";

const OptionsContainer = styled.div<{ $edit: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.164);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;
  text-decoration: none !important;

  svg {
    width: 17px;
    transition-duration: 0.3s;
    path {
      fill: white;
    }
  }

  &:hover {
    width: 120px;
    border-radius: 50px;
    transition-duration: 0.3s;
    background-color: rgb(255, 69, 69);
    align-items: center;

    svg {
      width: 20px;
      transition-duration: 0.3s;
      transform: translateY(60%);
      transform: rotate(360deg);
    }

    &::before {
      display: none;
      content: "${(props) => (props.$edit ? "Editar" : "Borrar")}";
      color: white;
      transition-duration: 0.3s;
      font-size: 2px;
    }

    &:hover::before {
      display: block;
      padding-right: 10px;
      font-size: 13px;
      opacity: 1;
      transform: translateY(0px);
      transition-duration: 0.3s;
    }
  }
`;

interface Props {
  text: string;
  edit: boolean;
  ActivarFuncion: () => void;
}

const OptionsMenu: React.FC<Props> = ({ text, edit, ActivarFuncion }) => {
  return (
    <OptionsContainer onClick={ActivarFuncion} $edit={edit}>
      <Icon name={text} />
    </OptionsContainer>
  );
};

export default OptionsMenu;
