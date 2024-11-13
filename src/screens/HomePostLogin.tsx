import styled from "styled-components";
import PostsHome from "../components/homePostLogin/PostsHome";
import NavbarDesktop from "../components/navbar/NavbarDesktop";
import { UseWindoWidth } from "../hooks/useWidthScreen";
import NavbarMobile from "../components/navbar/NavbarMobile";
import { useBlog } from "../context/BlogDataProvider";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-x: hidden;
  background-color: #a7a7a7;
`;
const MainContent = styled.div``;

const HomePostLogin = () => {
  const WidthScreen = UseWindoWidth();
  const { blogData } = useBlog();
  const titles = blogData
    ? Object.values(blogData)
        .filter((blog) => blog.title !== undefined)
        .map((blog) => blog.title)
        .reverse()
    : [];
  const images = blogData
    ? Object.values(blogData)
        .filter((blog) => blog.img !== undefined)
        .map((blog) => blog.img)
        .reverse()
    : [];

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
