import React from "react";
import styled from "styled-components";
const FormAdminStyle = styled.form`
  display: grid;
  background: transparent;
  border: 5px solid #cd08d1;
  border-radius: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1em;
  grid-template-areas:
    "primero primero primero"
    "title title title"
    "parte1 parte2 parte3"
    "vacio  limpia  button";
  margin-bottom: 3em;
  .form {
    &-title {
      grid-area: primero;
      margin: auto;
      color: #a60cc2;
      font-weight: 500;
      font-size: 48px;
      line-height: 75px;
      letter-spacing: 0.1em;
    }
  }
`;

function ExForm({ children, onSubmit, title }) {
  return <FormAdminStyle onSubmit={onSubmit}>
      <h1 className="form-title">{title}</h1>
      {children}
      </FormAdminStyle>;
}

export default ExForm;