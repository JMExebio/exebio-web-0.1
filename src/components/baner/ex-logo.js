import React from "react";
import styled from "styled-components";
import LogoM from "../../static/img/logoM.svg";
const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 250px;
      height: 250px;
    }
  }
`;
function ExLogo() {
  return (
    <LogoStyled className="hero-logo">
      <img src={LogoM} alt="" />
    </LogoStyled>
  );
}

export default ExLogo;
