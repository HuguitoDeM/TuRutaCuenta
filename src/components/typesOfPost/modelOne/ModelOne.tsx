import styled from "styled-components";
import MenuEdits from "../../menuEdit/MenuEdits";
import getData from "../../../services/getData";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 1024px) {
    gap: 0rem;
  }
`;

const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  width: 35%;
  gap: 15px;
  margin-left: 15px;
  margin-right: 15px;
  h2 {
    font-size: 32px;
    word-wrap: break-word;
    white-space: normal;
  }
  p {
    height: 100%;
    word-wrap: break-word;
    white-space: normal;
    width: 100%;
  }
  @media (max-width: 1024px) {
    width: 100%;
    font-size: 15px;
    gap: 0px;
    h2 {
      margin: auto;
      margin-bottom: 10px;
    }
  }
`;

const MainTitle = styled.div`
  display: flex;
  font-size: 32px;
  width: 100%;
  align-items: center;

  h2 {
    margin: auto;
  }
  span {
    font-size: 12px;
    margin-right: 15px;
  }
  @media (max-width: 1024px) {
    margin-top: 2rem;
    font-size: 25px;
    flex-direction: column;
  }
`;
const EditOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 2rem;
`;
const FirstImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 15px;
  margin-right: 15px;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  border: 3px solid black;
  @media (max-width: 1024px) {
    width: 95%;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
`;

const ContenidoArriba = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }
`;
const TextRight = styled(TextLeft)``;
const TextCenter = styled(TextLeft)`
  transform: translateY(-30px);
  width: 60%;
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 1024px) {
    transform: translateY(0px);
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;
const ContenidoAbajo = styled(ContenidoArriba)``;
const SecondImage = styled(FirstImage)`
  margin-left: 15px;
  max-height: 400px;

  width: 100%;
  img {
    height: 400px;
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin-left: 0px;
    width: 100%;
    height: 400px;
  }
`;
const ThirdImage = styled(SecondImage)`
  justify-content: flex-end;
  margin-right: 15px;
  @media (max-width: 1024px) {
    margin-right: 0px;
  }
`;

interface ContentItem {
  subtitulo: string;
  textP: string;
  img: string;
}

interface Props {
  userId: string;
  title: string;
  contentTop: ContentItem;
  contentMiddle: ContentItem;
  contentBottom: ContentItem;
  Edit: () => void;
  Borrar: () => void;
}

const ModelOne = ({
  title,
  contentTop,
  contentMiddle,
  contentBottom,
  Edit,
  Borrar,
  userId,
}: Props) => {
  const dataUser = getData();

  return (
    <PostContainer>
      {userId === dataUser.id && (
        <EditOption>
          <MenuEdits Edit={Edit} Borrar={Borrar} />
        </EditOption>
      )}
      <MainTitle>
        <h2>{title}</h2>
      </MainTitle>
      <ContenidoArriba>
        <TextLeft>
          <h2>{contentTop.subtitulo}</h2>
          <p>{contentTop.textP}</p>
        </TextLeft>

        <FirstImage>
          <img src={contentTop.img} alt={contentTop.subtitulo} />
        </FirstImage>
        <TextRight>
          <h2>{contentMiddle.subtitulo}</h2>
          <p>{contentMiddle.textP}</p>
        </TextRight>
      </ContenidoArriba>
      <ContenidoAbajo>
        <SecondImage>
          <img src={contentMiddle.img} alt={contentMiddle.subtitulo} />
        </SecondImage>
        <TextCenter>
          <h2>{contentBottom.subtitulo}</h2>
          <p>{contentBottom.textP}</p>
        </TextCenter>
        <ThirdImage>
          <img src={contentBottom.img} alt={contentBottom.subtitulo} />
        </ThirdImage>
      </ContenidoAbajo>
    </PostContainer>
  );
};

export default ModelOne;
