import styled from "styled-components";

const TextInTheMiddleContainer = styled.div`
  box-sizing: border-box;
  color: white;
  padding-left: 2rem;
  margin: auto;

  @media (max-width: 1440px) {
    margin-top: 3rem;
    padding-left: 30px;
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 40px;
    margin: 0;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    padding-left: 10px;
    padding-right: 0px;
  }
`;
const FirstTitle = styled.h3`
  font-size: 4rem;
  @media (max-width: 1440px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 3.7rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
const TitleWithColor = styled(FirstTitle)`
  color: #9fcfbb;
`;
const TextDescription = styled.p`
  font-size: 1rem;
  text-align: justify;
  max-width: 700px;
  @media (max-width: 1440px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.7rem;
    max-width: 100%;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;
const TextInTheMiddleHome = () => {
  return (
    <TextInTheMiddleContainer>
      <FirstTitle>CUENTANOS</FirstTitle>
      <TitleWithColor>TUS EXPERIENCIAS</TitleWithColor>
      <TextDescription>
        Esta aplicación permite a los usuarios compartir sus rutas y lugares
        favoritos con otros, creando una comunidad donde nadie se pierde de los
        mejores sitios para explorar. Desde experiencias personales hasta
        recomendaciones únicas, los usuarios pueden descubrir y añadir sus
        destinos preferidos para que todos puedan disfrutar y explorar.
      </TextDescription>
    </TextInTheMiddleContainer>
  );
};

export default TextInTheMiddleHome;
