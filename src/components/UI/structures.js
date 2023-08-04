import { styled } from "styled-components";
import { colorFor } from "./var";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterGrid = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
`;

export const TitlePlans = styled.h2`
  font-size: 17px;
  margin-top: 50px;
  margin-left: 30px;
  color: #000;

  &.midTitle {
    color: ${colorFor};
  }
`;

export const DescriptionPlan = styled.h4`
  font-size: 14px;
  margin-left: 30px;
  color: gray;
  font-weight: 400;
`;

export const PricePlans = styled.h1`
  font-size: 25px;
  margin-left: 30px;
  color: #000;

  & span {
    font-size: 14px;
    color: gray;
    font-weight: 400;
  }
`;

export const PlansOptions = styled.h4`
  font-size: 14px;
  margin-left: 30px;
  color: gray;
  font-weight: 400;
`;

export const PlansButton = styled.button`
  width: auto;
  margin: auto;
  font-size: 17px;
  padding: 0.5em 6em;
  border: transparent;
  background-color: ${colorFor};
  color: #fff;
  border-radius: 4px;
  margin-bottom: 40px;

  &:hover {
    background-color: rgb(99 102 241);
  }

  &.sideButton {
    background-color: transparent;
    border: 1px solid rgb(99 160 241);

    color: ${colorFor};
    &:hover {
      border: 1px solid ${colorFor};
    }
  }

  @media (max-width: 390px) {
    padding: 0.5em 3em;
  }
`;
