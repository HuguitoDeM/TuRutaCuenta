import styled from "styled-components";

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 0.5rem;
  &.NewPost {
    transform: scale(0.9);
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

const MainContent = styled.div`
  margin-top: 2rem;
  color: #544541;
  display: flex;
  flex-direction: column;
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
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1rem;
  border: 1px solid black;
`;

const Imagenes = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  img {
    width: 100%;
    height: 300px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  h3 {
    margin: auto;
    font-size: 26px;
  }
  gap: 30px;
`;
const TextBody = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  gap: 30px;
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

const ModelTwoVersionEdit = ({ newPost = false }) => {
  return (
    <EditContainer className={newPost ? "NewPost" : ""}>
      <MainContent>
        <Title>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" placeholder="Titulo" name="titulo" />
        </Title>
        <AllImages>
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
        </AllImages>
        <Text>
          <Subtitulo>
            <label htmlFor="">SubTitulo</label>
            <input type="text" />
          </Subtitulo>

          <TextBody>
            <LeftText>
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
            </LeftText>
            <RightText>
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
            </RightText>
          </TextBody>
          <LineaAbajo />
        </Text>
      </MainContent>
    </EditContainer>
  );
};

export default ModelTwoVersionEdit;
