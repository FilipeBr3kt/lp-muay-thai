import React from "react";
import { styled } from "styled-components";
import { colorBorder, colorFor } from "../UI/var";
import {
  DescriptionPlan,
  PlansButton,
  PlansOptions,
  PricePlans,
  TitlePlans,
} from "../UI/structures";

const ContainerPlans = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding-top: 50px;
  border-top: solid 2px ${colorBorder};
`;

const TextGrade = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  text-align: center;

  & h4 {
    margin: 0;
    font-size: 15px;
    color: ${colorFor};
  }

  & h2 {
    margin: 15px 0 0 0;
    font-size: 40px;
    font-weight: 800;
    width: 80%;

    @media (max-width: 740px) {
      font-size: 30px;
    }
  }

  & h3 {
    margin: 15px 0 0 0;
    font-size: 15px;
    font-weight: 400;
    max-width: 60%;
  }
`;

const PlansGrade = styled.article`
  display: flex;
  justify-content: center;
  align-items: self-end;
  height: 600px;
  width: 100%;
  margin-bottom: 80px;

  @media (max-width: 1090px) {
    flex-direction: column;
    height: 1500px;
    align-items: center;
  }
`;

const PlansSide = styled.div`
  height: 450px;
  width: 350px;
  border: solid 1px ${colorBorder};
  border-radius: 30px;

  &.planLeft {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  &.planRight {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
  }

  & div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 1090px) {
    margin-top: 30px;
    max-width: 100%;
    width: 400px;

    &.planLeft {
      border-radius: 30px;
      border-right: solid 1px ${colorBorder};
    }

    &.planRight {
      border-radius: 30px;
      border-left: solid 1px ${colorBorder};
    }
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;

const PlanMid = styled.div`
  height: 500px;
  width: 350px;
  border: solid 1px ${colorBorder};
  border-radius: 35px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  & div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  @media (max-width: 1090px) {
    margin-top: 30px;
    border-radius: 35px;
    width: 400px;
  }

  @media (max-width: 420px) {
    width: 90%;
  }
`;

const CheckedGrade = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Message = styled.a`
  width: auto;
  margin: auto;
`;

export default function Plans() {
  return (
    <ContainerPlans>
      <TextGrade>
        <h4>Preços</h4>
        <h2>Planos de preços para equipes de todos os tamanhos</h2>
        <h3>
          Escolha o plano perfeito: Soluções de preços adaptadas a equipes de
          todos os tamanhos
        </h3>
      </TextGrade>
      <PlansGrade>
        <PlansSide className="planLeft">
          <div>
            <TitlePlans>Treino em dupla</TitlePlans>
            <DescriptionPlan>Parceria intensa</DescriptionPlan>
            <PricePlans>
              R$200,00<span>/mês</span>
            </PricePlans>
            <CheckedGrade>
              <PlansOptions>Planos mensais</PlansOptions>
              <PlansOptions>Planos trimestrais</PlansOptions>
            </CheckedGrade>
            <Message href="https://whats.link/planodupla" target="_blank">
              <PlansButton className="sideButton">Ver planos</PlansButton>
            </Message>
          </div>
        </PlansSide>
        <PlanMid>
          <div>
            <TitlePlans className="midTitle">Treino personal</TitlePlans>
            <DescriptionPlan>Treino individualizado</DescriptionPlan>
            <PricePlans>
              R$279,90<span>/mês</span>
            </PricePlans>
            <CheckedGrade>
              <PlansOptions>Planos mensais</PlansOptions>
              <PlansOptions>Planos trimestrais</PlansOptions>
              <PlansOptions>Plano de 10 aulas</PlansOptions>
            </CheckedGrade>
            <Message href="https://whats.link/planosolo" target="_blank">
              <PlansButton className="midButton">Ver planos</PlansButton>
            </Message>
          </div>
        </PlanMid>
        <PlansSide className="planRight">
          <div>
            <TitlePlans>Treino para 4 pessoas</TitlePlans>
            <DescriptionPlan>Equipe dinâmica</DescriptionPlan>
            <PricePlans>
              R$150,00<span>/mês</span>
            </PricePlans>
            <CheckedGrade>
              <PlansOptions>Planos mensais</PlansOptions>
              <PlansOptions>Planos trimestrais</PlansOptions>
            </CheckedGrade>
            <Message href="https://whats.link/planogrupo" target="_blank">
              <PlansButton className="sideButton">Ver planos</PlansButton>
            </Message>
          </div>
        </PlansSide>
      </PlansGrade>
    </ContainerPlans>
  );
}
