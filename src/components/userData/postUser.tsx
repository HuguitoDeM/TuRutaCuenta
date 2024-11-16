import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Post = styled.div`
  background-color: white;
  margin-bottom: 15px;
  padding: 5px;
  img {
    transition: filter 0.4s ease;
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    img {
      filter: brightness(70%);
    }
  }
`;
const Title = styled.h2`
  color: black;
  border-radius: 0 0 5px 5px;
  font-size: 16px;
  text-align: center;

  @media (max-width: 610px) {
    font-size: 12px;

    border-radius: 0;
  }
  @media (max-width: 478px) {
    border-radius: 0 0 20px 20px;
  }
`;

interface props {
  imagenes: string[];
  titulos: string[];
  id: string[];
}

const PostUser = ({ titulos, imagenes, id }: props) => {
  const navigate = useNavigate();
  return (
    <>
      {titulos.map((element, index) => (
        <Post key={index} onClick={() => navigate(`/post/${id[index]}`)}>
          <img src={imagenes[index]} alt={element} />
          <Title>{element}</Title>
        </Post>
      ))}
    </>
  );
};

export default PostUser;
