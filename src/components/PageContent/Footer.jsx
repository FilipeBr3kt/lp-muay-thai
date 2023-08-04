import React from "react";
import { styled } from "styled-components";
import { colorBorder, fontColortwo } from "../UI/var";

const ContainerEnd = styled.footer`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${colorBorder};
  height: 100px;
  background-color: #fff;

  & div {
    width: 80%;
  }

  & h3 {
    font-size: 13px;
    font-weight: 400;
    color: ${fontColortwo};
  }
`;

export default function Footer() {
  return (
    <ContainerEnd>
      <div>
        <div>
          <h3>Contatos: +55 47 9696-2719</h3>
        </div>
        <div>
          <h3>
            Aviso Legal: Este produto não substitui o parecer médico
            profissional. Sempre consulte um médico para tratar de assuntos
            relativos à saúde.
          </h3>
        </div>
      </div>
    </ContainerEnd>
  );
}
