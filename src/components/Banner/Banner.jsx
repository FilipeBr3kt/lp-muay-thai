import React from "react";
import { styled } from "styled-components";
import { colorBorder, colorFor, colorOne } from "../UI/var";
import banner from "../../assets/images/lutaback.png";
import BannerOver from "./BannerOver";

// Container principal do banner
const BannerContainer = styled.section`
  position: relative;
  height: 600px;
  max-height: 600px;
  width: 100%;
  border-bottom: 2px solid ${colorBorder};
  color: #fff;
`;

// Container para a imagem de fundo do banner
const ImageBannerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background: url(${banner});
  background-size: cover;
  background-position: center;

  @media (max-width: 1290px) {
    background: none;
  }
`;

// Container para o conteúdo de texto do banner
const TextContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;
  font-size: 15px;

  @media (max-width: 1015px) {
    grid-template-columns: 100%;
    height: 100%;
  }
`;

// Botão interativo
const ButtonInter = styled.button`
  font-size: 17px;
  padding: 0.7em 9em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  background-color: ${colorFor};
  color: white;
  margin-top: 50px;
  border-radius: 4px;

  &:hover {
    background-color: rgb(99 102 241);
  }

  @media (max-width: 610px) {
    padding: 0.7em 20%;
  }
`;

// Container para o conteúdo de texto
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  text-align: center;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1290px) {
    background-color: #000;
    width: 100%;
  }

  @media (max-width: 1015px) {
    background: url(${banner});
    background-position: 40% 10%;
  }
`;

// Texto "Profissional"
const ProText = styled.h3`
  margin-top: 70px;
  padding: 10px 15px;
  border-radius: 20px 0 20px 0;
  background-color: #fff;
  font-size: 30px;
  font-weight: 600;
  color: #000;

  @media (max-width: 1015px) {
    margin-top: 100px;
  }
`;

// Texto "Muay thai"
const MytText = styled.h1`
  margin-top: 0;
  font-size: 50px;
  font-weight: 600;
`;

// Texto secundário
const SpanText = styled.span`
  font-size: 15px;
  font-weight: 400;
  width: 60%;
  color: ${colorOne};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Container pai para a imagem e o conteúdo de texto no banner
const DivParent = styled.div`
  height: 600px;
  width: 100%;

  @media (max-width: 1015px) {
    display: none;
  }
`;

// Container para a imagem de fundo do banner em dispositivos móveis
const ImageTextContainer = styled.div`
  background: url(${banner});
  height: 600px;
  background-size: inherit;
  background-position: 25%;
  max-width: 100%;
  width: 100%;
  display: none;

  @media (max-width: 1290px) {
    display: block;
  }
`;

// Overlay para exibir o componente BannerOver
const Overlay = styled.div`
  position: absolute;
  top: 600px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 625px) {
    top: 700px;
  }
`;

export default function Banner() {
  return (
    <>
      <BannerContainer>
        <ImageBannerContainer>
          <TextContent>
            <DivParent>
              <ImageTextContainer></ImageTextContainer>
            </DivParent>
            {/* Container para o conteúdo de texto */}
            <TextContainer>
              <div>
                <ProText>Muay thai</ProText>
                <MytText>Forge sua mente e corpo</MytText>
                <SpanText>
                  Desperte a fera interior e torne-se um verdadeiro campeão com
                  nosso exclusivo serviço de Muay Thai Personalizado: Fortaleça
                  corpo e mente, conquiste a grandeza nos ringues da vida!
                </SpanText>
              </div>
              <div>
                {/* Botão "Vagas" */}
                <ButtonInter>Vagas</ButtonInter>
              </div>
            </TextContainer>
          </TextContent>
          {/* Overlay para exibir o componente BannerOver */}
          <Overlay>
            <BannerOver />
          </Overlay>
        </ImageBannerContainer>
      </BannerContainer>
    </>
  );
}
