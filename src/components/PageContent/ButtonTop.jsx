import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { colorFor } from "../UI/var";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";

const ButtonContainer = styled.div`
  display: grid;
  place-items: center;
  font-size: 30px;
  position: fixed;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${colorFor};
  opacity: 0.6;
  color: #fff;
  right: 50px;
  bottom: 50px;
  width: 50px;
  height: 50px;
`;

export default function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <ButtonContainer onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronCircleUp} />
        </ButtonContainer>
      )}
    </>
  );
}
