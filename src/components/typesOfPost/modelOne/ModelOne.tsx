import styled from "styled-components";
import MenuEdits from "../../menuEdit/MenuEdits";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 768px) {
    gap: 0rem;
  }
`;

const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  width: 40%;
  gap: 15px;
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
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
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  padding: 5px;
  border: 3px solid black;
  @media (max-width: 768px) {
    width: 95%;
    margin-bottom: 1rem;
  }
`;

const ContenidoArriba = styled.div`
  display: flex;
  width: 100%;
  heigth: 100%;
  @media (max-width: 768px) {
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
  width: 100%;
  @media (max-width: 768px) {
    transform: translateY(0px);
  }
`;
const ContenidoAbajo = styled(ContenidoArriba)``;
const SecondImage = styled(FirstImage)`
  margin-left: 15px;
  height: 300px;
  width: 40%;
  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 100%;
  }
`;
const ThirdImage = styled(SecondImage)`
  justify-content: flex-end;
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

interface ContentItem {
  subtitulo: string;
  textP: string;
  img: string;
}

interface Props {
  title: string;
  contentTop: ContentItem;
  contentMiddle: ContentItem;
  contentBottom: ContentItem;
  Edit: () => void;
}

const ModelOne = ({
  title,
  contentTop,
  contentMiddle,
  contentBottom,
  Edit,
}: Props) => {
  return (
    <PostContainer>
      <EditOption>
        <MenuEdits Edit={Edit} />
        <span>fecha</span>
      </EditOption>
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
