import React from "react";
import evolution from "./images/evolution.png";
import evolutiontwo from "./images/evoxico.png";
import { styled } from "styled-components";
import { colorBorder, colorFor, colorOne } from "../UI/var";

const Container = styled.article`
  display: grid;
  place-items: center;
  margin-top: 80px;
  padding-bottom: 80px;
  border-top: 2px solid ${colorBorder};
  background-color: ${colorOne};
`;

const GradeItems = styled.div`
  display: grid;
  place-items: center;
  & h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 800;

    @media (max-width: 740px) {
      width: 80%;
      font-size: 30px;
    }
  }

  & h3 {
    text-align: center;
    font-size: 15px;
    font-weight: 400;
    max-width: 60%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & h4 {
    margin: 30px 0 0 0;
    font-size: 15px;
    color: ${colorFor};
  }
`;

const GradeImages = styled.div`
  display: grid;
  place-items: center;
  margin: 30px;
`;

const Image = styled.img`
  width: 1000px;
  @media (max-width: 1070px) {
    display: none;
  }
`;

const ImageTwo = styled.img`
  display: none;
  @media (max-width: 1070px) {
    display: block;
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export default function ResultsImage() {
  return (
    <Container id="results">
      <GradeItems>
        <h4>Resultados</h4>
        <h2>Em busca da sua melhor versão</h2>
        <h3>
          Veja alguns dos resultados dentro do muay thai, em poucos meses de
          treino. Resultado de 6 meses de treino.
        </h3>
      </GradeItems>
      <GradeImages>
        <Image src={evolution} alt="evolução de alunos/professores" />
        <ImageTwo src={evolutiontwo} alt="evolução do professor" />
      </GradeImages>
    </Container>
  );
}
