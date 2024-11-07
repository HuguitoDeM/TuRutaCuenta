import styled from "styled-components";
import Icon from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  @media (max-width: 1024px) {
    height: 70px;
  }
`;
const NavbarMenu = styled.nav`
  display: flex;
  z-index: 3;
  justify-content: space-between;
  width: 100%;
  background-color: #000000;
  position: fixed;
  height: 90px;
  box-sizing: border-box;
  font-size: 1.5rem;
  align-items: center;

  &.NavbarHome {
    background-color: transparent;
  }
  @media (max-width: 1024px) {
    height: 70px;
  }
`;
const NavbarOptions = styled.ul`
  box-sizing: border-box;
  display: flex;
  list-style-type: none;
  gap: 6rem;
  padding-left: 3rem;
  align-items: center;
  @media (max-width: 1024px) {
    justify-content: center;
    li {
      svg {
        width: 28px;
        height: 28px;
      }
    }
  }
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

const ExplorerOption = styled(HomeOption)``;

const LogoNavbar = styled(HomeOption)`
  &:hover {
    cursor: pointer;
  }
  svg:hover {
    transform: translateY(0px);
  }
  @media (max-width: 1024px) {
    p {
      font-size: 18px;
    }
  }
`;

const TextLogo = styled.div`
  color: white;
  font-size: 22px;
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
  @media (max-width: 1024px) {
    font-size: 18px;
    width: 150px;
    height: 40px;
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

interface props {
  NavbarHome?: boolean;
  navbarSearch?: boolean;
  login: boolean;
  user?: string;
}

const NavbarDesktop = ({
  NavbarHome = false,
  login,
  user,
  navbarSearch = false,
}: props) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavbarMenu className={NavbarHome ? "NavbarHome" : ""}>
        <NavbarOptions>
          <LogoNavbar onClick={() => navigate("/")}>
            <Icon name="logo" size={55} />
            <TextLogo>
              <p>Tu ruta</p>
              <p>cuenta</p>
            </TextLogo>
          </LogoNavbar>
          {!NavbarHome && (
            <HomeOption onClick={() => navigate("/home")}>
              <Icon name="Home" size={40} />
            </HomeOption>
          )}
          {!navbarSearch && (
            <ExplorerOption onClick={() => navigate("/busquedas")}>
              <Icon name="Explorador" size={45} />
            </ExplorerOption>
          )}
        </NavbarOptions>
        <UserLoginButton onClick={() => navigate("/login")}>
          <Icon name="User" size={37} color="black" />
          {login ? user : <p>Log In</p>}
        </UserLoginButton>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default NavbarDesktop;
