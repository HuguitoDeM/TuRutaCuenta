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

const TextLeft = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  width: 40%;
  gap: 15px;
  margin-left: 15px;
  margin-right: 15px;
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
`;
const FirstImage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 300px;
  }
  padding: 5px;
  border: 3px solid black;
`;

const Imagenes = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 300px;
  }
`;

const ContenidoArriba = styled.div`
  display: flex;
  width: 100%;
  heigth: 100%;
`;
const TextRight = styled(TextLeft)``;
const TextCenter = styled(TextLeft)`
  transform: translateY(-30px);
  width: 100%;
`;
const ContenidoAbajo = styled(ContenidoArriba)``;
const SecondImage = styled(FirstImage)`
  margin-left: 15px;
  height: 300px;
  width: 40%;
  img {
    height: 100%;
    width: 100%;
  }
`;
const ThirdImage = styled(SecondImage)`
  justify-content: flex-end;
  margin-right: 15px;
`;

const ModelOneVersionEdit = ({ newPost = false }) => {
  return (
    <EditContainer className={newPost ? "NewPost" : ""}>
      <MainTitle>
        <Title>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" placeholder="Titulo" name="titulo" />
        </Title>
      </MainTitle>
      <ContenidoArriba>
        <TextLeft>
          <Subtitulo>
            <label htmlFor="subtitulo1">SubTitulo</label>
            <input type="text" name="subtitulo1" />
          </Subtitulo>

          <TextBody>
            <label htmlFor="">Texto</label>
            <textarea
              id="myTextArea"
              rows={15}
              cols={50}
              placeholder="Escribe tu texto"
            />
          </TextBody>
        </TextLeft>

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
        <TextRight>
          <Subtitulo>
            <label htmlFor="">SubTitulo</label>
            <input type="text" />
          </Subtitulo>
          <TextBody>
            <label htmlFor="">Texto</label>
            <textarea
              id="myTextArea"
              rows={15}
              cols={50}
              placeholder="Escribe tu texto"
            />
          </TextBody>
        </TextRight>
      </ContenidoArriba>
      <ContenidoAbajo>
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
        </SecondImage>
        <TextCenter>
          <Subtitulo>
            <label htmlFor="">SubTitulo</label>
            <input type="text" />
          </Subtitulo>
          <TextBody>
            <label htmlFor="">Texto</label>
            <textarea
              id="myTextArea"
              rows={15}
              cols={50}
              placeholder="Escribe tu texto"
            />
          </TextBody>
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
      </ContenidoAbajo>
    </EditContainer>
  );
};

export default ModelOneVersionEdit;
