import styled from "styled-components";
import MenuEdits from "../../menuEdit/MenuEdits";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
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
`;
const LeftText = styled(TextBody)`
  flex-direction: column;
  gap: 30px;
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
interface Blog {
  id: string;
  title: string;
  userId: string;
  model: "2";
  contentTop: contentItemTop;
  contentMiddle: contentItemMiddle;
}

const ModelTwo = () => {
  return (
    <PostContainer>
      <EditOption>
        {
          //  <MenuEdits />
        }
        <span>fecha</span>
      </EditOption>
      <MainContent>
        <h2>ON THE BLOG</h2>
        <Imagenes>
          <img
            src="https://www.nacion.com/resizer/wX5C3jmGAL6HDgoYzkDEOlxSLkA=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/7TMBJGTD4RGRTNFCFDKGXUZQFQ.jpeg"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/OIP.KzsvvpP1QHS63WLjdBRSOwHaE8?rs=1&pid=ImgDetMain"
            alt=""
          />
          <img
            src="https://th.bing.com/th/id/OIP.KzsvvpP1QHS63WLjdBRSOwHaE8?rs=1&pid=ImgDetMain"
            alt=""
          />
        </Imagenes>
        <Text>
          <h3>Latest Trends in Photography</h3>
          <TextBody>
            <LeftText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.{" "}
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.{" "}
              </p>
            </LeftText>
            <RightText>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.{" "}
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.{" "}
              </p>
            </RightText>
          </TextBody>
          <LineaAbajo />
        </Text>
      </MainContent>
    </PostContainer>
  );
};

export default ModelTwo;
