import React from "react";
import { styled } from "styled-components";
import aboutImg from "../../assets/images/sobrev.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const ContainerAbout = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-bottom: 80px;

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    width: 80%;
    height: 500px;
    background: url(${aboutImg});
    background-size: cover;
    background-position: 75% 25%;
    border-radius: 17px;

    @media (max-width: 775px) {
      width: 100%;
      border-radius: 0;
    }

    & h1 {
      font-size: 22px;
      margin-top: 120px;
      margin-left: 50px;

      @media (max-width: 775px) {
        margin-top: 90px;
      }
    }

    & span {
      margin-top: 20px;
      margin-left: 50px;
      width: 60%;
      font-size: 20px;
      font-weight: 600;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10;
      overflow: hidden;
      text-overflow: ellipsis;

      @media (max-width: 775px) {
        width: 70%;
        border-radius: 0;
      }
    }
  }
`;

export default function About() {
  return (
    <ContainerAbout>
      <div>
        <h1>
          <FontAwesomeIcon icon={faQuoteRight} /> Francisco Bruto
        </h1>
        <span>
          "Lembre-se, todos começamos como iniciantes, mas é a perseverança e a
          dedicação que nos transformam em verdadeiros lutadores. Não desista
          quando as coisas ficarem difíceis, pois é nas adversidades que
          descobrimos nossa verdadeira força. Treine com foco, mantenha-se
          disciplinado e verá que cada gota de suor valerá a pena."
        </span>
      </div>
    </ContainerAbout>
  );
}
