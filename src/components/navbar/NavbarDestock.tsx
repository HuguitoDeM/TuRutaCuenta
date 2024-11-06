import styled from "styled-components";
import Icon from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
`;
const NavbarMenu = styled.nav`
  display: flex;
  position fixed;
  justify-content: space-between;
  width: 100%;
  background-color: #000000;
  height: 90px;
  box-sizing: border-box;
  font-size: 1.5rem;
  align-items: center;
  &.NavbarHome {
    background-color: transparent;
  }
`;
const NavbarOptions = styled.ul`
  box-sizing: border-box;
  display: flex;
  list-style-type: none;
  gap: 6rem;
  padding-left: 3rem;
  align-items: center;
`;

const HomeOption = styled.li`
  display: flex;
  position: relative;
  align-items: center;

  svg:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

const ExplorerOption = styled(HomeOption)`
  svg {
    position: absolute;
    background-color: black;
    border: none;
    border-radius: 99px;
    margin-left: 3px;
  }
  svg:hover {
    transform: translateY(0px);
    cursor: default;
  }
  input {
    font-size: 18px;
    padding-left: 55px;
    border: 3px solid white;
    background-color: white;
    height: 44px;
    border-radius: 50px;
    outline: none;
  }
`;

const LogoNavbar = styled(HomeOption)`

  svg:hover {
    transform: translateY(0px);
    cursor: default;
`;

const TextLogo = styled.div`
  color: white;
  font-size: 28px;
  margin-left: 15px;
`;
const UserLoginButton = styled.button`
  display: flex;
  height: 50px;
  background-color: white;
  align-items: center;
  width: 180px;
  border: none;
  border-radius: 99px 0% 0% 99px;
  font-size: 22px;
  gap: 30px;
  svg {
    background-color: white;
    border-radius: 99px;
    margin-left: 8px;
  }
  &:hover {
    cursor: pointer;
    background-color: gray;
    svg {
      background-color: gray;
    }
  }
`;

interface props {
  NavbarHome?: boolean;
  login: boolean;
  user?: string;
}

const NavbarDestock = ({ NavbarHome = false, login, user }: props) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavbarMenu className={NavbarHome ? "NavbarHome" : ""}>
        <NavbarOptions>
          <LogoNavbar>
            <Icon name="logo" size={65} />
            <TextLogo>
              <p>Tu ruta</p>
              <p>cuenta</p>
            </TextLogo>
          </LogoNavbar>
          {!NavbarHome && (
            <HomeOption>
              <Icon name="Home" size={50} />
            </HomeOption>
          )}
          <ExplorerOption>
            <Icon name="Explorador" size={45} />
            <input placeholder="Destino turístico" />
          </ExplorerOption>
        </NavbarOptions>
        <UserLoginButton onClick={() => navigate("/login")}>
          <Icon name="User" size={37} color="black" />
          {login ? user : <p>Log In</p>}
        </UserLoginButton>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default NavbarDestock;
