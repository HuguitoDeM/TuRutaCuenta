import styled from "styled-components";
import ImageUpload from "../typesOfPost/modelOne/ImageUpload";
import uploadImages from "../../services/uploadImages";

const PhotoContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;

  margin: auto;
  width: 100%;
  height: 100%;
`;

const PhotoHome = () => {
  const handleChangeImageAndGetURL = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const response = await uploadImages({ imagen: file });
      console.log(response);
      if (response) {
        console.log(response);
      }
    }
  };

  return (
    <PhotoContainer>
      <Content>
        <ImageUpload id="4" UploadImage={handleChangeImageAndGetURL} />
        <label htmlFor="location">Localización</label>
        <input type="text" id="location" />
      </Content>
    </PhotoContainer>
  );
};

export default PhotoHome;
