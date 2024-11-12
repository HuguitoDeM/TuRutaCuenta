import getData from "./getData";

interface props {
  url: string;
}

const updateImageApi = async ({ url }: props) => {
  const data = await getData();
  const updatedData = {
    fotoPerfil: url,
  };
  localStorage.setItem("loginUser", JSON.stringify(updatedData));
  try {
    const response = await fetch(
      `https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users/${data.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );
    const respuesta = await response.json();
    if (response.ok) {
      console.log("actualizacion imagen con exito");
      return respuesta;
    }
  } catch (error) {
    console.error("error:", error);
  }
};

export default updateImageApi;
