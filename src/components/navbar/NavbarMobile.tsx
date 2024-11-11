import styled from "styled-components";
import Icon from "../Icons/Icons";
import { useNavigate } from "react-router-dom";
import getData from "../../services/getData";

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
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.7707457983193278) 96%,
    rgba(193, 193, 193, 0.4766281512605042) 100%
  );
`;
const HomeOption = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  width: 13%;
  height: 100%;
  svg {
    width: 60%;
    height: 100%;
  }
  @media (max-width: 425px) {
    svg {
      width: 100%;
    }
  }
  svg:hover {
    cursor: pointer;
  }
`;
const SearchOption = styled(HomeOption)``;

const NewPost = styled(HomeOption)``;

const UserOption = styled(HomeOption)``;

const NavbarMobile = () => {
  const userData = getData();
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavbarMenu>
        <NavbarOptions>
          <HomeOption
            onClick={userData ? () => navigate("/home") : () => navigate("/")}
          >
            <Icon name="Home" size={40} />
          </HomeOption>
          {userData ? (
            <SearchOption onClick={() => navigate("/busquedas")}>
              <Icon name="Explorador" size={40} color="gray" />
            </SearchOption>
          ) : (
            ""
          )}
          ;
          {userData ? (
            <NewPost onClick={() => navigate("/new-post")}>
              <Icon name="newPost" size={40} />
            </NewPost>
          ) : (
            ""
          )}
          <UserOption
            onClick={
              userData ? () => navigate("/settings") : () => navigate("/login")
            }
          >
            <Icon name="User" size={40} />
          </UserOption>
        </NavbarOptions>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default NavbarMobile;
