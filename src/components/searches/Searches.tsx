import styled from "styled-components";
import SearchResult from "./SearchResult";
import NavbarDesktop from "../navbar/NavbarDesktop";
import { useState } from "react";
import { UseWindoWidth } from "../../hooks/useWidthScreen";
import NavbarMobile from "../navbar/NavbarMobile";

const SearchesContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background-image: url("https://th.bing.com/th/id/R.afb22a25fa2559cd391c6bda4203998a?rik=VWKkHA7g6Lhnhg&pid=ImgRaw&r=0");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Resultados = styled.div`
  display: flex;
  margin-top: 6rem;
  flex-direction: column;
  width: 100%;
  align-items: center;
  input {
    width: 600px;
    height: 40px;
    border-radius: 99px;
    border: 2px solid #736d17;
    padding-left: 20px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  input:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    input {
      width: 90%;
      border-radius: 0px;
    }
  }
`;

const blogPosts = [
  {
    title: "Explorando los rincones secretos de París",
    img: "https://i.pinimg.com/564x/83/f1/73/83f173e68b5cc8a2c3c1dc619f6374cd.jpg",
    description:
      "París no solo es la Torre Eiffel y el Louvre; es una ciudad llena de rincones secretos y encantadores. Únete a nosotros mientras exploramos pasajes ocultos, cafés históricos y jardines escondidos que hacen de París un destino mágico.",
  },
  {
    title: "Aventuras en la Gran Muralla China",
    img: "https://i.pinimg.com/564x/b8/34/fe/b834fef33c3b0c03e76d6b25825dc713.jpg",
    description:
      "La Gran Muralla es un monumento de la resistencia y la belleza arquitectónica. Camina por sus tramos más desafiantes y disfruta de las impresionantes vistas, mientras te sumerges en la rica historia de China y las leyendas que la rodean.",
  },
  {
    title: "Descubre los sabores de Italia",
    img: "https://i.pinimg.com/564x/fb/cb/bd/fbcbbdb5d0eae50b3eb307e9a033e8b2.jpg",
    description:
      "Italia es un festín para los sentidos, con su increíble cocina y tradiciones culinarias. Desde la pasta casera hasta los gelatos artesanales, cada región tiene su propia especialidad para enamorar tu paladar. ¡Prepárate para un viaje delicioso!",
  },
  {
    title: "Escapada de fin de semana a las montañas",
    img: "https://i.pinimg.com/564x/a2/a9/e0/a2a9e04b1dbe25d4acffd99680171c9d.jpg",
    description:
      "Las montañas son el lugar perfecto para una escapada corta, ofreciendo tranquilidad y aventura. Ya sea que prefieras una caminata relajada o una ruta desafiante, este destino promete renovar tu espíritu y ofrecerte vistas espectaculares.",
  },
  {
    title: "Ruta en bicicleta por la costa de California",
    img: "https://i.pinimg.com/564x/49/5e/31/495e312432cb878b4b178217068fa54e.jpg",
    description:
      "Pedalea a lo largo de la impresionante costa de California y siente la brisa del Pacífico en tu rostro. Con paisajes escénicos, playas infinitas y encantadores pueblos costeros, esta ruta es un sueño para los amantes de la aventura y el mar.",
  },
  {
    title: "Los templos místicos de Japón",
    img: "https://i.pinimg.com/736x/da/23/b7/da23b7dfa5b0a82a3202b5508e342a22.jpg",
    description:
      "Japón es un país donde la tradición y la espiritualidad se unen en templos místicos y serenos. Desde los icónicos templos de Kioto hasta los santuarios ocultos en la naturaleza, explora la rica cultura y la belleza atemporal de estos lugares sagrados.",
  },
  {
    title: "Safari en las llanuras africanas",
    img: "https://i.pinimg.com/564x/57/0e/2b/570e2b28944d7a3925c3a684f849391b.jpg",
    description:
      "Vive la experiencia de un safari en África y observa a los majestuosos leones, elefantes y jirafas en su hábitat natural. Las vastas llanuras africanas te esperan para una aventura inolvidable que conectará tus sentidos con la naturaleza salvaje.",
  },
  {
    title: "Recorrido por los castillos de Alemania",
    img: "https://i.pinimg.com/564x/9d/e9/fc/9de9fcfb3eb123b02ac225552181e96c.jpg",
    description:
      "Alemania está llena de castillos encantadores que parecen sacados de un cuento de hadas. Recorre sus pasillos históricos y maravíllate con la arquitectura gótica, mientras aprendes las historias de reyes, reinas y antiguos caballeros.",
  },
  {
    title: "Buceo en las aguas cristalinas de Maldivas",
    img: "https://i.pinimg.com/564x/c1/c3/94/c1c39498c9655418fb45abf96b320dee.jpg",
    description:
      "Sumérgete en el paraíso submarino de las Maldivas y explora un mundo vibrante de arrecifes de coral y peces exóticos. Las aguas cristalinas y la vida marina te harán sentir que estás en un sueño hecho realidad bajo el océano.",
  },
  {
    title: "Viaje en globo sobre Capadocia",
    img: "https://i.pinimg.com/564x/28/fe/96/28fe96f8141a0f73d92cf7a69220bb7b.jpg",
    description:
      "Flota en un globo aerostático sobre los paisajes surrealistas de Capadocia. Las chimeneas de hadas y valles misteriosos te dejarán sin aliento mientras el sol se alza sobre el horizonte, pintando el cielo con tonos dorados y rosados.",
  },
  {
    title: "La vibrante vida nocturna de Nueva York",
    img: "https://i.pinimg.com/736x/5e/98/62/5e98629912ca87515e2ee60ba50ec41f.jpg",
    description:
      "Nueva York nunca duerme, y su vida nocturna es tan vibrante como diversa. Desde bares de jazz ocultos hasta discotecas de moda y eventos culturales, hay algo para todos los gustos. ¡Descubre por qué esta ciudad es el centro de la energía nocturna!",
  },
  {
    title: "Explorando la selva amazónica",
    img: "https://i.pinimg.com/736x/a6/17/8b/a6178b43577365cfd047ffd288c5ce16.jpg",
    description:
      "La selva amazónica es un mundo lleno de vida, misterio y biodiversidad incomparable. Navega por ríos serpenteantes, observa especies exóticas y sumérgete en la cultura de las tribus locales que llaman a esta región su hogar.",
  },
  {
    title: "Arte y cultura en las calles de Berlín",
    img: "https://i.pinimg.com/564x/0e/8e/5b/0e8e5baa541a57e444e9a8f2f1858a78.jpg",
    description:
      "Berlín es una ciudad vibrante donde el arte y la historia se fusionan. Pasea por sus calles llenas de grafitis, visita galerías contemporáneas y siente el pulso de una metrópoli que siempre está en constante transformación cultural.",
  },
  {
    title: "Trekking en los Andes peruanos",
    img: "https://i.pinimg.com/564x/4b/9e/28/4b9e28d06cf2e1b509697e4ca8a8051a.jpg",
    description:
      "El trekking en los Andes es una aventura que desafía el cuerpo y recompensa el alma. Camina por antiguos caminos incas y admira paisajes espectaculares, desde montañas nevadas hasta valles verdes llenos de historia ancestral.",
  },
  {
    title: "Relajación en las playas de Tailandia",
    img: "https://i.pinimg.com/564x/f8/5b/92/f85b92a2ebf03886918f04a3b9a7a269.jpg",
    description:
      "Las playas de Tailandia son un escape perfecto del estrés diario. Relájate en arenas blancas, nada en aguas turquesas y disfruta de la hospitalidad local, mientras el sol se pone y pinta el horizonte con colores cálidos y vibrantes.",
  },
  {
    title: "Recorrido por los museos de Londres",
    img: "https://i.pinimg.com/564x/a2/4c/5b/a24c5be4f91006c5e586ce67adbf5308.jpg",
    description:
      "Londres es un tesoro de arte y cultura, con museos de renombre mundial como el British Museum y la Tate Modern. Sumérgete en siglos de historia y arte contemporáneo, todo sin pagar un centavo, ya que muchos museos son gratuitos.",
  },
  {
    title: "Escapada romántica en Venecia",
    img: "https://i.pinimg.com/564x/34/cf/eb/34cfeb9712a964ee2e3fa2faf5a56437.jpg",
    description:
      "Venecia es el destino ideal para una escapada romántica. Pasea en góndola por sus canales, cena en encantadoras trattorias y piérdete en sus callejones pintorescos con la persona que amas. El romance se respira en cada rincón.",
  },
  {
    title: "Naturaleza salvaje en Nueva Zelanda",
    img: "https://i.pinimg.com/564x/39/a6/e5/39a6e570bad6f6afec30c3976ab5b836.jpg",
    description:
      "Nueva Zelanda es un paraíso para los amantes de la naturaleza y la aventura. Desde montañas espectaculares hasta costas salvajes, aquí encontrarás paisajes que te dejarán sin palabras. ¡Prepárate para actividades llenas de adrenalina y vistas épicas!",
  },
  {
    title: "Un día en la ciudad de México",
    img: "https://i.pinimg.com/564x/17/c0/c9/17c0c94a3974d0ce09be2dff4b5971c6.jpg",
    description:
      "La Ciudad de México es un caleidoscopio de cultura, historia y sabor. Visita sus impresionantes murales, explora mercados vibrantes y disfruta de la deliciosa comida callejera. Un solo día no es suficiente para todo lo que ofrece esta metrópoli.",
  },
  {
    title: "De compras en los bazares de Marruecos",
    img: "https://i.pinimg.com/736x/33/11/2c/33112c8c9be991e771d7f67e63eca047.jpg",
    description:
      "Los bazares de Marruecos son un paraíso para los amantes de las compras y el regateo. Sumérgete en un mundo de especias exóticas, coloridos tejidos y artículos artesanales mientras te pierdes en el caos organizado de estos fascinantes mercados.",
  },
];

const Searches = () => {
  const [resultados, setResultados] = useState<typeof blogPosts>([]);

  const handleBusquedaOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setTimeout(() => {
        setResultados([]);
      }, 1000);
    } else {
      setTimeout(() => {
        setResultados(
          blogPosts.filter((item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }, 1000);
    }
  };
  const WidthScreen = UseWindoWidth();

  return (
    <SearchesContainer>
      {WidthScreen > 769 ? (
        <NavbarDesktop login={true} color={true} user="Huguito" />
      ) : (
        ""
      )}
      <Resultados>
        <input placeholder="Blogs" onChange={handleBusquedaOnChange} />
        {resultados.map((post, index) => (
          <SearchResult
            id={post.title}
            titulo={post.title}
            descripcion={post.description}
            imagen={post.img}
            color={index % 2 !== 0 ? true : false}
          />
        ))}
      </Resultados>
      {WidthScreen > 769 ? "" : <NavbarMobile />}
    </SearchesContainer>
  );
};

export default Searches;
