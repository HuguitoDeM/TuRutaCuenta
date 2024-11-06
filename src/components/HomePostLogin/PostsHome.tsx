import styled from "styled-components";

const Post = styled.div`
  img {
    width: 100%;
    border-radius: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.h2`
  color: black;
  background-color: transparent;
  border-radius: 5px;
  font-size: 1.3rem;
  text-align: center;
  @media (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

interface props {
  imagenes: string[];
  titulos: string[];
}

const PostsHome = ({ titulos, imagenes }: props) => {
  return (
    <>
      {titulos.map((element, index) => (
        <Post key={index}>
          <img src={imagenes[index]} alt={element} />
          <Title>{element}</Title>
        </Post>
      ))}
    </>
  );
};
export default PostsHome;
