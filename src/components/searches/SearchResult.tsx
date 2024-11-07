import styled from "styled-components";

const SearchResultContainer = styled.div`
  display: flex;
  width: 60%;
  box-sizing: border-box;
  heigth: 250px;
  padding: 30px;
  background-color: gray;
  margin-top: 30px;
  border-radius: 30px;
  justify-content: space-between;
  img {
    width: 480px;
    height: 175px;
    border-radius: 30px;
    margin-left: 30px;
  }
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  margin-left: 30px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-left: 60px;
`;

const Description = styled.p`
  font-size: 12px;
  margin-left: 60px;
`;

interface props {
  busqueda: string;
}

const SearchResult = ({ busqueda }: props) => {
  return (
    <SearchResultContainer>
      <img
        src="https://i.pinimg.com/564x/2b/33/3a/2b333a2b558f3bed5025479c64b887e0.jpg"
        alt=""
      />
      <Text>
        <Title>Take a Rowing Lesson</Title>
        <Description>
          Learn the art of rowing like a Venetian from a local instructor while
          navigating the city's intricate network of canals. This immersive
          activity allows you to appreciate the city's beauty while engaging in
          a centuries-old tradition.
        </Description>
      </Text>
    </SearchResultContainer>
  );
};

export default SearchResult;
