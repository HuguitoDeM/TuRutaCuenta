import styled from "styled-components";
import MenuEdits from "../../menuEdit/MenuEdits";
import getData from "../../../services/getData";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  @import url("https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  color: #253439;
  background-color: #fffdf6;
`;

const EditOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-right: 2rem;
`;

const ContentBody = styled.div`
  display: flex;
  margin-top: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  p {
    font-family: "Poppins", sans-serif;
  }
`;
const FirstImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 35px;
  gap: 15px;
  align-items: center;
  img {
    filter: grayscale(100%);
    width: 100%;
    height: 40%;
  }
  @media (max-width: 768px) {
    width: 98%;
    margin: auto;
    padding: 0;
    margin-bottom: 2rem;
    h2 {
      font-size: 25px;
    }
  }
`;

const ContentRight = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;

  gap: 2rem;
  h2 {
    font-size: 35px;
  }
  p {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 22px;
    }
    width: 98%;
    margin: auto;
    p {
      text-align: justify;
    }
  }
`;
const TextCenter = styled.div`
  display: flex;
  gap: 15px;
`;

const RightImages = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  img {
    filter: grayscale(100%);
    width: 49.5%;
    height: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    gap: 10px;
    img {
      width: 48%;
      object-fit: cover;
    }
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
const ModelFour = ({
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
      <EditOption>
        {userId === dataUser.id && (
          <EditOption>
            <MenuEdits Edit={Edit} Borrar={Borrar} />
          </EditOption>
        )}
      </EditOption>
      <ContentBody>
        <FirstImage>
          <img src={contentTop.img} alt={title} />
          <h2>{title.toUpperCase()}</h2>
        </FirstImage>
        <ContentRight>
          <h2>{contentMiddle.subtitulo.toUpperCase()}</h2>
          <p>{contentMiddle.textP}</p>
          <TextCenter>
            <p>{contentMiddle.textP2}</p>
            <p>{contentMiddle.textP3}</p>
          </TextCenter>
          <p>{contentMiddle.textP4}</p>
          <RightImages>
            <img src={contentTop.img1} alt={title} />
            <img src={contentTop.img2} alt={title} />
          </RightImages>
        </ContentRight>
      </ContentBody>
    </PostContainer>
  );
};

export default ModelFour;
