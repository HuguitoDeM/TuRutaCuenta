import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 15px;
    margin-left: 2rem;
  }
`;

const ContentBody = styled.div`
  display: flex;
  margin-top: 5rem;
`;
const FirstImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 30px;
  align-items: center;
  img {
    filter: grayscale(100%);
    width: 100%;
    height: 40%;
  }
`;

const ContentRight = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;

  gap: 2rem;
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 12px;
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
    width: 30%;
    height: 100%;
  }
`;
const ModelFour = () => {
  return (
    <PostContainer>
      <span>fecha</span>
      <ContentBody>
        <FirstImage>
          <img
            src="https://www.nacion.com/resizer/wX5C3jmGAL6HDgoYzkDEOlxSLkA=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/7TMBJGTD4RGRTNFCFDKGXUZQFQ.jpeg"
            alt=""
          />
          <h2>The World's Most Expensive Cities in 2023 to Live in</h2>
        </FirstImage>
        <ContentRight>
          <h2>Breaking News</h2>
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
          <TextCenter>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </TextCenter>
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
          <RightImages>
            <img
              src="https://www.nacion.com/resizer/wX5C3jmGAL6HDgoYzkDEOlxSLkA=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/7TMBJGTD4RGRTNFCFDKGXUZQFQ.jpeg"
              alt=""
            />
            <img
              src="https://www.nacion.com/resizer/wX5C3jmGAL6HDgoYzkDEOlxSLkA=/1440x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gruponacion/7TMBJGTD4RGRTNFCFDKGXUZQFQ.jpeg"
              alt=""
            />
          </RightImages>
        </ContentRight>
      </ContentBody>
    </PostContainer>
  );
};

export default ModelFour;
