import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;
const FormLogin = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 450px;
  width: 350px;
  flex-direction: column;
  gap: 35px;
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  border-radius: 8px;
`;
const TituloLogin = styled.a`
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
const PasswordInputBox = styled(UserNameInputBox)``;

const ButtonEnter = styled.button`
  height: 45px;
  width: 100px;
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
const Login = () => {
  const navigate = useNavigate();

  const handleOnSubmit = () => {
    //checkear los inputs
    navigate("/home");
  };
  return (
    <LoginContainer>
      <FormLogin onSubmit={handleOnSubmit}>
        <TituloLogin>LOG IN</TituloLogin>
        <UserNameInputBox>
          <input type="text" required />
          <span>USERNAME</span>
        </UserNameInputBox>
        <PasswordInputBox>
          <input type="text" required />
          <span>PASSWORD</span>
        </PasswordInputBox>
        <ButtonEnter>ENTRAR</ButtonEnter>
      </FormLogin>
    </LoginContainer>
  );
};

export default Login;
