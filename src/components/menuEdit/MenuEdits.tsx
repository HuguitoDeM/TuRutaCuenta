import styled from "styled-components";
import OptionsMenu from "./OptionsMenu";

const MenuEditsContainer = styled.div`
  position: relative;
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 15px;
  cursor: pointer;
  transition: border-radius 0.2s;
`;

const DropdownContent = styled.div`
  display: none;
  font-size: 13px;
  position: absolute;
  z-index: 1;
  background-color: transparent;
  border: 1px solid #4caf50;
  border-radius: 0 15px 15px 15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  div:first-child:hover {
    border-radius: 0 13px 0 0;
  }

  div:last-child:hover {
    border-radius: 0 0 13px 13px;
  }
`;

const PasteButtonWrapper = styled.div`
  &:hover ${Button} {
    border-radius: 15px 15px 0 0;
  }

  &:hover ${DropdownContent} {
    display: block;
  }
`;

interface Props {
  Edit: () => void;
  Borrar: () => void;
}

const MenuEdits = ({ Edit, Borrar }: Props) => {
  return (
    <MenuEditsContainer>
      <PasteButtonWrapper>
        <Button>▼</Button>
        <DropdownContent>
          <OptionsMenu text="Editar" ActivarFuncion={Edit} edit={true} />
          <OptionsMenu text="Borrar" edit={false} ActivarFuncion={Borrar} />
        </DropdownContent>
      </PasteButtonWrapper>
    </MenuEditsContainer>
  );
};

export default MenuEdits;
