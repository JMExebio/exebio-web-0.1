import React from "react";
import styled from "styled-components";
import Whatsapp from "../../static/img/red-social/icon-whatsapp.svg";
const WhatsappStyled = styled.div`
  position: fixed;
  right: 1em;
  bottom: 3em;
  width: 32px;
  z-index: 100;
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 768px) {
    width: 48px;
  }
  @media screen and (min-width: 1024px) {
    width: 64px;
  }
`;
const ExWhatsapp = () => {
  
  return (
    <WhatsappStyled>
      <a rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=51928351781&text=Hola!&nbsp;me&nbsp;puedes&nbsp;ayudar" target="_blank">
        <img src={Whatsapp} alt="whatsapp" />{" "}
      </a>
        
      
    </WhatsappStyled>
  );
};

export default ExWhatsapp;
