import styled from "styled-components";

const Imagenes = styled.div`
  width: 100%;

  img {
    width: 100%;
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
    <Imagenes>
      <input
        id={`imagen${id}`}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <label htmlFor={`imagen${id}`} style={{ cursor: "pointer" }}>
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
