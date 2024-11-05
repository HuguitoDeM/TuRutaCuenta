import styled from "styled-components";
import Icon from "../Icons/Icons";

const NavbarContainer = styled.div`
display: flex;
width: 100%;
position fixed;
`;
const NavbarMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
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
    border-radius: 99999px;
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
  border-radius: 9999px 0% 0% 9999px;
  font-size: 22px;
  gap: 30px;
  svg {
    background-color: white;
    border-radius: 99999px;
    margin-left: 8px;
  }
  &:hover {
    cursor: pointer;
  }
`;

interface props {
  NavbarHome?: boolean;
}

const Navbar = ({ NavbarHome = false }: props) => {
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
          {!HomeOption && (
            <HomeOption>
              <Icon name="Home" size={50} />
            </HomeOption>
          )}
          <ExplorerOption>
            <Icon name="Explorador" size={45} />
            <input placeholder="Destino turístico" />
          </ExplorerOption>
        </NavbarOptions>
        <UserLoginButton>
          <Icon name="User" size={37} />
          <p>Log In</p>
        </UserLoginButton>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
