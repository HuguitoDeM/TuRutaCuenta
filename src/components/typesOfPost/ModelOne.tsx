import styled from "styled-components";
import NavbarDesktop from "../navbar/NavbarDesktop";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  width: 40%;
  gap: 15px;
  margin-left: 15px;
  margin-right: 15px;
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
    margin-left: 15px;
  }
`;
const FirstImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 300px;
  }
  padding: 5px;
  border: 3px solid black;
`;

const ContenidoArriba = styled.div`
  display: flex;
  width: 100%;
  heigth: 100%;
`;
const TextRight = styled(TextLeft)``;
const TextCenter = styled(TextLeft)`
  transform: translateY(-30px);
  width: 100%;
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
`;
const ThirdImage = styled(SecondImage)`
  justify-content: flex-end;
  margin-right: 15px;
`;

const ModelOne = () => {
  return (
    <PostContainer>
      <NavbarDesktop login={true} user="Huguito" />
      <MainTitle>
        <span>fecha</span>
        <h2>Read it on our Blog</h2>
      </MainTitle>
      <ContenidoArriba>
        <TextLeft>
          <h2>The Ultimate Guide to Writing</h2>
          <p>
            Writing effectively is an art. Start by using simple, everyday words
            people can easily understand. Be clear and direct to the point. Keep
            your thoughts flowing logically, and aim for brevity unless you’re
            writing in the long form. our ideas have a purpose so choose words
            that accurately express them. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Enim dolores quis laboriosam eaque
            dignissimos exercitationem possimus repudiandae voluptate veritatis
            perspiciatis repellat debitis corporis reiciendis magnam
            voluptatibus, at necessitatibus tenetur consequuntur? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Maiores laborum beatae
            tenetur perspiciatis blanditiis, culpa magni laudantium. Dignissimos
            ad sit laudantium dolores quos quo, dolore obcaecati, cum ea, odit
            ipsam.
          </p>
        </TextLeft>

        <FirstImage>
          <img
            src="https://thumbs.dreamstime.com/b/picture-icon-vector-photo-gallery-icon-symbol-picture-icon-vector-photo-gallery-icon-symbol-279330833.jpg"
            alt=""
          />
        </FirstImage>
        <TextRight>
          <h2>The Ultimate Guide to Writing</h2>
          <p>
            Writing effectively is an art. Start by using simple, everyday words
            people can easily understand. Be clear and direct to the point. Keep
            your thoughts flowing logically, and aim for brevity unless you’re
            writing in the long form. our ideas have a purpose so choose words
            that accurately express them. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Enim dolores quis laboriosam eaque
            dignissimos exercitationem possimus repudiandae voluptate veritatis
            perspiciatis repellat debitis corporis reiciendis magnam
            voluptatibus, at necessitatibus tenetur consequuntur? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Maiores laborum beatae
            tenetur perspiciatis blanditiis, culpa magni laudantium. Dignissimos
            ad sit laudantium dolores quos quo, dolore obcaecati, cum ea, odit
            ipsam.
          </p>
        </TextRight>
      </ContenidoArriba>
      <ContenidoAbajo>
        <SecondImage>
          <img
            src="https://thumbs.dreamstime.com/b/picture-icon-vector-photo-gallery-icon-symbol-picture-icon-vector-photo-gallery-icon-symbol-279330833.jpg"
            alt=""
          />
        </SecondImage>
        <TextCenter>
          <h2>The Ultimate Guide to Writing</h2>
          <p>
            Writing effectively is an art. Start by using simple, everyday words
            people can easily understand. Be clear and direct to the point. Keep
            your thoughts flowing logically, and aim for brevity unless you’re
            writing in the long form. our ideas have a purpose so choose words
            that accurately express them. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Enim dolores quis laboriosam eaque
            dignissimos exercitationem possimus repudiandae voluptate veritatis
            perspiciatis repellat debitis corporis reiciendis magnam
            voluptatibus, at necessitatibus tenetur consequuntur? Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Maiores laborum beatae
            tenetur perspiciatis blanditiis, culpa magni laudantium. Dignissimos
            ad sit laudantium dolores quos quo, dolore obcaecati, cum ea, odit
            ipsam.
          </p>
        </TextCenter>
        <ThirdImage>
          <img
            src="https://thumbs.dreamstime.com/b/picture-icon-vector-photo-gallery-icon-symbol-picture-icon-vector-photo-gallery-icon-symbol-279330833.jpg"
            alt=""
          />
        </ThirdImage>
      </ContenidoAbajo>
    </PostContainer>
  );
};

export default ModelOne;
