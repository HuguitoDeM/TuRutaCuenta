import styled from "styled-components";
import PostsHome from "../homePostLogin/PostsHome";
import getData from "../../services/getData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getBlogs from "../../services/getBlogs";

const UserData = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  img {
    height: 120px;
    width: 120px;
    border-radius: 99px;
  }
`;

const Nombre = styled.h2`
  font-size: 36px;
`;
const Correo = styled.span`
  color: #767676;
`;
const MisDestinos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  border-bottom: 3px solid black;
  p {
    font-size: 19px;
  }
`;
const CerrarSesion = styled.div`
  button {
    background-color: red;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 99px;
    width: 9rem;
    height: 2.5rem;
    filter: grayscale(50%);
    &:hover {
      cursor: pointer;
      filter: grayscale(5%);
    }
  }
`;
const Destinos = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(100px, auto);
  img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    max-height: 220px;
  }
  h2 {
    font-size: 15px;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

interface Blog {
  id: string;
  title: string;
  img: string;
  description: string;
  userId: string;
}

interface userData {
  id: string;
  name: string;
  password: string;
  email: string;
}

const UsersData = () => {
  const userData: userData = getData();
  const [titles, setTitles] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);
  const obtenerData = async () => {
    try {
      const resultado: Blog[] | undefined = await getBlogs();
      if (resultado) {
        const blogs = Object.values(resultado);

        const imagesArray = blogs
          .filter((item) => item.userId === userData.id)
          .map((item) => item.img);
        const titlesArray = blogs
          .filter((item) => item.userId === userData.id)
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

  const navigate = useNavigate();
  const handleCloseSesion = () => {
    localStorage.removeItem("loginUser");
    navigate("/");
  };
  return (
    <UserData>
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg"
        alt=""
      />
      <Nombre>{userData.name}</Nombre>
      <Correo>{userData.email}</Correo>
      <CerrarSesion>
        <button onClick={handleCloseSesion}>Cerrar Sesión</button>
      </CerrarSesion>
      <MisDestinos>
        <p>Mis Destinos</p>
      </MisDestinos>
      <Destinos>
        <PostsHome titulos={titles} imagenes={images} />
      </Destinos>
    </UserData>
  );
};

export default UsersData;
