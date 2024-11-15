import { useState } from "react";
import ModelOne from "../modelOne/ModelOne";
import ModelOneVersionEdit from "../modelOne/ModelOneVersionEdit";
import { useBlog } from "../../../context/BlogDataProvider";
import deleteBlog from "../../../services/deleteBlog";
import { useNavigate, useParams } from "react-router-dom";

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

  return (
    <>
      {Edit ? (
        <ModelOneVersionEdit
          UpdateBlog={currentBlog}
          guardarEdit={handleEditPost}
        />
      ) : (
        <ModelOne
          title={currentBlog.title}
          contentTop={{
            subtitulo: currentBlog.contentTop.subtitulo,
            textP: currentBlog.contentTop.textP,
            img: currentBlog.contentTop.img,
          }}
          contentMiddle={{
            subtitulo: currentBlog.contentMiddle.subtitulo,
            textP: currentBlog.contentMiddle.textP,
            img: currentBlog.contentMiddle.img,
          }}
          contentBottom={{
            subtitulo: currentBlog.contentBottom.subtitulo,
            textP: currentBlog.contentBottom.textP,
            img: currentBlog.contentBottom.img,
          }}
          Edit={handleEditPost}
          Borrar={handleBorrarPost}
          userId={currentBlog.userId}
        />
      )}
    </>
  );
};

export default NewPostEdit;
