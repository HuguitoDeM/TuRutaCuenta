import styled from "styled-components";
import Icon from "../Icons/Icons";

const ButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d1e0b;
  font-size: 1.3rem;
  color: white;
  border-radius: 999px;
  height: 55px;
  width: 166px;
  border: none;
  gap: 5px;
  margin-left: 30px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  overflow: hidden;
  height: 600px;
  width: 300px;
  border-radius: 5px;
  padding-bottom: 30px;
  box-sizing: border-box;
  img {
    height: 50%;
    width: 90%;
    border-radius: 15px;
    margin: auto;
  }
  h3 {
    font-size: 1.44rem;
    margin: auto;
    margin: 0 30px 30px 30px;
  }
  p {
    font-size: 0.96rem;
    text-align: justify;
    margin: 0 30px 30px 30px;
  }

  &.card1 {
    z-index: 1;
    transform: scale(0.8) translateX(50px);
    opacity: 0.7;
  }

  &.card2 {
    z-index: 3;
    opacity: 0.9;
  }

  &.card3 {
    z-index: 1;
    transform: scale(0.8) translateX(-50px);
    opacity: 0.7;
  }

  @media (max-width: 1440px) {
    gap: 10px;
    height: 620px;
    width: 450px;

    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    img {
      height: 60%;
      width: 90%;
    }
    &.card1,
    &.card2,
    &.card3 {
      animation: none;
    }

    h3 {
      font-size: 1.8rem;
      margin: 0;
    }

    p {
      font-size: 1rem;
      margin: 0;
    }
    button {
      font-size: 1rem;
      margin: 0;
    }
  }

  @media (max-width: 1024px) {
    gap: 10px;
    height: 620px;

    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    img {
      height: 50%;
      width: 90%;
    }
    &.card1,
    &.card2,
    &.card3 {
      animation: none;
    }

    h3 {
      font-size: 1.8rem;
      margin: 0;
    }

    p {
      font-size: 1rem;
      margin: 0;
    }
    button {
      font-size: 1rem;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    h3 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.33rem;
    }
    img {
      height: 60%;
      width: 90%;
      border-radius: 15px;
      margin: auto;
    }
    &.card1,
    &.card2,
    &.card3 {
      animation: none;
      z-index: 3;
      opacity: 0.9;
      transform: scale(1) translateX(0px);
    }
  }

  @media (max-width: 480px) {
    height: 620px;
    font-size: 15px;
    gap: 30px;
    img {
      height: 50%;

      border-radius: 15px;
    }
    &.card1,
    &.card2,
    &.card3 {
      animation: none;
      z-index: 3;
      opacity: 0.9;
      transform: scale(1) translateX(0px);
    }
    h3 {
      margin-top: 0px;
    }
    p {
      font-size: 1rem;
    }
  }
`;

interface props {
  title: string;
  body: string;
  img: string;
  className: string;
}

const Cards = ({ title, body, img, className }: props) => {
  return (
    <Card className={className}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{body}</p>
      <ButtonCard>
        <span>Read More</span> <Icon name="arrow" size={35} />
      </ButtonCard>
    </Card>
  );
};

export default Cards;
