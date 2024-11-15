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
  width: 50%;
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 13px;

  height: 53%;
  word-wrap: break-word;
  white-space: normal;

  display: -webkit-box;
  -webkit-line-clamp: 6; /* Cambia este número para la cantidad de líneas visibles */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    height: 56%;
  }
`;

interface contentItem {
  subtitulo: string;
  img: string;
  textP: string;
}

interface Blog {
  id: string;
  title: string;
  img: string;
  description: string;
  userId: string;
  model: string;
  contentTop: contentItem;
  contentMiddle: contentItem;
  contentBottom: contentItem;
}

interface props {
  busqueda: string;
}

const SearchResult = ({ busqueda }: props) => {
  const { blogData } = useBlog();
  const [resultados, setResultados] = useState<Blog[]>([]);
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
              <img src={post.contentTop.img} alt={post.title} />
              <Text className={index % 2 !== 0 ? "color" : ""}>
                <Title>{post.title}</Title>
                <Description>{post.contentMiddle.textP}</Description>
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
