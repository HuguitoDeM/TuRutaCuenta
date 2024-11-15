import styled from "styled-components";
import getData from "../../../services/getData";
import { useState } from "react";
import updatePostBlogs from "../../../services/updatePostBlogs";
import uploadImages from "../../../services/uploadImages";
import ImageUpload from "../modelOne/ImageUpload";
import addNewBlog from "../../../services/addNewBlog";

const EditContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 0.5rem;

  .button {
    margin: auto;
    width: 250px;
    margin-top: 1rem;
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: gray;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
  }

  .button:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  .button:active {
    transform: translateY(-1px);
  }
`;

const EditsButtons = styled.div`
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: flex-end;
  gap: 15px;
  button {
    width: 100%;
    height: 50px;
    all: unset;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.6em 2em;
    border-radius: 0.25em;
    color: gray;
    font-size: 1.5em;
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    transition: border 300ms, color 300ms;
    user-select: none;
    p {
      z-index: 1;
    }
  }
  .cancelar {
    border: gray solid 0.15em;
  }
  .guardar {
    border: mediumspringgreen solid 0.15em;
  }
  button:hover {
    color: #212121;
  }
  button:activate {
    border-color: teal;
  }

  .guardar::after,
  .guardar::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: mediumspringgreen;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }
  .cancelar::after,
  .cancelar::before {
    content: "";
    position: absolute;
    width: 9em;
    aspect-ratio: 1;
    background: gray;
    opacity: 50%;
    border-radius: 50%;
    transition: transform 500ms, background 300ms;
  }

  button::before {
    left: 0;
    transform: translateX(-8em);
  }
  button::after {
    right: 0;
    transform: translateX(8em);
  }
  button:hover:before {
    transform: translateX(-1em);
  }
  button:hover:after {
    transform: translateX(1em);
  }
  button:active:before,
  button:active:after {
    background: teal;
  }
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: static;
  width: 100%;
  align-items: center;
  justify-content: center;
  label {
    font-size: 1rem;
    color: #818cf8;
    font-weight: 700;
    position: relative;
    top: 0.5rem;
    margin: 0 25% 0 0;
    padding: 0 3px;
    background: white;
    width: fit-content;
  }
  input {
    padding: 11px 10px;
    font-size: 1.45rem;
    width: 30%;
    border: 2px black solid;
    border-radius: 5px;
    outline: none;
  }
  textArea {
    padding: 11px 10px;
    margin: auto;
    width: 90%;
    font-size: 1rem;
    border: 2px black solid;
    border-radius: 5px;
    outline: none;
  }
  @media (max-width: 768px) {
    input {
      width: 90%;
    }
    label {
      margin-right: 60%;
    }
    textArea {
      width: 100%;
    }
  }
`;

const MainContent = styled.div`
  margin-top: 2rem;
  color: #544541;
  display: flex;
  flex-direction: column;
  height: 100%;
  span {
    margin-left: 1rem;
    color: black;
  }
  h2 {
    margin: auto;
    font-size: 36px;
  }
`;

const AllImages = styled.div`
  display: flex;
  margin-top: 1rem;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    border: 3px solid black;
    margin: 5px;
    justify-content: center;
    width: 100%;
    height: 100%;
    label {
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 95%;
    margin: auto;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  margin: auto;
  font-size: 26px;

  gap: 30px;
 
  }
`;
const TextBody = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  gap: 30px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const LeftText = styled(TextBody)`
  flex-direction: column;
  gap: 30px;
`;
const RightText = styled(LeftText)``;

const LineaAbajo = styled.div`
  border-top: 2px solid #736d17;
  width: 70%;
  margin: auto;
`;
const Subtitulo = styled(Title)``;
const TextParrafo = styled(Title)`
  margin: auto;
  label {
    margin-right: 70%;
  }
`;

interface ContentItem {
  subtitulo?: string;
  img?: string;
  textP?: string;
}

interface ContentItemTopModelTwo {
  img?: string;
  img1?: string;
  img2?: string;
}

interface ContentItemMiddleModelTwo {
  subtitulo?: string;
  textP?: string;
  textP2?: string;
  textP3?: string;
  textP4?: string;
}

interface Blog {
  id?: string;
  title?: string;
  img?: string;
  description?: string;
  userId?: string;
  model?: string;
  contentTop?: ContentItemTopModelTwo;
  contentMiddle?: ContentItemMiddleModelTwo;
  contentBottom?: ContentItem;
}
interface Props {
  UpdateBlog?: Blog;
  guardarEdit?: () => void;
}
const ModelTwoVersionEdit = ({
  newPost = false,
  UpdateBlog = {},
  guardarEdit,
}: Props & { newPost?: boolean }) => {
  const userData = getData();

  const [updateBlog, setUpdateBlog] = useState<Blog>({
    id: UpdateBlog.id ?? "",
    title: UpdateBlog.title ?? "",
    userId: UpdateBlog.userId ?? userData.id,
    model: UpdateBlog.model ?? "2",
    contentTop: UpdateBlog.contentTop ?? { img: "", img1: "", img2: "" },
    contentMiddle: UpdateBlog.contentMiddle ?? {
      subtitulo: "",
      textP: "",
      textP2: "",
      textP3: "",
      textP4: "",
    },
  });

  const handleChange = (
    section: "contentTop" | "contentMiddle",
    field: keyof ContentItemMiddleModelTwo | keyof ContentItemTopModelTwo,
    value: string
  ) => {
    console.log("cambiando la url de la imagen");
    setUpdateBlog((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const ActualizarEnLaApi = async () => {
    const response = await updatePostBlogs({ updateBlog });
    if (response) {
      guardarEdit && guardarEdit();
      window.location.reload();
    }
  };

  const handleChangeImageAndGetURL = async (
    e: React.ChangeEvent<HTMLInputElement>,
    section: "contentTop",
    field: "img" | "img1" | "img2"
  ) => {
    console.log("holaa");
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log("aca anda");
      const response = await uploadImages({ imagen: file });
      console.log(response);
      if (response) {
        console.log(response);
        handleChange(section, field, response);
      }
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("aca anda");
    e.preventDefault();
    if (!guardarEdit) {
      console.log("aca anda");
      const resultado = await addNewBlog({ updateBlog });
      console.log("blogModelTwo creadooo!");
      if (resultado) {
        window.location.reload();
      }
    }
  };

  return (
    <EditContainer
      onSubmit={handleOnSubmit}
      className={newPost ? "NewPost" : ""}
    >
      {guardarEdit && (
        <EditsButtons>
          <button className="cancelar" onClick={guardarEdit}>
            <p>Cancelar</p>
          </button>
          <button onClick={ActualizarEnLaApi} className="guardar">
            <p>Guardar</p>
          </button>
        </EditsButtons>
      )}
      {newPost && (
        <button type="submit" className="button">
          Públicar
        </button>
      )}
      <MainContent>
        <Title>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" placeholder="Titulo" name="titulo" />
        </Title>
        {updateBlog.contentTop && (
          <AllImages>
            <ImageUpload
              url={updateBlog.contentTop.img}
              UploadImage={(e) =>
                handleChangeImageAndGetURL(e, "contentTop", "img")
              }
              id="1"
            />
            <ImageUpload
              url={updateBlog.contentTop.img1}
              UploadImage={(e) =>
                handleChangeImageAndGetURL(e, "contentTop", "img1")
              }
              id="2"
            />
            <ImageUpload
              url={updateBlog.contentTop.img2}
              UploadImage={(e) =>
                handleChangeImageAndGetURL(e, "contentTop", "img2")
              }
              id="3"
            />
          </AllImages>
        )}
        {updateBlog.contentMiddle && (
          <Text>
            <Subtitulo>
              <label htmlFor="subtitulo">SubTitulo</label>
              <input
                type="text"
                value={updateBlog.contentMiddle?.subtitulo}
                onChange={(e) =>
                  handleChange("contentMiddle", "subtitulo", e.target.value)
                }
              />
            </Subtitulo>

            <TextBody>
              <LeftText>
                <TextParrafo>
                  <label htmlFor="textP">Texto</label>
                  <textarea
                    id="textP"
                    rows={10}
                    cols={50}
                    placeholder="Escribe tu texto"
                    value={updateBlog.contentMiddle?.textP}
                    onChange={(e) =>
                      handleChange("contentMiddle", "textP", e.target.value)
                    }
                  />
                </TextParrafo>
                <TextParrafo>
                  <label htmlFor="textP2">Texto</label>
                  <textarea
                    id="textP2"
                    rows={10}
                    cols={50}
                    placeholder="Escribe tu texto"
                    value={updateBlog.contentMiddle?.textP2}
                    onChange={(e) =>
                      handleChange("contentMiddle", "textP2", e.target.value)
                    }
                  />
                </TextParrafo>
              </LeftText>
              <RightText>
                <TextParrafo>
                  <label htmlFor="textP3">Texto</label>
                  <textarea
                    id="textP3"
                    rows={10}
                    cols={50}
                    placeholder="Escribe tu texto"
                    value={updateBlog.contentMiddle?.textP3}
                    onChange={(e) =>
                      handleChange("contentMiddle", "textP3", e.target.value)
                    }
                  />
                </TextParrafo>
                <TextParrafo>
                  <label htmlFor="textP4">Texto</label>
                  <textarea
                    id="textP4"
                    rows={10}
                    cols={50}
                    placeholder="Escribe tu texto"
                    value={updateBlog.contentMiddle.textP4}
                    onChange={(e) =>
                      handleChange("contentMiddle", "textP4", e.target.value)
                    }
                  />
                </TextParrafo>
              </RightText>
            </TextBody>

            <LineaAbajo />
          </Text>
        )}
      </MainContent>
    </EditContainer>
  );
};

export default ModelTwoVersionEdit;
