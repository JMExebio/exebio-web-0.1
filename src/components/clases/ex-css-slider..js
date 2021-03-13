import React from "react";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";

const CSSSliderStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 3em;
  margin-top: 4em;
  .enunciado {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 1fr;
    grid-row-gap: 1em;
  }
  .solucion {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 1fr;
    grid-row-gap: 1em;
  }
  .title {
    &-prob {
      width: 30%;
      path {
        fill: #cd08d1;
      }
    }
    &-sol {
      width: 30%;
    }
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;
function ExCSSSlider({ children }) {
  return (
    <ExWrapper>
      <CSSSliderStyled>{children}</CSSSliderStyled>
    </ExWrapper>
  );
}

export default ExCSSSlider;
