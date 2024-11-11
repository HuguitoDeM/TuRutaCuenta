import styled from "styled-components";
import NavbarDesktop from "../components/navbar/NavbarDesktop";
import NavbarMobile from "../components/navbar/NavbarMobile";
import { UseWindoWidth } from "../hooks/useWidthScreen";
import UsersData from "../components/userData/UserData";

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  gap: 2rem;
`;

const UserSetting = () => {
  const WidthScreen = UseWindoWidth();
  return (
    <SettingsContainer>
      {WidthScreen > 769 ? <NavbarDesktop login={true} user="Huguito" /> : ""}
      <UsersData />
      {WidthScreen > 769 ? "" : <NavbarMobile login={true} />}
    </SettingsContainer>
  );
};

export default UserSetting;
