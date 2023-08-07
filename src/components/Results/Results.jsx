import React from "react";
import { styled } from "styled-components";
import ResultsItems from "./ResultsItems";
import ResultsImage from "./ResultsImage";
import { colorBorder } from "../UI/var";

const ContainerResults = styled.section`
  background-color: #fff;
  border-bottom: 2px solid ${colorBorder};
`;

const ContainerTitle = styled.article`
  display: flex;
  margin-left: 10%;

  & h4 {
    font-size: 20px;
  }
`;

export default function Results() {
  return (
    <ContainerResults id="beneficies">
      <ContainerTitle>
        <h4>Benefícios</h4>
      </ContainerTitle>
      <article>
        <ResultsItems />
      </article>
      <ResultsImage />
    </ContainerResults>
  );
}
