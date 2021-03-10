import React from "react";
import styled from "styled-components";
const InputTextStyled = styled.div`
  position: relative;
  display: inline-flex;
  margin: 0;
  padding: 0 5%;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  .subtitle-form {
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.1em;
    color: #30193f;
    margin: auto;
    z-index: 3;
    justify-content: center;
    left: 34%;
    top: 5px;
    transition: all 0.5s ease;
  }
  .input-form {
    margin: auto;
    position: absolute;
    background: #e8a1ee;
    box-sizing: border-box;
    border-radius: 10px;
    width: 60%;
    height: 50px;
    align-self: center;
    border: none;
    border-bottom: 3px solid #cd08d1;
    left: 30%;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.1em;
    color: #30193f;
    &:focus,
    &:valid {
      outline: none;
      & ~ .subtitle-form {
        color: #cd08d1;
        left: 5%;
        top: 15%;
        font-size: 24px;
        align-self: center;
      }
    }
  }
`;

function ExInputTextAdmin({ className, title, name, onChange, value }) {
  return (
    <InputTextStyled className={className}>
      <input
        className="input-form"
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        required
      />
      <label form="" className="subtitle-form">
        {title}
      </label>
    </InputTextStyled>
  );
}

export default ExInputTextAdmin;
