interface ContentItem {
  subtitulo?: string;
  img?: string;
  textP?: string;
}

interface Blog {
  id?: string;
  title?: string;
  img?: string;
  description?: string;
  userId?: string;
  model?: string;
  contentTop?: ContentItem;
  contentMiddle?: ContentItem;
  contentBottom?: ContentItem;
}

interface Props {
  updateBlog: Blog;
}

const updatePostBlogs = async ({ updateBlog }: Props) => {
  const updatedData = {
    id: updateBlog.id,
    title: updateBlog.title,
    img: updateBlog.img,
    description: updateBlog.description,
    contentTop: updateBlog.contentTop,
    contentMiddle: updateBlog.contentMiddle,
    contentBottom: updateBlog.contentBottom,
  };
  console.log("Datos de updateBlog:", updateBlog);
  try {
    const response = await fetch(
      `https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${updatedData.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );
    if (response.ok) {
      const respuesta = await response.json();
      console.log("Actualización realizada con éxito", respuesta);
      return respuesta;
    } else {
      console.error("Error al actualizar el blog:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default updatePostBlogs;
