import styled from "styled-components";
import PostsHome from "../homePostLogin/PostsHome";
import getData from "../../services/getData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getBlogs from "../../services/getBlogs";
import uploadImages from "../../services/uploadImages";
import updateImageApi from "../../services/updateImageApi";

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

const Imagenes = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  justify-content: center;

  label {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
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
  fotoPerfil: string;
}

const UsersData = () => {
  const userData: userData = getData();
  const imagenDePerfil = userData.fotoPerfil;
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

  const handleUpdatePerfil = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const response = await uploadImages({ imagen: file });
      if (response) {
        const updatedData = {
          ...userData,
          fotoPerfil: response,
        };
        const updateimg = await updateImageApi(response);
        if (updateimg) {
          localStorage.setItem("loginUser", JSON.stringify(updatedData));
        }
      }
    }
  };

  return (
    <UserData>
      <Imagenes>
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleUpdatePerfil}
          id="imageUpload"
        />
        <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
          <img
            src={
              imagenDePerfil
                ? imagenDePerfil
                : "https://static.vecteezy.com/system/resources/previews/016/017/372/non_2x/image-upload-free-png.png"
            }
            alt="Subir imagen"
          />
        </label>
      </Imagenes>
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
