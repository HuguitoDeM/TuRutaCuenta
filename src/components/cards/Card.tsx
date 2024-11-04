import styled, { keyframes } from "styled-components";
import Icon from "../Icons/Icons";

const moveCard1 = keyframes`
 0%, 15%{
    transform: scale(0.8) translateX(90px); 
    opacity: 0.7;
   z-index: 1;
  }
 33%, 48%  {
    transform: scale(0.8) translateX(1035px); 
    opacity: 0.7;
   z-index: 1;
  }
 66%, 81% {
    transform: scale(1) translateX(450px); 
    opacity: 0.9;
 z-index: 3;
  }
  100% {
    transform: scale(0.8) translateX(90px); 
    opacity: 0.7;
  z-index: 1;
  }
`;

const moveCard2 = keyframes`
0%, 15% {
    transform: scale(0.8) translateX(-90px); 
    opacity: 0.7;
    z-index: 1;
  }
  33%, 48% {
    
    transform: scale(1) translateX(-450px); 
    opacity: 0.9;
    z-index: 3;
  }
  66%, 81% {
    transform: scale(0.8) translateX(-1035px); 
    opacity: 0.7;
    z-index: 1;
  }
  100% {
    transform: scale(0.8) translateX(-90px); 
    opacity: 0.7;
    z-index: 1;
  }
`;

const moveCard3 = keyframes`
0%, 15% {
    transform: scale(1) translateX(0px); 
    opacity: 0.9;
    z-index: 3;
  }
   33%, 48% {
    transform: scale(0.8) translateX(-470px); 
    opacity: 0.7;
    z-index: 1;
    }
  66%, 81% {
        transform: scale(0.8) translateX(470px); 
        opacity: 0.7;
        z-index: 1;
  }
  100% {
   transform: scale(1) translateX(0px);
    opacity: 0.9;
    z-index: 3;
  }
`;

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
  height: 750px;
  width: 450px;
  border-radius: 5px;
  padding-bottom: 30px;
  img {
    height: 303px;
    width: 333px;
    border-radius: 15px;
    margin: auto;
  }
  h3 {
    font-size: 2.2rem;
    margin: auto;
    margin: 0 30px 30px 30px;
  }
  p {
    font-size: 1.8rem;
    text-align: justify;
    margin: 0 30px 30px 30px;
  }

  &.card1 {
    transform: scale(0.8) translateX(90px);
    z-index: 1;
    opacity: 0.7;
    animation: ${moveCard1} 60s infinite;
    animation-delay: 0s;
  }

  &.card2 {
    z-index: 3;
    opacity: 0.9;
    animation: ${moveCard3} 60s infinite;
  }

  &.card3 {
    transform: scale(0.8) translateX(-90px);
    z-index: 1;
    opacity: 0.7;
    animation: ${moveCard2} 60s infinite;
    animation-delay: 0s;
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
