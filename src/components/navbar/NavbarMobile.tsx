import styled from "styled-components";
import Icon from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
`;
const NavbarOptions = styled.ul`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
`;
const NavbarMenu = styled.nav`
  width: 100%;
  display: flex;

  box-sizing: border-box;
  align-items: center;
  background-color: gray;
  background: linear-gradient(
    185deg,
    rgba(128, 128, 128, 1) 0%,
    rgba(98, 98, 98, 0.9472163865546218) 3%
  );
`;
const HomeOption = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  width: 13%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
  svg:hover {
    cursor: pointer;
  }
`;
const SearchOption = styled(HomeOption)``;

const UserOption = styled(HomeOption)``;

const NavbarMobile = () => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavbarMenu>
        <NavbarOptions>
          <HomeOption>
            <Icon name="Home" size={50} />
          </HomeOption>
          <SearchOption>
            <Icon name="Explorador" size={50} color="gray" />
          </SearchOption>
          <UserOption onClick={() => navigate("/login")}>
            <Icon name="User" size={50} />
          </UserOption>
        </NavbarOptions>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default NavbarMobile;
