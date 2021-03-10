import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const ButtonSolucionStyled = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.1em;
  background: transparent;
  color: #e19c5d;
  border: 3px solid #e19c5d;
  box-sizing: border-box;
  border-radius: 20px;
  margin: auto;
  outline: none;
  &:hover::before {
    content: "Solución";
    position: absolute;
    left: 0;
    top: 0;
    padding: 9px 19px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: 0.1em;
    color: #fff;
    background: #e19c5d;
    border: 1px solid #e19c5d;
    box-sizing: border-box;
    border-radius: 9px;
  }
  @media screen and (min-width: 768px) {
    border: 7px solid #e19c5d;
  }
`;
function ExButtonSolucion({problemID}) {
  const history = useHistory();
  function handleClick() {
    history.push(`/solucion/${problemID}`);
  }
  return (
    <ButtonSolucionStyled onClick={handleClick}>Solución</ButtonSolucionStyled>
  );
}

export default ExButtonSolucion;
