import styled from "styled-components";
import Icon from "../Icons/Icons";

const Navbar = () => {
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
    align-content: center;
    align-items: center;
  `;
  const NavbarOptions = styled.ul`
    box-sizing: border-box;
    display: flex;
    list-style-type: none;
    gap: 6rem;
    padding-left: 3rem;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `;

  const HomeOption = styled.li`
    display: flex;
    position: relative;
    align-items: center;
    transition: all ease-in-out 0.3s;

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

  const UserLoginButton = styled.button`
    display: flex;
    height: 50px;
    background-color: #343434;
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
    &hover: {
      cursor: pointer;
    }
  `;

  return (
    <NavbarContainer>
      <NavbarMenu>
        <NavbarOptions>
          <HomeOption>
            <Icon name="Home" size={50} />
          </HomeOption>
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
