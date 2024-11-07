import styled from "styled-components";

const SearchResultContainer = styled.div`
  display: flex;
  width: 60%;
  box-sizing: border-box;
  heigth: 250px;
  padding: 30px;
  background-color: gray;
  margin-bottom: 20px;
  border-radius: 30px;
  justify-content: space-between;
  img {
    width: 480px;
    height: 175px;
    border-radius: 30px;
  }
  @media (max-width: 1024px) {
    img {
      margin-left: 0px;
      margin-right: 15px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
      margin-right: 0px;
    }
  }
  @media (max-width: 425px) {
    width: 90%;
    img {
      margin-bottom: 10px;
    }
  }
  &.color {
    background-color: #bea17c;
  }
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  margin-left: 30px;
  @media (max-width: 1024px) {
    margin-left: 0;
    gap: 20px;
  }
  &.color {
    color: white;
  }
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 13px;
`;

interface props {
  imagen: string;
  titulo: string;
  descripcion: string;
  id: string;
  color?: boolean;
}

const SearchResult = ({
  id,
  titulo,
  imagen,
  descripcion,
  color = false,
}: props) => {
  return (
    <SearchResultContainer key={id} className={color ? "color" : ""}>
      <img src={imagen} alt={titulo} />
      <Text className={color ? "color" : ""}>
        <Title>{titulo}</Title>
        <Description>{descripcion}</Description>
      </Text>
    </SearchResultContainer>
  );
};

export default SearchResult;
