import styled from "styled-components";
import { useEffect, useState } from "react";
import { useBlog } from "../../context/BlogDataProvider";
import { useNavigate } from "react-router-dom";

const SearchResultContainer = styled.div`
  display: flex;
  width: 60%;
  box-sizing: border-box;
  heigth: 250px;
  padding: 30px;
  background-color: gray;
  margin-bottom: 20px;
  border-radius: 30px;
  justify-content: space-between;
  img {
    width: 480px;
    height: 175px;
    border-radius: 30px;
  }
  @media (max-width: 1024px) {
    img {
      margin-left: 0px;
      margin-right: 15px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    img {
      width: 100%;
      margin-right: 0px;
    }
  }
  @media (max-width: 425px) {
    width: 90%;
    img {
      margin-bottom: 10px;
    }
  }
  &.color {
    background-color: #bea17c;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 40px;
  margin-left: 30px;
  @media (max-width: 1024px) {
    margin-left: 0;
    gap: 20px;
  }
  &.color {
    color: white;
  }
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 13px;
`;

interface ResultadosBlogs {
  id: string;
  title: string;
  img: string;
  description: string;
  userId: string;
  model: string;
}

interface props {
  busqueda: string;
}

const SearchResult = ({ busqueda }: props) => {
  const { blogData } = useBlog();
  const [resultados, setResultados] = useState<ResultadosBlogs[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (blogData && busqueda !== "") {
      const filteredBlogs = Object.values(blogData).filter(
        (item) =>
          item.title &&
          item.title.toLowerCase().includes(busqueda.toLowerCase())
      );
      setResultados(filteredBlogs);
    }
  }, [blogData, busqueda]);

  return (
    <>
      {resultados && busqueda !== "" ? (
        resultados.length > 0 ? (
          resultados.map((post, index) => (
            <SearchResultContainer
              key={post.title + index}
              className={index % 2 !== 0 ? "color" : ""}
              onClick={() => navigate(`/post/${post.id}`)}
            >
              <img src={post.img} alt={post.title} />
              <Text className={index % 2 !== 0 ? "color" : ""}>
                <Title>{post.title}</Title>
                <Description>{post.description}</Description>
              </Text>
            </SearchResultContainer>
          ))
        ) : (
          <span>No se encontraron destinos.</span>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default SearchResult;
