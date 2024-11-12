import Masonry from "react-masonry-css";
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

const MasonryGrid = styled(Masonry)`
  display: flex;
  width: auto;
  margin-top: 2px;
  & > div {
    padding-left: 10px; /* Ajusta el padding según sea necesario */
    background-clip: padding-box;
  }
`;

const breakpointColumnsObj = {
  default: 6,
  1440: 5,
  924: 3,
  610: 2,
};

interface props {
  imagenes: string[];
  titulos: string[];
}

const PostsHome = ({ titulos, imagenes }: props) => {
  return (
    <>
      <MasonryGrid
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {titulos.map((element, index) => (
          <Post key={index}>
            <img src={imagenes[index]} alt={element} />
            <Title>{element}</Title>
          </Post>
        ))}
      </MasonryGrid>
    </>
  );
};
export default PostsHome;
