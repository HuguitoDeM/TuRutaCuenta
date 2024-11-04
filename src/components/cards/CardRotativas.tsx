import styled from "styled-components";

import Cards from "./Card";

const CardsRotativas = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardRotativas = () => {
  const descripciones = [
    "Mi aventura por Francia fue como vivir dentro de una postal. Empecé en París, donde las luces y el arte de la ciudad me cautivaron de inmediato. Caminar junto al Sena, perderme en el barrio de Montmartre y...",
    "Recuerdo la primera vez que vi aquel lago de aguas cristalinas fue como si el mundo se detuviera por un instante. El agua era tan transparente que podía ver hasta el último detalle del fondo, como si estuviera...",
    "Explorar China fue como abrir un libro de historias antiguas y modernas al mismo tiempo. Desde el momento en que puse un pie en Pekín y vi la inmensidad de la Gran Muralla, supe que... ",
  ];
  return (
    <CardsRotativas>
      <Cards
        className="card1"
        title="Mi viaje por francia"
        body={descripciones[0]}
        img="https://i.pinimg.com/564x/b8/2e/33/b82e332473712b0f1b56b5b331970d5b.jpg"
      />
      <Cards
        className="card2"
        title="el lago cristalino"
        body={descripciones[1]}
        img="https://i.pinimg.com/564x/c0/8c/f2/c08cf2fa08c982831a40ef1b8a5fecf6.jpg"
      />
      <Cards
        className="card3"
        title="China y mis impresiones"
        body={descripciones[2]}
        img="https://i.pinimg.com/564x/73/6a/60/736a60c7b542f19d6bc673a115aadb8a.jpg"
      />
    </CardsRotativas>
  );
};

export default CardRotativas;
