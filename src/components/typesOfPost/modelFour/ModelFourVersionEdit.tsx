import styled from "styled-components";

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
  &.NewPost {
    transform: scale(0.9);
  }
`;

const ContentBody = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FirstImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 30px;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 100%;
      height: 200px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-bottom: 2rem;
  }
`;

const ContentRight = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
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
    margin: 0 80% 0 0;
    padding: 0 3px;
    background: white;
    width: fit-content;
  }
  input {
    padding: 11px 10px;
    font-size: 1.45rem;
    width: 98%;
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
      margin: 0 80% 0 50%;
    }
  }
`;

const Subtitulo = styled(Title)`
  label {
    margin-right: 80%;
  }
  input {
    width: 95%;
  }
  @media (max-width: 768px) {
    input {
      width: 90%;
    }
  }
`;

const TextParrafo = styled(Title)`
  margin: auto;
  label {
    margin-right: 80%;
  }
  textArea {
    width: 95%;
  }
  @media (max-width: 768px) {
    textArea {
      width: 90%;
    }
  }
`;
const TextCenter = styled.div`
  display: flex;
  gap: 15px;
  textArea {
    width: 90%;
  }
  @media (max-width: 768px) {
    textArea {
      width: 90%;
    }
  }
`;

const Imagenes = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  img {
    margin: auto;
    width: 100%;
  }
`;
const RightImages = styled.div`
  justify-content: space-around;
  margin: auto;
  width: 98%;
  gap: 1rem;
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      width: 100%;
      height: 200px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    div {
      img {
        width: 100%;
        height: 100px;
        object-fit: cover;
      }
    }
  }
`;
const ModelFourVersionEdit = ({ newPost = false }) => {
  return (
    <EditContainer className={newPost ? "NewPost" : ""}>
      <ContentBody>
        <FirstImage>
          <Imagenes>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="imageUpload"
            />
            <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/016/017/372/non_2x/image-upload-free-png.png"
                alt="Subir imagen"
              />
            </label>
          </Imagenes>
          <Title>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" placeholder="Titulo" name="titulo" />
          </Title>
        </FirstImage>
        <ContentRight>
          <Subtitulo>
            <label htmlFor="subtitulo">SubTitulo</label>
            <input type="text" placeholder="subtitulo" name="subtitulo" />
          </Subtitulo>
          <TextParrafo>
            <label htmlFor="texto">Texto</label>
            <textarea
              id="myTextArea"
              name="texto"
              rows={10}
              cols={50}
              placeholder="Escribe tu texto"
            />
          </TextParrafo>
          <TextCenter>
            <TextParrafo>
              <label htmlFor="texto1">Texto</label>
              <textarea
                id="myTextArea"
                name="texto1"
                rows={10}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
            <TextParrafo>
              <label htmlFor="texto2">Texto</label>
              <textarea
                name="texto2"
                id="myTextArea"
                rows={10}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
          </TextCenter>
          <TextParrafo>
            <label htmlFor="texto3">Texto</label>
            <textarea
              name="texto3"
              id="myTextArea"
              rows={10}
              cols={50}
              placeholder="Escribe tu texto"
            />
          </TextParrafo>
          <RightImages>
            <Imagenes>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="imageUpload"
              />
              <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/017/372/non_2x/image-upload-free-png.png"
                  alt="Subir imagen"
                />
              </label>
            </Imagenes>
            <Imagenes>
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="imageUpload"
              />
              <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/017/372/non_2x/image-upload-free-png.png"
                  alt="Subir imagen"
                />
              </label>
            </Imagenes>
          </RightImages>
        </ContentRight>
      </ContentBody>
    </EditContainer>
  );
};

export default ModelFourVersionEdit;
