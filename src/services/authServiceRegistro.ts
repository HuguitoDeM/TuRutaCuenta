import authService from "./authService";

interface User {
  usuario: string;
  contraseña: string;
  email: string;
}

const authServiceRegistro = async ({ usuario, contraseña, email }: User) => {
  const existUser = await authService({ usuario, contraseña });
  if (!(existUser === "usuario no encontrado")) {
    return "usuario ya existe";
  } else {
    try {
      const response = await fetch(
        "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name: usuario,
            password: contraseña,
            email: email,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }
      await authService({ usuario, contraseña });
      return "usuario creado con exito";
    } catch (error) {
      console.error("Error: ", error);
      return "Ocurrió un error al registrar el usuario.";
    }
  }
};
export default authServiceRegistro;
