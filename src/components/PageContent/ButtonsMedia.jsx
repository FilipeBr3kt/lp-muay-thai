import React from "react";
import { styled } from "styled-components";
import { colorFor } from "../UI/var";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const GradeButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  place-items: center;
  width: 70%;
`;

const CenterButtons = styled.div`
  display: grid;
  place-items: center;
  margin: 0 20px;
`;

const ContainerButtons = styled.section`
  margin-top: 120px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 625px) {
    margin-top: 80px;
  }
`;

const ButtonInter = styled.button`
  font-size: 17px;
  height: 50px;
  width: 250px;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background-color: ${colorFor};
  color: #fff;
  border-radius: 4px;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    background-color: rgb(99 102 241);
  }
`;

const TitleButton = styled.h4`
  font-size: 17px;
  color: ${colorFor};
  text-align: center;
  margin-bottom: 70px;
`;

const TextButton = styled.span`
  margin-left: 10px;
  font-size: 15px;
`;

export default function ButtonsMedia() {
  const buttonData = [
    {
      icons: faInstagram,
      id: 1,
      text: "Instagram",
      path: "https://www.instagram.com/gomes_bruto/",
    },
    {
      icons: faWhatsapp,
      id: 2,
      text: "Whatsapp",
      path: "https://whats.link/thaybruto",
    },
    {
      icons: faTelegram,
      id: 3,
      text: "Telegram",
    },
    {
      icons: faEnvelope,
      id: 4,
      text: "Email",
    },
  ];
  return (
    <ContainerButtons>
      <div>
        <TitleButton>Já me acompanha nas redes sociais?</TitleButton>
      </div>
      <GradeButtons>
        {buttonData.map((item) => (
          <CenterButtons key={item.id}>
            <a href={item.path} target="_blank">
              <ButtonInter>
                <FontAwesomeIcon icon={item.icons} />
                <TextButton>{item.text}</TextButton>
              </ButtonInter>
            </a>
          </CenterButtons>
        ))}
      </GradeButtons>
    </ContainerButtons>
  );
}
