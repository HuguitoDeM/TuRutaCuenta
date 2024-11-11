import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../Icons/Icons";
import { useState } from "react";
import authServiceRegistro from "../../services/authServiceRegistro";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;
const FormRegister = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;
  width: 350px;
  flex-direction: column;
  gap: 30px;
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  border-radius: 8px;
  p {
    color: blue;
    text-decoration: underline;
  }
  p:hover {
    cursor: pointer;
  }
`;
const TituloRegister = styled.a`
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
`;
const UserNameInputBox = styled.div`
  position: relative;
  width: 250px;
  span {
    position: absolute;
    left: 0;
    transform: translateY(-38px);
    margin-left: 10px;
    padding: 10px;
    pointer-events: none;
    font-size: 12px;
    color: #000;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 3px;
    border-radius: 8px;
  }
  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    color: #000;
    font-size: 1em;
    background: transparent;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transition: 0.1s;
    border-bottom-left-radius: 8px;
  }
  input:valid ~ span,
  input:focus ~ span {
    transform: translateX(113px) translateY(-53px);
    font-size: 0.8em;
    padding: 5px 10px;
    background: #000;
    letter-spacing: 0.2em;
    color: #fff;
    border: 2px;
  }
  input:valid,
  input:focus {
    border: 2px solid #000;
    border-radius: 8px;
  }
`;
const EmailInputBox = styled(UserNameInputBox)``;
const PasswordInputBox = styled(UserNameInputBox)``;

const ButtonEnter = styled.button`
  height: 45px;
  width: 150px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 1em;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`;
const ErrorMessage = styled.div`
  display: flex;
  gap: 10px;
  p {
    color: red;
    font-size: 19px;
    text-decoration: none;
  }
`;
const Register = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [email, setEmail] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resultado = await authServiceRegistro({ usuario, contraseña, email });
    if (resultado === "usuario ya existe") {
      setMessageError(resultado);
    } else if (resultado === "usuario creado con exito") {
      navigate("/home");
    }
  };
  return (
    <RegisterContainer>
      <FormRegister onSubmit={handleOnSubmit}>
        <TituloRegister>REGISTRO</TituloRegister>
        <ErrorMessage>
          {messageError && (
            <>
              <Icon name="error" /> <p>{messageError}</p>
            </>
          )}
        </ErrorMessage>
        <UserNameInputBox>
          <input
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <span>USERNAME</span>
        </UserNameInputBox>
        <EmailInputBox>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span>EMAIL</span>
        </EmailInputBox>
        <PasswordInputBox>
          <input
            type="password"
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
          <span>PASSWORD</span>
        </PasswordInputBox>
        <ButtonEnter>REGISTRARSE</ButtonEnter>
        <p onClick={() => navigate("/login")}>¿Ya tienes cuenta?</p>
      </FormRegister>
    </RegisterContainer>
  );
};

export default Register;
