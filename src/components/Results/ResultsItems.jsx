import React from "react";
import { colorBorder, fontColortwo } from "../UI/var";
import { styled } from "styled-components";

const GradeItems = styled.article`
  display: flex;
  justify-content: center;
`;

const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border-top: 1px solid ${colorBorder};

  & h3 {
    width: 50%;
    padding: 20px 0;
    font-size: 14px;

    @media (max-width: 850px) {
      width: 100%;
      padding: 15px 0;
    }
  }

  & h4 {
    width: 50%;
    margin-left: 50px;
    padding: 20px 0;
    font-size: 14px;
    font-weight: 400;
    color: ${fontColortwo};

    @media (max-width: 850px) {
      width: 100%;
      margin: 0;
      padding: 10px 0 20px 0;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export default function ResultsItems() {
  const textData = [
    {
      id: 1,
      title: "O Muay Thai ajuda a melhorar a resistência física? ",
      answer:
        "Sim, o treinamento regular de Muay Thai aumenta a resistência cardiovascular e muscular.",
    },
    {
      id: 2,
      title:
        "Quais são os benefícios do Muay Thai para a saúde cardiovascular?",
      answer:
        "O Muay Thai melhora a saúde cardiovascular, pois aumenta a circulação sanguínea e fortalece o coração.",
    },
    {
      id: 3,
      title: "O Muay Thai é eficaz para reduzir o estresse e a ansiedade?",
      answer:
        "Sim, praticar Muay Thai pode ajudar a reduzir o estresse e a ansiedade, proporcionando uma forma de liberar tensões e emoções negativas.",
    },
    {
      id: 4,
      title: "O Muay Thai ajuda a desenvolver habilidades de autodefesa?",
      answer:
        "Sim, o Muay Thai é uma arte marcial eficaz e pode ser usado como uma forma de autodefesa pessoal.",
    },
    {
      id: 5,
      title: "O Muay Thai é indicado para perda de peso?",
      answer:
        "Sim, o Muay Thai é uma excelente atividade para queimar calorias e auxiliar na perda de peso.",
    },
  ];

  return (
    <>
      {textData.map((item) => (
        <GradeItems key={item.id}>
          <ContainerText>
            <h3>{item.title}</h3>
            <h4>{item.answer}</h4>
          </ContainerText>
        </GradeItems>
      ))}
    </>
  );
}
