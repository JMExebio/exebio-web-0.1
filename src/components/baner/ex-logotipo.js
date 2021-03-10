import React from "react";
import styled from "styled-components";
import LogotipoM from "../../static/img/logotipoM.svg";
const LogotipoStyled = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 340px;
    height: 100px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 450px;
      height: 150px;
    }
  }
`;
function ExLogotipo() {
  return (
    <LogotipoStyled className="hero-logotipo">
      <img src={LogotipoM} alt="" /> 
    </LogotipoStyled>
  );
}

export default ExLogotipo;
