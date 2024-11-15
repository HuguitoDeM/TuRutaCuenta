import styled from "styled-components";

const Imagenes = styled.div`
  width: 100%;
  border: 3px solid black;

  img {
    width: 100%;
  }
  .urlCargadaImg {
    border: 3px solid black;
  }

  &.urlCargadaDiv {
    border: none;
  }
`;

interface Props {
  id: string;
  url?: string;
  UploadImage: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const ImageUpload = ({ id, url, UploadImage }: Props) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    UploadImage(e);
  };
  return (
    <Imagenes className={url ? "urlCargadaDiv" : "bordeDiv"}>
      <input
        id={`imagen${id}`}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <label
        htmlFor={`imagen${id}`}
        className={url ? "urlCargada" : ""}
        style={{ cursor: "pointer" }}
      >
        <img
          className={url ? "urlCargadaImg" : ""}
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
