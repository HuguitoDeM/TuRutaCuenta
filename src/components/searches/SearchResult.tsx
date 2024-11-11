import styled from "styled-components";
import getBlogs from "../../services/getBlogs";
import { useEffect, useState } from "react";

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

interface Blog {
  id: string;
  title: string;
  img: string;
  description: string;
  userId: string;
}

interface props {
  busqueda: string;
}

const SearchResult = ({ busqueda }: props) => {
  const [resultados, setResultados] = useState<Blog[]>([]);

  const obtenerData = async () => {
    try {
      const resultado: Blog[] | undefined = await getBlogs();
      if (resultado) {
        const blogs = Object.values(resultado);
        const filteredBlogs = blogs.filter(
          (item) =>
            item.title &&
            item.title.toLowerCase().includes(busqueda.toLowerCase())
        );
        setResultados(filteredBlogs);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };
  useEffect(() => {
    obtenerData();
  });

  return (
    <>
      {resultados ? (
        resultados.length > 0 ? (
          resultados.map((post, index) => (
            <SearchResultContainer
              key={post.title + index}
              className={index % 2 !== 0 ? "color" : ""}
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
        <span>Cargando...</span>
      )}
    </>
  );
};

export default SearchResult;
