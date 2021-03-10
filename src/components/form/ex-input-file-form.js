import React from "react";
import styled from "styled-components";
const InputFileFormStyled = styled.div`
  position: relative;
  background: #e8a1ee;
  height: 50px;
  width: 80%;
  margin: 0 10px;
  border-radius: 10px;
  border-bottom: 3px solid #cd08d1;

  input[type="file"] {
    position: absolute;
    display: none;
  }
  .imagen {
    position: absolute;
    font-weight: 500;
    font-size: 18px;
    width: 100%;
    letter-spacing: 0.1em;
    color: #30193f;
    justify-content: center;
    margin: 10px;
  }
  img{
    position: absolute;
    max-height:3.4em;
    max-width: 3.4em;
    background:#140f34;
    align-items: center;
    left: 70%;
  }
`;
function ExInputFileForm({ title, name, onChange,value}) {
  return (
    <InputFileFormStyled>
      <label className="imagen" htmlFor={name}>
        {title} 
      </label>
      <input type="file" name={name} id={name} onChange={onChange} />
      <img src={value} alt=""/>
    </InputFileFormStyled>
  );
}

export default ExInputFileForm;
