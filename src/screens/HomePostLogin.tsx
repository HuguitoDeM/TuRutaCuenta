import styled from "styled-components";
import PostsHome from "../components/homePostLogin/PostsHome";
import NavbarDesktop from "../components/navbar/NavbarDesktop";
import { UseWindoWidth } from "../hooks/useWidthScreen";
import NavbarMobile from "../components/navbar/NavbarMobile";
import { useEffect, useState } from "react";
import getBlogs from "../services/getBlogs";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-x: hidden;
  background-color: #a7a7a7;
`;
const MainContent = styled.div`
  margin-top: 5px;
  column-count: 6;

  padding-left: 20px;
  padding-right: 10px;
  @media (max-width: 1440px) {
    column-count: 3;
  }
  @media (max-width: 924px) {
    column-count: 2;
  }
`;

interface Blog {
  id: string;
  title: string;
  img: string;
  description: string;
  userId: string;
}

const HomePostLogin = () => {
  const WidthScreen = UseWindoWidth();

  const [titles, setTitles] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const obtenerData = async () => {
    try {
      const resultado: Blog[] | undefined = await getBlogs();
      if (resultado) {
        const blogs = Object.values(resultado);

        const imagesArray = blogs
          .filter((item) => item.img !== undefined)
          .map((item) => item.img);

        const titlesArray = blogs
          .filter((item) => item.title !== undefined)
          .map((item) => item.title);

        setTitles(titlesArray);
        setImages(imagesArray);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  useEffect(() => {
    obtenerData();
  });
  return (
    <HomeContainer>
      {WidthScreen > 769 ? <NavbarDesktop /> : ""}
      <MainContent>
        <PostsHome titulos={titles} imagenes={images} />
      </MainContent>
      {WidthScreen > 769 ? "" : <NavbarMobile />}
    </HomeContainer>
  );
};

export default HomePostLogin;
