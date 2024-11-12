import styled from "styled-components";

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
            <input type="text" placeholder="subtitulo" name="subtitulo1" />
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
            <label htmlFor="subtitulo2">SubTitulo</label>
            <input type="text" placeholder="subtitulo" name="subtitulo2" />
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
            <label htmlFor="subtitulo3">SubTitulo</label>
            <input type="text" placeholder="subtitulo" name="subtitulo3" />
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
