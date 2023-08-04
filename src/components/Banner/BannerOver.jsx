import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faChartPie,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { colorBorder, colorFor } from "../UI/var";
import { FlexBox } from "../UI/structures";

// Container principal
const Container = styled.section`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  margin: 0 auto;
  height: 150px;
  width: 80%;
  max-width: 80%;
  border: solid 1px ${colorBorder};
  background-color: #fff;
  @media (max-width: 625px) {
    display: none;
    flex-direction: column;
    height: 300px;
    width: 50%;
  }
`;

// Container interno para cada item
const ContainerFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;

  & h3 {
    font-size: 15px;
    color: ${colorFor};
    font-weight: 600;
  }

  & span {
    font-size: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 80%;
    max-height: 80px;
    color: #000;
  }
`;

// Ícone estilizado com FontAwesome
const IconStyled = styled(FontAwesomeIcon)`
  color: ${colorFor};
  margin-right: 15px;
  height: 20px;
`;

export default function BannerOver() {
  // Dados dos itens do banner
  const overData = [
    {
      id: 1,
      icons: faFire,
      title: "Experiência",
      text: "Você ganha força, coragem e confiança através de cada experiência em que você realmente para e encara o medo de frente.",
    },
    {
      id: 2,
      icons: faChartPie,
      title: "Resultados",
      text: "Com uma variedade de exercícios para escolher, você terá tudo o que precisa para entrar na melhor forma de sua vida.",
    },
    {
      id: 3,
      icons: faChartLine,
      title: "Evolução",
      text: "Com a prática contínua do Muay Thai, você evolui constantemente, alcançando sua melhor forma física e mental.",
    },
  ];

  return (
    <Container>
      {/* Mapeia cada item do banner */}
      {overData.map((item) => (
        <ContainerFlexCol key={item.id}>
          <FlexBox>
            <IconStyled icon={item.icons} />
            <h3>{item.title}</h3>
          </FlexBox>
          <span>{item.text}</span>
        </ContainerFlexCol>
      ))}
    </Container>
  );
}
