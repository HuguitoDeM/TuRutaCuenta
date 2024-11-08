import styled from "styled-components";
import NavbarDesktop from "../navbar/NavbarDesktop";

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
`;
const FirstImage = styled.div`
  margin: auto;
  width: 98%;
  img {
    height: 200px;
    width: 100%;
  }
`;
const ContentBody = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  margin-top: 15px;
  gap: 30px;
`;
const SecondImage = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 69%;
  }
`;
const ThirdImage = styled.div`
  width: 100%;
  margin: auto;
  img {
    width: 100%;
    height: 250px;
  }
`;
const ContentRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const TextCenter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1.5rem;
  p {
    text-align: justify;
  }
`;
const DownText = styled(TextCenter)``;

const ModelThree = () => {
  return (
    <PostContainer>
      <NavbarDesktop login={true} user="Huguito" />
      <span>fecha</span>
      <h2>ADVENTURE TRAVEL</h2>
      <FirstImage>
        <img
          src="https://www.nacion.com/resizer/wX5C3jmGAL6HDgoYzkDEOlxSLkA=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/7TMBJGTD4RGRTNFCFDKGXUZQFQ.jpeg"
          alt=""
        />
      </FirstImage>
      <ContentBody>
        <SecondImage>
          <img
            src="https://www.nacion.com/resizer/wX5C3jmGAL6HDgoYzkDEOlxSLkA=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/7TMBJGTD4RGRTNFCFDKGXUZQFQ.jpeg"
            alt=""
          />
          <h2>Beach Destinations for Relaxation</h2>
        </SecondImage>
        <ContentRight>
          <TextCenter>
            <p>
              Writing effectively is an art. Start by using simple, everyday
              words people can easily understand. Be clear and direct to the
              point. Keep your thoughts flowing logically, and aim for brevity
              unless you’re writing in the long form. our ideas have a purpose
              so choose words that accurately express them. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Enim dolores quis
              laboriosam eaque dignissimos exercitationem possimus repudiandae
              voluptate veritatis perspiciatis repellat debitis corporis
              reiciendis magnam voluptatibus, at necessitatibus tenetur
              consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Maiores laborum beatae tenetur perspiciatis blanditiis,
              culpa magni laudantium. Dignissimos ad sit laudantium dolores quos
              quo, dolore obcaecati, cum ea, odit ipsam.
            </p>
            <p>
              Writing effectively is an art. Start by using simple, everyday
              words people can easily understand. Be clear and direct to the
              point. Keep your thoughts flowing logically, and aim for brevity
              unless you’re writing in the long form. our ideas have a purpose
              so choose words that accurately express them. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Enim dolores quis
              laboriosam eaque dignissimos exercitationem possimus repudiandae
              voluptate veritatis perspiciatis repellat debitis corporis
              reiciendis magnam voluptatibus, at necessitatibus tenetur
              consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Maiores laborum beatae tenetur perspiciatis blanditiis,
              culpa magni laudantium. Dignissimos ad sit laudantium dolores quos
              quo, dolore obcaecati, cum ea, odit ipsam.
            </p>
          </TextCenter>
          <ThirdImage>
            <img
              src="https://www.nacion.com/resizer/wX5C3jmGAL6HDgoYzkDEOlxSLkA=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/7TMBJGTD4RGRTNFCFDKGXUZQFQ.jpeg"
              alt=""
            />
          </ThirdImage>
          <DownText>
            <p>
              Writing effectively is an art. Start by using simple, everyday
              words people can easily understand. Be clear and direct to the
              point. Keep your thoughts flowing logically, and aim for brevity
              unless you’re writing in the long form. our ideas have a purpose
              so choose words that accurately express them. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Enim dolores quis
              laboriosam eaque dignissimos exercitationem possimus repudiandae
              voluptate veritatis perspiciatis repellat debitis corporis
              reiciendis magnam voluptatibus, at necessitatibus tenetur
              consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Maiores laborum beatae tenetur perspiciatis blanditiis,
              culpa magni laudantium. Dignissimos ad sit laudantium dolores quos
              quo, dolore obcaecati, cum ea, odit ipsam.
            </p>
            <p>
              Writing effectively is an art. Start by using simple, everyday
              words people can easily understand. Be clear and direct to the
              point. Keep your thoughts flowing logically, and aim for brevity
              unless you’re writing in the long form. our ideas have a purpose
              so choose words that accurately express them. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Enim dolores quis
              laboriosam eaque dignissimos exercitationem possimus repudiandae
              voluptate veritatis perspiciatis repellat debitis corporis
              reiciendis magnam voluptatibus, at necessitatibus tenetur
              consequuntur? Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Maiores laborum beatae tenetur perspiciatis blanditiis,
              culpa magni laudantium. Dignissimos ad sit laudantium dolores quos
              quo, dolore obcaecati, cum ea, odit ipsam.
            </p>
          </DownText>
        </ContentRight>
      </ContentBody>
    </PostContainer>
  );
};

export default ModelThree;
