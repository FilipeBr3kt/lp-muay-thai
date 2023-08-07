import React, { useState } from "react";
import { styled } from "styled-components";
import { colorBorder, fontColor } from "../UI/var";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartSimple,
  faBook,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FlexBox } from "../UI/structures";
import logotipo from "../../assets/images/logotipobruto.png";

// Estilização do cabeçalho
const HeaderSty = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  border-bottom: 2px solid ${colorBorder};
  background-color: #fff;
`;

// Estilização do logotipo
const Logo = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;

  @media (max-width: 705px) {
    width: 100%;
  }
`;

const LogoImage = styled.img`
  height: 60px;
  margin-left: 30px;
  z-index: 20;
`;

const Unlist = styled.ul`
  display: flex;
  padding: 0;
  list-style: none;
  z-index: 10;

  @media (max-width: 895px) {
    display: ${(props) => (props.$mobile ? "block" : "none")};
    position: ${(props) => (props.$mobile ? "absolute" : "")};
    width: ${(props) => (props.$mobile ? "450px" : "")};
    height: ${(props) => (props.$mobile ? "100%" : "")};
    left: ${(props) => (props.$mobile ? "0" : "")};
    top: ${(props) => (props.$mobile ? "0" : "")};
    margin: ${(props) => (props.$mobile ? "0" : "")};
    background-color: ${(props) => (props.$mobile ? "#e5e7eb" : "")};
    border: ${(props) => (props.$mobile ? "2px solid #d1d5db" : "")};
    padding-top: ${(props) => (props.$mobile ? "55px" : "")};
  }

  @media (max-width: 705px) {
    width: ${(props) => (props.$mobile ? "100%" : "")};
  }
`;

const List = styled.li`
  &:first-child {
    padding-left: 0;
  }

  @media (max-width: 895px) {
    display: flex;
    margin: 30px auto auto auto;
    align-items: center;
    padding-left: 10px;
    margin-left: 45px;
    height: 35px;
    width: 70%;

    &:hover {
      border-radius: 7px;
      background-color: #d1d5db;
    }

    &:first-child {
      padding-left: 10px;
    }
  }

  @media (max-width: 705px) {
    margin-left: 45px;
  }
`;

const ListItems = styled.a`
  font-size: 15px;
  font-weight: 600;
  margin-left: 30px;
  text-decoration: none;
  color: ${fontColor};

  &:hover {
    cursor: pointer;
  }
`;

const StyledIcons = styled(FontAwesomeIcon)`
  height: 30px;
  margin-right: 30px;
  color: ${fontColor};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const StyledBars = styled(FontAwesomeIcon)`
  display: none;
  z-index: 20;

  @media (max-width: 895px) {
    display: block;
    height: 20px;
    margin-left: 30px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledIconsList = styled(FontAwesomeIcon)`
  display: none;
  height: 20px;
  margin-right: 30px;
  color: ${fontColor};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 895px) {
    display: block;
  }
`;

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  // Manipulador do menu móvel
  const mobileMenuHandler = () => {
    setIsOpenMenu((prevOpen) => !prevOpen);
  };

  // Dados dos itens do menu
  const itemsData = [
    {
      icons: faChartSimple,
      text: "Resultados",
      path: "results",
      id: 1,
    },
    {
      icons: faBook,
      text: "Sobre",
      path: "about",
      id: 2,
    },
    {
      icons: faCheck,
      text: "Planos",
      path: "plans",
      id: 3,
    },
    {
      icons: faPlus,
      text: "Benefícios",
      path: "beneficies",
      id: 4,
    },
  ];

  const handleClickWhatsapp = () => {
    const phoneNumber = "554796962719";
    const link = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.open(link, "_blank");
  };

  return (
    <HeaderSty>
      <Logo>
        <StyledBars icon={faBars} onClick={mobileMenuHandler} />
        <LogoImage src={logotipo} alt="logo" />
      </Logo>
      <FlexBox>
        <Unlist $mobile={isOpenMenu}>
          {itemsData.map((item) => (
            <List key={item.id}>
              <StyledIconsList icon={item.icons} />
              <ListItems href={`#${item.path}`}>{item.text}</ListItems>
            </List>
          ))}
        </Unlist>
      </FlexBox>
      <FlexBox>
        <a href="https://www.instagram.com/gomes_bruto/" target="__blank">
          <StyledIcons icon={faInstagram} />
        </a>
        <StyledIcons icon={faWhatsapp} onClick={handleClickWhatsapp} />
      </FlexBox>
    </HeaderSty>
  );
}
