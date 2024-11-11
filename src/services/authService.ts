interface User {
  id: string;
  name: string;
  password: string;
  email: string;
}

interface props {
  usuario: string;
  contraseña: string;
}

const authService = async ({ usuario, contraseña }: props) => {
  try {
    const response = await fetch(
      "https://6622071827fcd16fa6c8818c.mockapi.io/api/v1/users"
    );
    if (!response.ok) {
      throw new Error("Error Fetch users");
    }

    const users: User[] = await response.json();
    const existUser = users.find((e) => e.name === usuario);
    if (!existUser) {
      return "usuario no encontrado";
    }
    if (existUser.password === contraseña) {
      localStorage.setItem("loginUser", JSON.stringify(existUser));
      return existUser;
    } else {
      return "contraseña incorrecta";
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};
export default authService;
