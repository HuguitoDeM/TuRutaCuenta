import styled from "styled-components";

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
  &.NewPost {
    transform: scale(0.8);
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
    font-size: 0.75rem;
    border: 2px black solid;
    border-radius: 5px;
    outline: none;
  }
  @media (max-width: 768px) {
    input {
      width: 95%;
    }
    label {
      margin-right: 60%;
    }
  }
`;
const ContentBody = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  margin-top: 15px;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 0px;
    width: 100%;

    flex-direction: column;
  }
`;
const SecondImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    img {
      margin: auto;
      width: 100%;
      height: 200px;
    }
  }
`;
const ThirdImage = styled.div`
  display: flex;
  width: 100%;
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
`;
const Imagenes = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  img {
    width: 100%;
  }
`;
const FirstImage = styled.div`
  display: flex;
  width: 100%;
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
`;
const ContentRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const TextCenter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 1.5rem;
  p {
    text-align: justify;
  }
`;
const Subtitulo = styled(Title)`
  height: 50%;

  label {
    margin-right: 70%;
  }
  input {
    width: 90%;
    margin-bottom: 7rem;
  }
  @media (max-width: 768px) {
    input {
      width: 95%;
      margin-bottom: 0;
    }
  }
`;
const TextParrafo = styled(Title)`
  label {
    margin-right: 50%;
  }
  textArea {
    width: 95%;
  }
`;
const DownText = styled(TextCenter)``;

const ModelThreeVersionEdit = ({ newPost = false }) => {
  return (
    <EditContainer className={newPost ? "NewPost" : ""}>
      <Title>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" placeholder="Titulo" name="titulo" />
      </Title>
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
      </FirstImage>
      <ContentBody>
        <SecondImage>
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
          <Subtitulo>
            <label htmlFor="">SubTitulo</label>
            <input type="text" />
          </Subtitulo>
        </SecondImage>
        <ContentRight>
          <TextCenter>
            <TextParrafo>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                rows={15}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
            <TextParrafo>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                rows={15}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
          </TextCenter>
          <ThirdImage>
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
          </ThirdImage>
          <DownText>
            <TextParrafo>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                rows={15}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
            <TextParrafo>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                rows={15}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
          </DownText>
        </ContentRight>
      </ContentBody>
    </EditContainer>
  );
};

export default ModelThreeVersionEdit;
