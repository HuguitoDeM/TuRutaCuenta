import { useState } from "react";
import ModelOne from "../modelOne/ModelOne";
import ModelOneVersionEdit from "../modelOne/ModelOneVersionEdit";
import { useBlog } from "../../../context/BlogDataProvider";
import deleteBlog from "../../../services/deleteBlog";
import { useNavigate, useParams } from "react-router-dom";
import ModelTwo from "../modelTwo/ModelTwo";
import ModelTwoVersionEdit from "../modelTwo/ModelTwoVersionEdit";
import ModelThree from "../modelThree/ModelThree";
import ModelThreeVersionEdit from "../modelThree/ModelThreeVersionEdit";
import ModelFour from "../modelFour/ModelFour";
import ModelFourVersionEdit from "../modelFour/ModelFourVersionEdit";

interface ContentItem {
  subtitulo: string;
  img: string;
  textP: string;
}
interface ContentItemTopModelTwo {
  img: string;
  img1: string;
  img2: string;
}

interface ContentItemMiddleModelTwo {
  subtitulo: string;
  textP: string;
  textP2: string;
  textP3: string;
  textP4: string;
}

const NewPostEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Edit, setEdit] = useState(false);

  const { blogData } = useBlog();
  const blog = blogData
    ? Object.values(blogData)
        .filter((blog) => blog.id === id)
        .map((blog) => blog)
    : [];
  console.log(blog);

  if (blog.length === 0) {
    return null;
  }

  const currentBlog = blog[0];

  const handleEditPost = () => {
    setEdit(!Edit);
  };

  const handleBorrarPost = async () => {
    const response = await deleteBlog({ id: currentBlog.id });
    if (response) {
      navigate("/home");
      window.location.reload();
    }
  };

  const renderModel = () => {
    switch (currentBlog.model) {
      case "1":
        return Edit ? (
          <ModelOneVersionEdit
            UpdateBlog={currentBlog}
            guardarEdit={handleEditPost}
          />
        ) : (
          <ModelOne
            title={currentBlog.title}
            contentTop={currentBlog.contentTop as ContentItem}
            contentMiddle={currentBlog.contentMiddle as ContentItem}
            contentBottom={currentBlog.contentBottom as ContentItem}
            Edit={handleEditPost}
            Borrar={handleBorrarPost}
            userId={currentBlog.userId}
          />
        );
      case "2":
        return Edit ? (
          <ModelTwoVersionEdit
            UpdateBlog={currentBlog}
            guardarEdit={handleEditPost}
          />
        ) : (
          <ModelTwo
            title={currentBlog.title}
            contentTop={currentBlog.contentTop as ContentItemTopModelTwo}
            contentMiddle={
              currentBlog.contentMiddle as ContentItemMiddleModelTwo
            }
            Edit={handleEditPost}
            Borrar={handleBorrarPost}
            userId={currentBlog.userId}
          />
        );
      case "3":
        return Edit ? (
          <ModelThreeVersionEdit
          //  UpdateBlog={currentBlog}
          //   guardarEdit={handleEditPost}
          />
        ) : (
          <ModelThree
          //   title={currentBlog.title}
          //    contentTop={currentBlog.contentTop}
          //    contentMiddle={currentBlog.contentMiddle}
          //   contentBottom={currentBlog.contentBottom}
          //   Edit={handleEditPost}
          //    Borrar={handleBorrarPost}
          //    userId={currentBlog.userId}
          />
        );
      case "4":
        return Edit ? (
          <ModelFourVersionEdit
          //     UpdateBlog={currentBlog}
          //   guardarEdit={handleEditPost}
          />
        ) : (
          <ModelFour
          //    title={currentBlog.title}
          //   contentTop={currentBlog.contentTop}
          //   contentMiddle={currentBlog.contentMiddle}
          //    contentBottom={currentBlog.contentBottom}
          //    Edit={handleEditPost}
          //   Borrar={handleBorrarPost}
          //   userId={currentBlog.userId}
          />
        );
      default:
        return null;
    }
  };

  return <>{renderModel()}</>;
};

export default NewPostEdit;
