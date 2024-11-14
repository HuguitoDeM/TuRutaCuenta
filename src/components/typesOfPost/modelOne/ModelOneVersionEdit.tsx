import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { useState } from "react";
import updatePostBlogs from "../../../services/updatePostBlogs";

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 0.5rem;
  &.NewPost {
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    gap: 0rem;
  }
`;

const TextLeft = styled.div`
  display: flex;
  font-size: 17px;
  flex-direction: column;
  width: 40%;
  gap: 15px;
  margin-left: 15px;
  margin-right: 15px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    gap: 0px;
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
    border: 2px solid black;
    border-radius: 5px;
    outline: none;
  }
  textArea {
    padding: 11px 10px;
    margin: auto;
    width: 90%;
    font-size: 0.75rem;
    border: 2px solid black;
    border-radius: 5px;
    outline: none;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    input {
      width: 90%;
    }
    label {
      margin-right: 60%;
    }
  }
`;
const TextBody = styled(Title)`
  margin: auto;
  label {
    margin-right: 70%;
  }
`;

const Subtitulo = styled(Title)`
  label {
    margin-right: 70%;
  }
  input {
    width: 90%;
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
const MainTitle = styled.div`
  display: flex;
  font-size: 32px;
  width: 100%;
  align-items: center;

  div {
    margin: auto;
  }
  span {
    font-size: 12px;
    margin-left: 15px;
  }
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
const FirstImage = styled.div`
  display: flex;
  margin-top: 1rem;
  height: 100%;
  padding-top: 1.5rem;
  border: 3px solid black;
  display: flex;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ContenidoArriba = styled.div`
  display: flex;
  width: 100%;
  heigth: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const TextRight = styled(TextLeft)`
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
const TextCenter = styled(TextLeft)`
  transform: translateY(-30px);
  width: 100%;
  @media (max-width: 768px) {
    transform: translateY(0px);
  }
`;
const ContenidoAbajo = styled(ContenidoArriba)``;
const SecondImage = styled(FirstImage)`
  margin-left: 15px;
  display: flex;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    margin-left: 0;
    width: 95%;
    margin-bottom: 1.5rem;
  }
`;
const ThirdImage = styled(SecondImage)`
  justify-content: flex-end;
  margin-right: 15px;
  @media (max-width: 768px) {
    margin-right: 0;
    width: 95%;
  }
`;

interface ContentItem {
  subtitulo?: string;
  img?: string;
  textP?: string;
}

interface Blog {
  id?: string;
  title?: string;
  img?: string;
  description?: string;
  userId?: string;
  model?: string;
  contentTop?: ContentItem;
  contentMiddle?: ContentItem;
  contentBottom?: ContentItem;
}

interface Props {
  UpdateBlog?: Blog;
  guardarEdit?: () => void;
}

const ModelOneVersionEdit = ({
  newPost = false,
  UpdateBlog = {},
  guardarEdit,
}: Props & { newPost?: boolean }) => {
  const [updateBlog, setUpdateBlog] = useState<Blog>({
    id: UpdateBlog.id ?? "",
    title: UpdateBlog.title ?? "",
    img: UpdateBlog.img ?? "",
    description: UpdateBlog.description ?? "",
    userId: UpdateBlog.userId ?? "",
    model: UpdateBlog.model ?? "",
    contentTop: UpdateBlog.contentTop ?? { subtitulo: "", textP: "", img: "" },
    contentMiddle: UpdateBlog.contentMiddle ?? {
      subtitulo: "",
      textP: "",
      img: "",
    },
    contentBottom: UpdateBlog.contentBottom ?? {
      subtitulo: "",
      textP: "",
      img: "",
    },
  });

  const handleChange = (
    section: "contentTop" | "contentMiddle" | "contentBottom",
    field: "subtitulo" | "textP" | "img",
    value: string
  ) => {
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
  return (
    <EditContainer className={newPost ? "NewPost" : ""}>
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
      <MainTitle>
        <Title>
          <label htmlFor="titulo">Titulo</label>
          <input
            type="text"
            placeholder="Titulo"
            value={updateBlog.title}
            onChange={(e) =>
              setUpdateBlog({ ...updateBlog, title: e.target.value })
            }
            name="titulo"
          />
        </Title>
      </MainTitle>
      {updateBlog.contentTop && updateBlog.contentMiddle && (
        <ContenidoArriba>
          <TextLeft>
            <Subtitulo>
              <label htmlFor="subtitulo1">SubTitulo</label>
              <input
                type="text"
                value={updateBlog.contentTop.subtitulo}
                onChange={(e) =>
                  handleChange("contentTop", "subtitulo", e.target.value)
                }
                placeholder="subtitulo"
                name="subtitulo1"
              />
            </Subtitulo>

            <TextBody>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                value={updateBlog.contentTop.textP}
                onChange={(e) =>
                  handleChange("contentTop", "textP", e.target.value)
                }
                rows={15}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextBody>
          </TextLeft>

          <FirstImage>
            <ImageUpload url={updateBlog.contentTop.img} />
          </FirstImage>

          <TextRight>
            <Subtitulo>
              <label htmlFor="subtitulo2">SubTitulo</label>
              <input
                type="text"
                placeholder="subtitulo"
                value={updateBlog.contentMiddle.subtitulo}
                onChange={(e) =>
                  handleChange("contentMiddle", "subtitulo", e.target.value)
                }
                name="subtitulo2"
              />
            </Subtitulo>

            <TextBody>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                value={updateBlog.contentMiddle.textP}
                onChange={(e) =>
                  handleChange("contentMiddle", "textP", e.target.value)
                }
                rows={15}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextBody>
          </TextRight>
        </ContenidoArriba>
      )}
      {updateBlog.contentMiddle && updateBlog.contentBottom && (
        <ContenidoAbajo>
          <SecondImage>
            <ImageUpload url={updateBlog.contentMiddle.img} />
          </SecondImage>

          <TextCenter>
            <Subtitulo>
              <label htmlFor="subtitulo3">SubTitulo</label>
              <input
                type="text"
                placeholder="subtitulo"
                value={updateBlog.contentBottom.subtitulo}
                onChange={(e) =>
                  handleChange("contentBottom", "subtitulo", e.target.value)
                }
                name="subtitulo3"
              />
            </Subtitulo>

            <TextBody>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                value={updateBlog.contentBottom.textP}
                onChange={(e) =>
                  handleChange("contentBottom", "textP", e.target.value)
                }
                rows={15}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextBody>
          </TextCenter>

          <ThirdImage>
            <ImageUpload url={updateBlog.contentBottom.img} />
          </ThirdImage>
        </ContenidoAbajo>
      )}
    </EditContainer>
  );
};

export default ModelOneVersionEdit;
