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

const ContentBody = styled.div`
  display: flex;
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
`;

const ContentRight = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 1rem;
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
    border: 2px #818cf8 solid;
    border-radius: 5px;
    outline: none;
  }
  textArea {
    padding: 11px 10px;
    margin: auto;
    width: 90%;
    font-size: 0.75rem;
    border: 2px #818cf8 solid;
    border-radius: 5px;
    outline: none;
  }
`;

const Subtitulo = styled(Title)`
  label {
    margin-right: 80%;
  }
  input {
    width: 95%;
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
`;
const TextCenter = styled.div`
  display: flex;
  gap: 15px;
  textArea {
    width: 90%;
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
            <label htmlFor="">SubTitulo</label>
            <input type="text" />
          </Subtitulo>
          <TextParrafo>
            <label htmlFor="">Texto</label>
            <textarea
              id="myTextArea"
              rows={10}
              cols={50}
              placeholder="Escribe tu texto"
            />
          </TextParrafo>
          <TextCenter>
            <TextParrafo>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                rows={10}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
            <TextParrafo>
              <label htmlFor="">Texto</label>
              <textarea
                id="myTextArea"
                rows={10}
                cols={50}
                placeholder="Escribe tu texto"
              />
            </TextParrafo>
          </TextCenter>
          <TextParrafo>
            <label htmlFor="">Texto</label>
            <textarea
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
