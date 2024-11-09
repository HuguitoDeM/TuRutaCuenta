import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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

const TextBody = styled.div``;
const Subtitulo = styled.div``;

const Title = styled.div``;

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

const Imagenes = styled.div``;

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

const ModelOne = () => {
  return (
    <PostContainer>
      <MainTitle>
        <span>fecha</span>
        <Title>
          <label htmlFor="">Titulo</label>
          <textarea
            id="myTextArea"
            rows={5}
            cols={50}
            placeholder="Escribe tu titulo"
          />
        </Title>
      </MainTitle>
      <ContenidoArriba>
        <TextLeft>
          <Subtitulo>
            <label htmlFor="">SubTitulo</label>
            <input type="text" />
          </Subtitulo>

          <TextBody>
            <label htmlFor="">Texto</label>
            <textarea
              id="myTextArea"
              rows={5}
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
                src="https://thumbs.dreamstime.com/b/picture-icon-vector-photo-gallery-icon-symbol-picture-icon-vector-photo-gallery-icon-symbol-279330833.jpg"
                alt="Subir imagen"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
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
              rows={5}
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
                src="https://thumbs.dreamstime.com/b/picture-icon-vector-photo-gallery-icon-symbol-picture-icon-vector-photo-gallery-icon-symbol-279330833.jpg"
                alt="Subir imagen"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
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
              rows={5}
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
                src="https://thumbs.dreamstime.com/b/picture-icon-vector-photo-gallery-icon-symbol-picture-icon-vector-photo-gallery-icon-symbol-279330833.jpg"
                alt="Subir imagen"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </label>
          </Imagenes>
        </ThirdImage>
      </ContenidoAbajo>
    </PostContainer>
  );
};

export default ModelOne;
