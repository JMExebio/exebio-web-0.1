import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
  max-width: 1080px; /* maximo ancho 1080px */
  margin: auto;    /* margen auto */
  padding: 0 1em;  /* espaciadoa arriba/abajo 0 izquierda/derecha 1rem */
  width: 100%;
  box-sizing: border-box; 
  /*overflow: hidden;*/ 
`;

function ExWrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

export default ExWrapper;