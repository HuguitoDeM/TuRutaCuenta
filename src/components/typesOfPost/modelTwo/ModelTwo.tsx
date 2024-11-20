import styled from "styled-components";
import MenuEdits from "../../menuEdit/MenuEdits";
import getData from "../../../services/getData";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
  font-family: "Playfair Display", serif;
  background-color: #f6f3ee;
`;

const MainContent = styled.div`
  margin-top: 2rem;
  color: #544541;
  display: flex;
  flex-direction: column;
  span {
    margin-left: 1rem;
    color: black;
  }
  h2 {
    margin: auto;
    font-size: 36px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
    }
  }
`;

const EditOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 2rem;
`;

const Imagenes = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 2rem;
  img {
    height: 280px;
    width: 30%;
    border: 2px solid black;
  }
  @media (max-width: 768px) {
    img {
      margin: auto;
      height: 280px;
      width: 90%;
    }
    flex-direction: column;
    gap: 10px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  h3 {
    margin: auto;
    font-size: 26px;
  }

  gap: 30px;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: justify;
    h3 {
      font-size: 22px;
    }
  }
`;
const TextBody = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  gap: 30px;
  p {
    font-family: "Montserrat", serif;
  }
`;
const LeftText = styled(TextBody)`
  flex-direction: column;
  gap: 30px;
  p {
    height: 100%;
    word-wrap: break-word;
    white-space: normal;
    width: 100%;
  }
`;
const RightText = styled(LeftText)``;

const LineaAbajo = styled.div`
  border-top: 2px solid #736d17;
  width: 70%;
  margin: auto;
`;

interface contentItemTop {
  img: string;
  img1: string;
  img2: string;
}
interface contentItemMiddle {
  subtitulo: string;
  textP: string;
  textP2: string;
  textP3: string;
  textP4: string;
}
interface Props {
  title: string;
  userId: string;
  contentTop: contentItemTop;
  contentMiddle: contentItemMiddle;
  Edit: () => void;
  Borrar: () => void;
}

const ModelTwo = ({
  title,
  userId,
  contentTop,
  contentMiddle,
  Edit,
  Borrar,
}: Props) => {
  const dataUser = getData();

  return (
    <PostContainer>
      {userId === dataUser.id && (
        <EditOption>
          <MenuEdits Edit={Edit} Borrar={Borrar} />
        </EditOption>
      )}

      <MainContent>
        <h2>{title.toUpperCase()}</h2>
        <Imagenes>
          <img src={contentTop.img} alt={title} />
          <img src={contentTop.img1} alt={title} />
          <img src={contentTop.img2} alt={title} />
        </Imagenes>
        <Text>
          <h3>{contentMiddle.subtitulo.toUpperCase()}</h3>
          <TextBody>
            <LeftText>
              <p>{contentMiddle.textP}</p>
              <p>{contentMiddle.textP2}</p>
            </LeftText>
            <RightText>
              <p>{contentMiddle.textP3}</p>
              <p>{contentMiddle.textP4}</p>
            </RightText>
          </TextBody>
          <LineaAbajo />
        </Text>
      </MainContent>
    </PostContainer>
  );
};

export default ModelTwo;
