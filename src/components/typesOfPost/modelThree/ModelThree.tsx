import styled from "styled-components";
import MenuEdits from "../../menuEdit/MenuEdits";
import getData from "../../../services/getData";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 30px;
    margin: auto;
  }
  span {
    margin-top: 30px;
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 25px;
    }
  }
`;
const EditOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;
const FirstImage = styled.div`
  margin: auto;
  width: 98%;
  margin-top: 1rem;

  img {
    height: 200px;
    width: 100%;
  }
  @media (max-width: 768px) {
    img {
      height: 300px;
    }
  }
`;
const ContentBody = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  margin-top: 15px;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 0px;
    width: 100%;
    flex-direction: column;
  }
`;
const SecondImage = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 69%;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    margin: auto;
    width: 98%;
  }
`;
const ThirdImage = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 250px;
  }
  @media (max-width: 768px) {
    margin: auto;
    width: 98%;
  }
`;
const ContentRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 768px) {
    margin: auto;
    width: 98%;
  }
`;
const TextCenter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1.5rem;
  p {
    text-align: justify;
  }
  @media (max-width: 768px) {
    margin: auto;
    width: 98%;
    margin-bottom: 15px;
  }
`;
const DownText = styled(TextCenter)`
  @media (max-width: 768px) {
    margin-top: 15px;
  }
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

const ModelThree = ({
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
      <h2>{title}</h2>
      <FirstImage>
        <img src={contentTop.img} />
      </FirstImage>
      <ContentBody>
        <SecondImage>
          <img src={contentTop.img1} />
          <h3>{contentMiddle.subtitulo}</h3>
        </SecondImage>
        <ContentRight>
          <TextCenter>
            <p>{contentMiddle.textP}</p>
            <p>{contentMiddle.textP2}</p>
          </TextCenter>
          <ThirdImage>
            <img src={contentTop.img2} />
          </ThirdImage>
          <DownText>
            <p>{contentMiddle.textP3}</p>
            <p>{contentMiddle.textP4}</p>
          </DownText>
        </ContentRight>
      </ContentBody>
    </PostContainer>
  );
};

export default ModelThree;
