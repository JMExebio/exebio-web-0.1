import React from "react";
import styled from "styled-components";
const ButtonFormStyled = styled.button`
  background: #091fe3;
  border-radius: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 42px;
  letter-spacing: 0.1em;
  color: #e8a1ee;
  margin: 10px;
  outline: none;
  border: none;
`;
function ExButtonForm({ className, currentId }) {
  return (
    <ButtonFormStyled className={className}>
      {currentId === "" ? "Guardar" : "Actualiza"}
    </ButtonFormStyled>
  );
}

export default ExButtonForm;
