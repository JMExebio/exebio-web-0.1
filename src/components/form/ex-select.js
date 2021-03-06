import React from "react";
import styled from "styled-components";
const SelectStyled = styled.select`
  display: block;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.1em;
  color: #30193f;
  padding: 0.4em 1.4em 0.3em 0.8em;
  width: 80%;
  height: 50px;
  box-sizing: border-box;
  margin: 0 10px;
  border-bottom: 3px solid #cd08d1;
  border-radius: 10px;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #e8a1ee;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #e8a1ee 0%, #e8a1ee 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  &::-ms-expand {
    display: none;
  }
  &:focus {
    outline: none;
  }
  option {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.1em;
    color: #30193f;
  }
  option[selected] {
    background: #cd08d1;
  }
`;

function ExSelect({ title, name, items, onChange, value }) {
  return (
    <SelectStyled name={name}  value={value} onChange={onChange}>
      <option value="DEFAULT" disabled>
        {title}
      </option>
      {items.map((item, index) => (
        <option value={item.id} key={index}>
          {item.title}
        </option>
      ))}
    </SelectStyled>
  );
}

export default ExSelect;
