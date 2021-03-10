import React from "react";
import styled from "styled-components";
const SliderFondoStyled = styled.div`
  position:absolute;
  width: 100%; 
  bottom: 10%;
  margin-top: 1em;
  padding: 0;
  margin:0;
  z-index: 100;
  .slider {
    &-logo {
      display: grid;
      grid-template-columns: 1fr 34px 1fr;
      grid-gap: 1em;
      right: 0;
      padding: 0em;
      margin: auto;
      .logo {
        width: 3vw;
        margin: auto;
        padding-bottom: 10px;
      }
      .cmna1 {
        &-a {
          width: 35vw;
          margin: auto;
        }
        &-b {
          width: 30vw;
          margin: auto;
        }
      }
    }
  }
`;
function ExSliderFondo() {
  return (
    <SliderFondoStyled>
      <div className="slider-logo">
        <img src="../../img/CMNA1-03A.png" alt="" className="cmna1-a" />
        <img src="../../img/logo1-32x32.png" alt="" className="logo" />
        <img src="../../img/CMNA1-03B.png" alt="" className="cmna1-b" />
      </div>
    </SliderFondoStyled>
  );
}

export default ExSliderFondo;
