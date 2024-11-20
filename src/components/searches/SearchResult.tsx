import styled from "styled-components";
import { useEffect, useState } from "react";
import { useBlog } from "../../context/BlogDataProvider";
import { useNavigate } from "react-router-dom";
import { UseWindoWidth } from "../../hooks/useWidthScreen";

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    let truncated = text.slice(0, maxLength);

    const UltimoEspacioOPunto = Math.max(
      truncated.lastIndexOf(" "),
      truncated.lastIndexOf(".")
    );

    if (UltimoEspacioOPunto !== -1) {
      truncated = truncated.slice(0, UltimoEspacioOPunto);
    }

    return truncated + "...";
  }
  return text;
};

const SearchResultContainer = styled.div`
  display: flex;
  width: 60%;
  box-sizing: border-box;
  heigth: 500px;
  padding: 30px;
  background-color: gray;
  margin-bottom: 20px;
  border-radius: 30px;
  justify-content: space-between;
  img {
    width: 50%;
    height: 250px;
    border-radius: 30px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    img {
      width: 100%;
      margin-right: 0px;
    }
    align-items: center;
    gap: 20px;
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
    width: 100%;
  }
  &.color {
    color: white;
  }
  @media (max-width: 768px) {
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
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    height: 56%;
  }
`;

interface ContentItem {
  subtitulo: string;
  img: string;
  textP: string;
}

interface ContentItemTopModelTwo {
  img: string;
  img1: string;
  img2: string;
}

interface ContentItemMiddleModelTwo {
  subtitulo: string;
  textP: string;
  textP2: string;
  textP3: string;
  textP4: string;
}

interface Blog {
  id: string;
  title: string;
  img?: string;
  description?: string;
  userId: string;
  model: string;
  contentTop: ContentItem | ContentItemTopModelTwo;
  contentMiddle: ContentItem | ContentItemMiddleModelTwo;
  contentBottom?: ContentItem;
}

interface props {
  busqueda: string;
}

const SearchResult = ({ busqueda }: props) => {
  const windowWidth = UseWindoWidth();
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
                <Description>
                  {windowWidth >= 450
                    ? truncateText(post.contentMiddle.textP, 250)
                    : truncateText(post.contentMiddle.textP, 100)}
                </Description>
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
