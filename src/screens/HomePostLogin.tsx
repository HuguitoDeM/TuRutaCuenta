import styled from "styled-components";
import PostsHome from "../components/homePostLogin/PostsHome";
import NavbarDesktop from "../components/navbar/NavbarDesktop";
import { UseWindoWidth } from "../hooks/useWidthScreen";
import NavbarMobile from "../components/navbar/NavbarMobile";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-x: hidden;
  background-color: #a7a7a7;
`;
const MainContent = styled.div`
  margin-top: 5px;
  column-count: 6;

  padding-left: 20px;
  padding-right: 10px;
  @media (max-width: 1440px) {
    column-count: 3;
  }
  @media (max-width: 924px) {
    column-count: 2;
  }
`;
const titles = [
  "Explorando los rincones secretos de París",
  "Aventuras en la Gran Muralla China",
  "Descubre los sabores de Italia",
  "Escapada de fin de semana a las montañas",
  "Ruta en bicicleta por la costa de California",
  "Los templos místicos de Japón",
  "Safari en las llanuras africanas",
  "Recorrido por los castillos de Alemania",
  "Buceo en las aguas cristalinas de Maldivas",
  "Viaje en globo sobre Capadocia",
  "La vibrante vida nocturna de Nueva York",
  "Explorando la selva amazónica",
  "Arte y cultura en las calles de Berlín",
  "Trekking en los Andes peruanos",
  "Relajación en las playas de Tailandia",
  "Recorrido por los museos de Londres",
  "Escapada romántica en Venecia",
  "Naturaleza salvaje en Nueva Zelanda",
  "Un día en la ciudad de México",
  "De compras en los bazares de Marruecos",
];
const img = [
  "https://i.pinimg.com/564x/83/f1/73/83f173e68b5cc8a2c3c1dc619f6374cd.jpg",
  "https://i.pinimg.com/564x/b8/34/fe/b834fef33c3b0c03e76d6b25825dc713.jpg",
  "https://i.pinimg.com/564x/fb/cb/bd/fbcbbdb5d0eae50b3eb307e9a033e8b2.jpg",
  "https://i.pinimg.com/564x/a2/a9/e0/a2a9e04b1dbe25d4acffd99680171c9d.jpg",
  "https://i.pinimg.com/564x/49/5e/31/495e312432cb878b4b178217068fa54e.jpg",
  "https://i.pinimg.com/736x/da/23/b7/da23b7dfa5b0a82a3202b5508e342a22.jpg",
  "https://i.pinimg.com/564x/57/0e/2b/570e2b28944d7a3925c3a684f849391b.jpg",
  "https://i.pinimg.com/564x/9d/e9/fc/9de9fcfb3eb123b02ac225552181e96c.jpg",
  "https://i.pinimg.com/564x/c1/c3/94/c1c39498c9655418fb45abf96b320dee.jpg",
  "https://i.pinimg.com/564x/28/fe/96/28fe96f8141a0f73d92cf7a69220bb7b.jpg",
  "https://i.pinimg.com/736x/5e/98/62/5e98629912ca87515e2ee60ba50ec41f.jpg",
  "https://i.pinimg.com/736x/a6/17/8b/a6178b43577365cfd047ffd288c5ce16.jpg",
  "https://i.pinimg.com/564x/0e/8e/5b/0e8e5baa541a57e444e9a8f2f1858a78.jpg",
  "https://i.pinimg.com/564x/4b/9e/28/4b9e28d06cf2e1b509697e4ca8a8051a.jpg",
  "https://i.pinimg.com/564x/f8/5b/92/f85b92a2ebf03886918f04a3b9a7a269.jpg",
  "https://i.pinimg.com/564x/a2/4c/5b/a24c5be4f91006c5e586ce67adbf5308.jpg",
  "https://i.pinimg.com/564x/34/cf/eb/34cfeb9712a964ee2e3fa2faf5a56437.jpg",
  "https://i.pinimg.com/564x/39/a6/e5/39a6e570bad6f6afec30c3976ab5b836.jpg",
  "https://i.pinimg.com/564x/17/c0/c9/17c0c94a3974d0ce09be2dff4b5971c6.jpg",
  "https://i.pinimg.com/736x/33/11/2c/33112c8c9be991e771d7f67e63eca047.jpg",
];
const HomePostLogin = () => {
  const WidthScreen = UseWindoWidth();

  return (
    <HomeContainer>
      {WidthScreen > 769 ? <NavbarDesktop /> : ""}
      <MainContent>
        <PostsHome titulos={titles} imagenes={img} />
      </MainContent>
      {WidthScreen > 769 ? "" : <NavbarMobile />}
    </HomeContainer>
  );
};

export default HomePostLogin;
