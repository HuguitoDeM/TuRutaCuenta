import styled from "styled-components";
import MenuEdits from "../../menuEdit/MenuEdits";

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
  margin: auto;
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

const ModelThree = () => {
  return (
    <PostContainer>
      <EditOption>
        {
          //  <MenuEdits />
        }
        <span>fecha</span>
      </EditOption>

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
          <h3>Beach Destinations for Relaxation</h3>
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
