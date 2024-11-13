import styled from "styled-components";

const Imagenes = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 300px;
  }
`;

interface Props {
  url?: string;
}

const ImageUpload = ({ url }: Props) => {
  return (
    <Imagenes>
      <input type="file" accept="image/*" style={{ display: "none" }} />
      <label style={{ cursor: "pointer" }}>
        <img
          src={
            url
              ? url
              : "https://static.vecteezy.com/system/resources/previews/016/017/372/non_2x/image-upload-free-png.png"
          }
          alt="Subir imagen"
        />
      </label>
    </Imagenes>
  );
};

export default ImageUpload;
