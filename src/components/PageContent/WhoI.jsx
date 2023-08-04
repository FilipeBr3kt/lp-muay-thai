import React from "react";
import bruto from "../../assets/images/banner.png";
import { styled } from "styled-components";
import { fontColortwo } from "../UI/var";

const ContainerAll = styled.section`
  background-color: #fff;
  padding-top: 80px;
  padding-bottom: 60px;

  & h1 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 60px;
  }
`;

const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 765px) {
    grid-template-columns: 100%;
  }
`;

const GradeImage = styled.article`
  display: flex;
  justify-content: flex-end;
  padding-right: 100px;

  @media (max-width: 765px) {
    padding: 0;
    justify-content: center;
  }

  & img {
    height: 300px;
  }
`;

const GradeText = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 60px;

  @media (max-width: 765px) {
    margin-top: 30px;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  & h2 {
    font-size: 17px;
    font-weight: 800;
  }

  & h3 {
    font-size: 15px;
    width: 80%;
    font-weight: 400;
    color: ${fontColortwo};
  }
`;

export default function WhoI() {
  return (
    <ContainerAll>
      <h1>Quem é Francisco Bruto?</h1>
      <ContainerContent>
        <GradeImage>
          <img src={bruto} alt=" imagem do Francisco Bruto" />
        </GradeImage>
        <GradeText>
          <h2>Francisco Bruto</h2>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
            commodi voluptate asperiores laboriosam mollitia provident
            reprehenderit autem laudantium illum molestiae. Explicabo veniam
            dolor voluptatum esse neque ducimus inventore beatae et!
            <p></p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            nulla in facere consequatur quibusdam fuga officia voluptatem
            temporibus labore, rerum optio eum! Inventore necessitatibus eveniet
            maxime consectetur veritatis nobis dolorem!
          </h3>
        </GradeText>
      </ContainerContent>
    </ContainerAll>
  );
}
