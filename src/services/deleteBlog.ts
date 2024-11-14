interface Props {
  id: string;
}

const deleteBlog = async ({ id }: Props) => {
  try {
    const response = await fetch(
      `https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/blogs/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.ok) {
      const respuesta = await response.json();
      console.log("Borrado con exito", respuesta);
      return respuesta;
    } else {
      console.error("Error al Borrar el blog:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export default deleteBlog;
